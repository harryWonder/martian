const Jwt = require('jsonwebtoken');
const ApplicationConfiguration = require('../config/App');

/**
  * This Class is responsible for intercepting incoming requests and validating them.
  *
  * @author Ilori Stephen A <stephenilori458@gmail.com>
  * @returns {Object}
  * @name JwtMiddleware
  * @alias AuthMiddleware
  * @param {Null}
  *
*/
class JwtMiddleware {

	/**
    * This method is responsible for intercepting incoming requests for all the user routes.
    *
    * @author Ilori Stephen A <stephenilori458@gmail.com>
    * @returns {Object}
    * @name userGuard
    * @alias userMiddleware
    * @param {Object} req
    * @param {Object} res
		* @param {Function} next
    *
  */
  async userGuard(req, res, next)
  {
		const Headers = req.headers;
    const Response = { status: 200, message: '', errors: {} };

    /* Verify The JWT Token */
    Jwt.verify(Headers[ApplicationConfiguration.userHeaders], ApplicationConfiguration.jwtSecretUser, async function (err, decoded) {
			if (err) {
				Response.status = 401;
				Response.message = err.message;
				Response.errors.token = 'You do not have enough access rights.';

				res.status(401).json(Response);
				res.end();
				return;
			} else {
				req.user = await UserModel.findOne({ where: { email: decoded.data.email, phone: decoded.data.phone, status: true, deletedAt: null } });
        next();
        return;
			}
    });
  }

	/**
    * This method is responsible for intercepting incoming requests for all the admin routes.
    *
    * @author Ilori Stephen A <stephenilori458@gmail.com>
    * @returns {Object}
    * @name adminGuard
    * @alias adminMiddleware
    * @param {Object} req
    * @param {Object} res
		* @param {Function} next
    *
  */
	async adminGuard(req, res, next)
	{
		const Headers = req.headers;
    const Response = { status: 200, message: '', errors: {} };

    /* Verify The JWT Token */
    Jwt.verify(Headers[ApplicationConfiguration.userHeaders], ApplicationConfiguration.jwtSecretAdmin, async function (err, decoded) {
			if (err) {
				Response.status = 401;
				Response.message = err.message;
				Response.errors.token = 'You do not have enough access rights.';

				res.status(401).json(Response);
				res.end();
				return;
			} else {
				req.admin = await AdminModel.findOne({ where: { email: decoded.data.email, phone: decoded.data.phone, status: true, deletedAt: null } });
        next();
        return;
			}
    });
	}
}

module.exports = new JwtMiddleware();