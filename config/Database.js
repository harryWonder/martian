require('dotenv').config();

/**
 * This file is responsible for providing an Object representation of the database configuration.
 * 
 * @author Ilori Stephen <stephenilori458@gmail.com>
 * @param {Null}
 * @returns {Object} Database
 * @name Database
 * @alias DatabaseConfiguration
 * 
*/

module.exports = () => {
    return {
        dbName: process.env.DATABASE_NAME,
        dbHost: process.env.DATABASE_HOST,
        dbPort: process.env.DATABASE_PORT,
        dbUserName: process.env.DATABASE_USER_NAME, /* Required If You Want To Build Your Own DB URL */
        dbPassword: process.env.DATABASE_PASSWORD /* Required If You Want To Build Your Own DB URL */
    }
}