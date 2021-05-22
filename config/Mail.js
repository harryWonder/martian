const Nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * This file is responsible for providing an Object representation of the MAIL configuration.
 * 
 * @author Ilori Stephen <stephenilori458@gmail.com>
 * @param {Null}
 * @returns {Object} Mail
 * @name Mail
 * @alias MailConfiguration
 * 
*/

module.exports = {
	transporter: (() => {
		const Transporter = Nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_PORT,
			secure: false,
			auth: {
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD,
			},
		});
	
	 return Transporter;
	}),
	identity: {
		from: process.env.MAIL_FROM,
		appUrl: process.env.APP_URL,
		appName: process.env.APP_NAME
	}
}