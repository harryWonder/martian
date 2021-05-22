const Controller = require('./Controller');

/**
	* The default controller that ships with your installation!
	* 
	* @author Ilori Stephen A <stephenilori458@gmail.com>
	* @returns {Object}
	* @name Welcome
  * @alias WelcomeController
	* @param {Null}
	* 
*/

class Welcome extends Controller
{
	constructor() { super(); }

	/**
    * The current year on planet earth!
    * 
    * @returns {null}
    * @name whatYearIsIt
    * @param {Object} req
		* @param {Object} res
    * 
  */
	whatYearIsIt(req, res)
	{
		const Year = new Date().getFullYear();

		super.response(
			res,
			200,
			`It's Year ${Year}! Are we on mars yet?`
		);
		return;
	}
}

module.exports = new Welcome();