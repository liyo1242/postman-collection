const newman = require('newman'); // require newman in your project
const { lineNotify } = require("./lineNotify");
// call newman.run to pass `options` object and wait for callback
async function CrossClockIn() {
    newman.run({
        collection: require('./CrossClockIn.postman_collection.json'),
        reporters: ['junit', 'cli'],
        reporter: { junit: { export: "./newman" } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
        
    });

    newman.run({
        collection: require('./HousekeeperToken.postman_collection.json'),
        reporters: ['junit', 'cli'],
        reporter: { junit: { export: "./newman" } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });
    
    newman.run({
        collection: require('./UnitOwnerAsssembly_API_testing.postman_collection.json'),
        environment : require('./uoa-dev.postman_environment.json'),
        reporters: ['junit', 'cli'],
        reporter: { junit: { export: "./newman" } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });
};

CrossClockIn();