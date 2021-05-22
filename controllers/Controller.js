const Aws = require('aws-sdk');
const AwsConfig = require('../config/Aws');

/**
	* The Base Controller: All other controllers extends from this controller thereby sharing reusable methods.
	* 
	* @author Ilori Stephen A <stephen.ilori@itscopesolutions.com>
	* @returns {Object}
	* @name Controller
  * @alias BaseController
	* @param {Null}
	* 
*/

class Controller
{
	/**
    * This method generates random strings with a maximum length of 500.
    * 
    * @returns {String} result
    * @name tokenGenerator
    * @param {Integer} length
    * 
  */
	tokenGenerator(length)
	{
    const Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const CharactersLength = Characters.length;
		let result = '';
    
    /* Restrain Max Length To 1k */
    if (length >= 1_000) {
      length = 1_000;
    }
    
    /* Shuffle The Characters String According To The Passed In The Length */
    for ( var i = 0; i < length; i++ ) {
       result += Characters.charAt(Math.floor(Math.random() * CharactersLength));
    }

    /* Return The Generated String */
    return result;
	}

  /**
    * This method returns a one time HTTP Response.
    * 
    * @author Ilori Stephen A <stephen.ilori@itscopesolutions.com>
    * @returns {null}
    * @name response
		* @param {Object} Res
    * @param {Intger} Status
		* @param {String} Message
		* @param {Object} Data
		* @param {Object} Errors
    * 
  */
	response(res, status = 200, message = '', data = {}, errors = {}, type = 'json')
	{
		/* Prepare The Response Payload */
		const Response = { status, message, data, errors };

		/* Send Back An HTTP Response */
		res.status(status)[type](Response);
		res.end();
		return;
	}

	/**
    * This method returns an AWS S3 Bucket Initialization
    * 
    * @author Ilori Stephen A <stephen.ilori@itscopesolutions.com>
    * @returns {Object}
    * @name s3UploadHandler
		* @param {null}
    * 
  */
	async s3UploadHandler()
  {
    const S3 = new Aws.S3();
    const Prefix = new Date().getTime().toString();
    let Response = { status: false, url: null };

    /* Set || Create An AWS Object */
    AwsConfig();

    return S3;
  }
}

module.exports = Controller;