const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1',
    httpOptions: {
        timeout: 5000
    }
});

module.exports = client;