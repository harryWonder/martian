const Cron = require('node-cron');

/**
  * This file is responsible for creating Cron Jobs. Martians multi task.
  *
  * @author Ilori Stephen A <stephenilori458@gmail.com>
  * @returns {Object}
  * @name Cron
  * @alias CronDaemons
  * @param {Null}
  *
*/

module.exports = () => {
  Cron.schedule('*/10 * * * *', async () => {
    console.log('Are we on mars yet?');
  });
}