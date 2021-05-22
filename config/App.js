require('dotenv').config();

/**
 * This file is responsible for providing an Object representation of the configuration file in the .env file.
 * 
 * @author Ilori Stephen <stephenilori458@gmail.com>
 * @param {Null}
 * @returns {Object} App
 * @name App
 * @alias ApplicationConfigurations
 * 
*/

module.exports = () => {
    return {
      appName: process.env.APP_NAME,
      appUrl: process.env.APP_URL,
      appPort: process.env.APP_PORT,
      appVersion: process.env.APP_VERSION,
			userHeaders: process.env.JWT_USER_HEADERS,
			adminHeaders: process.env.JWT_ADMIN_HEADERS,
			jwtSecretUser: process.env.JWT_USER_SECRET,
			jwtSecretAdmin: process.env.JWT_ADMIN_SECRET
    }
}