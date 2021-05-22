require('dotenv').config();

/**
 * This File Returns The Needed Configuration To Protect The Application From Unauthorized Domains...
 * 
 * @author Ilori Stephen A <stephenilori458@gmail.com>
 * @return Function
 * @name Cors
 * @param Null
 * 
 */

 const Cors = () => {
    const Whitelist = ['http://127.0.0.1', 'http://localhost']
    const CorsOptions = {
      origin: function (origin, callback) {
        if (Whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      }
    };

    return CorsOptions;
 }

 // Export The Generated Function...
 module.exports = Cors;