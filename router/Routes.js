const Middleware = require('../middleware/JwtMiddleware');
const Welcome = require('../controllers/Welcome');

/**
 * All the API endpoint or routes to mars is loaded here. You can load in routes from anywhere but it's best that you load them in from the controllers.
 * 
 * @author Ilori Stephen <stephenilori458@gmail.com>
 * @param {Null}
 * @returns {Function} Express
 * @name Routes
 * @alias ApplicationRoutes
 * 
*/

module.exports = (App) => {

	/* Are we still on earth? */
	App.get('/api/v1/welcome', Welcome.whatYearIsIt);

	/* In need of some inspiration? */
	App.all('/api/v1/inspire', (req, res) => {
			res.status(200).send('You can build anything you set your mind to!');
			res.end();
			return;
		});
}