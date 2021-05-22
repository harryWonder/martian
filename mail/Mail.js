const MailConfig = require('../config/Mail');

/**
 * This Class contains a single method which can be extended created for sending emails.
 * 
 * @author Ilori Stephen A <stephen.ilori@itscopesolutions.com>
 * @return {null}
 * @name Mail
 * @param {Null}
 * 
*/

class Mail {
	
	/**
		 * This Method Sends Out A Mail Using The Specified Template name.
		 * 
		 * @author Ilori Stephen A <stephen.ilori@itscopesolutions.com>
		 * @return {null}
		 * @name send
		 * @param Payload
		 * 
	*/
  async send(Payload, template) {
		try {

			/* Load In The Template && Attach Additional Properties To The Mail Payload. */
			const Template = require(`./templates/${template}`);
			Payload.appName = MailConfig.identity.appName;
			Payload.appUrl = MailConfig.identity.appUrl;

			/* Send The Mail Using The Transporter Function */
			await MailConfig.transporter().sendMail({
				from: `${Payload.from || MailConfig.identity.from} <${MailConfig.identity.appName}>`,
				to: Payload.to,
				subject: Payload.subject,
				html: Template(Payload)
			});
		} catch (Exception) {
			throw new Error(`Your Email Could Not Be Sent: Please, ensure that the template name exists: ${template}. You can also check if the from & the to email address is valid! Additional Details about the Exception is provided below. ${Exception}`);
		}
	}
}

module.exports = new Mail();