/**
 * This File Serves As The Entry Point Into Our Application...
 *
 * @author Ilori Stephen A <stephenilori458@gmail.com>
 * @return {null}
 * @name Index
 * @alias Bootstrap
 * @param Null
 *
 */

const Cors = require('cors');
const Helmet = require('helmet');
const Logger = require('morgan');
const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const FileUpload = require('express-fileupload');

/* Load In Some Configurations */
const Redis = require('./config/Redis');
const Hooks = require('./hooks/Hooks');
const Daemon = require('./jobs/Daemon');
const Routes = require('./router/Routes');
const DatabaseConfig = require('./config/Database')();
const AppConfiguration = require('./config/App')();
const CorsConfiguration = require('./config/Cors')();

/* Init The Express Engine */
const App = Express();

/* Load In Some Middlewares */
App.use(Helmet());
App.use(BodyParser.json());
App.use(Logger('combined'));
App.use(Express.static('public'));
App.use(Cors(CorsConfiguration));
App.use(BodyParser.urlencoded({ extended: false }));
App.use(FileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

try {

    /* Load In The Temp Store */
    Redis();

    /* Setup The Application Database */
    Mongoose.promise = global.Promise;
    Mongoose.connect(`mongodb://${DatabaseConfig.dbHost}:${DatabaseConfig.dbPort}/${DatabaseConfig.dbName}`, {
        family: 4,
        autoIndex: false,
        autoCreate: false,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    /* Load In The Application Routes */
    Routes(App);

    /* Load In The Application Hooks */
    Hooks(App);

    /* LIFTOFF!!!! */
    App.listen(process.env.PORT || AppConfiguration.appPort, () => {
        console.log(`We are running on port ${AppConfiguration.appPort} martians!`);

        /* Start The Martian Daemon */
        Daemon();
    });
} catch (Exception) {
    console.log(Exception);
    throw new Error(`Failed to LIFTOFF: Someone maybe you must have misconfigured something! Here are some Additional Details about the Exception: ${Exception}`);
}