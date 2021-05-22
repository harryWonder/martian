const Redis = require('redis');
require('dotenv').config();

/**
 * This file is responsible for providing a Functional representation of the MAIL configuration.
 * 
 * @author Ilori Stephen <stephenilori458@gmail.com>
 * @param {Null}
 * @returns {Function} Redis
 * @name Redis
 * @alias RedisConfiguration
 * 
*/

module.exports = (() => {
	if (process.env.REDIS_HOST !== '' && process.env.REDIS_PORT !== '')
	{
		const Client = Redis.createClient({
			port: process.env.REDIS_PORT,
			host: process.env.REDIS_HOST,
		});
		
		/* Emit A Success Message To The Console. */
		Client.on('connect', () => {
			console.log('Redis Has Been Connected Successfully.');
		});
		
		/* Emit A Warning Message To The Console. */
		Client.on('error', (error) => {
			console.warn('Failed To Connect To Redis Local Store.');
		});

		return;
	}

	return;
});