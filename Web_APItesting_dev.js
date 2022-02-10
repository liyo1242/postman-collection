const newman = require('newman'); // require newman in your project
const { lineNotify } = require("./api/lineNotify");
// call newman.run to pass `options` object and wait for callback
async function CrossClockIn() {

    // 跨案場打卡API測試
    newman.run({
        collection: require('./collection/CrossClockIn_API_testing.postman_collection.json'),
        reporters: ['junit', 'cli'],
        reporter: { junit: { export: "./newman" } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });

    // 區權會API測試 
    newman.run({
        collection: require('./collection/UnitOwnerAsssembly_API_testing.postman_collection.json'),
        environment: require('./environment/uoa-dev.postman_environment.json'),
        reporters: ['junit', 'cli'],
        reporter: { junit: { export: "./newman" } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });
    
};

CrossClockIn();