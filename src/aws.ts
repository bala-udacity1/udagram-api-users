import AWS = require('aws-sdk');
import {config} from './config/config';

// Configure AWS
if(config.aws_profile !== "DEPLOYED") {
  const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
  AWS.config.credentials = credentials;
}