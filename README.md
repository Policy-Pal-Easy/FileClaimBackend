# Insurance Claims API

This is a simple Express application that allows users to submit insurance claims, including the option to upload a file. The claims are stored in an Amazon DynamoDB database.

## Features

- RESTful API to submit claims
- File upload functionality using Multer
- Integration with AWS DynamoDB for claim storage
- CORS enabled for cross-origin requests

## Technologies Used

- Node.js
- Express
- Multer (for file uploads)
- AWS SDK (for DynamoDB)
- Body-parser (for parsing incoming request bodies)
- dotenv (for environment variable management)
- UUID (for generating unique claim IDs)

## Prerequisites

- Node.js and npm installed
- AWS account with DynamoDB setup
- An S3 bucket for file storage (optional, if you want to store uploaded files on S3)

## Environment Variables

Make sure to create a `.env` file in the root of your project with the following variables:

```plaintext
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
region=your_aws_region
table=your_dynamodb_table_name
port=your_desired_port
AWS_SDK_LOAD_CONFIG=true 
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory> 
2. Install dependencies:
    ```bash
   npm install
3. Usage
```bash
   npm start
```

# MIT License

Copyright (c) 2024 Sanket Koirala

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

