const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/24f39dbf21f648032d34e2500f0f2ddbf666d131e08a3bd825aa269f779fe9e9-private.pem.key',
  certPath: './awsCerts/24f39dbf21f648032d34e2500f0f2ddbf666d131e08a3bd825aa269f779fe9e9-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1.pem',
  host: 'a1m5imz4qssf6y-ats.iot.us-east-1.amazonaws.com',
  clientId: 'semaphore',
  region: 'us-east-1',
});



module.exports = { device };
