const Aws = require('aws-sdk');
require('dotenv').config();

/**
 * This file is responsible for providing a Functional representation of the AWS configuration.
 *
 * @author Ilori Stephen <stephenilori458@gmail.com>
 * @param {Null}
 * @returns {Function} AWS
 * @name Aws
 * @alias AwsConfiguration
 *
 */

module.exports = (() => {
    if (process.env.AWS_SECRET_KEY !== '' && process.env.AWS_ACCESS_KEY !== '' && process.env.AWS_REGION) {
        return Aws.config.update({
            secretAccessKey: process.env.AWS_SECRET_KEY,
            accessKeyId: process.env.AWS_ACCESS_KEY,
            region: process.env.AWS_REGION
        });
    }

    return;
});