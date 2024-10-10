const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const AWS = require('aws-sdk');  
const { v4: uuidv4 } = require('uuid'); 
require('dotenv').config();

const app = express();
app.use(cors());

const table_name = process.env.table;
const port = process.env.port;

AWS_SDK_LOAD_CONFIG= process.env.AWS_SDK_LOAD_CONFIG
AWS.config.update({
  region: process.env.region, 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });


app.post('/api/claims', upload.single('file'), async (req, res) => {
  const { policyNumber, vehicleNumber, incidentDate, description } = req.body;
  const file = req.file;
  
  const claimId = uuidv4();

  const params = {
    TableName: table_name,
    Item: {
      claimId: claimId,
      policyNumber: policyNumber,
      vehicleNumber: vehicleNumber,
      incidentDate: new Date(incidentDate).toISOString(),
      description: description,
      file: file ? file.filename : null,
      dateSubmitted: new Date().toISOString()
    }
  };

  try {
   
    await dynamoDB.put(params).promise();

    
    res.status(200).json({ message: 'Claim submitted successfully', claimData: params.Item });
  } catch (error) {
    console.error('Error submitting claim to DynamoDB:', error);
    res.status(500).json({ message: 'Error submitting claim', error });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
