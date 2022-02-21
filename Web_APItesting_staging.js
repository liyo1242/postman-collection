const newman = require('newman');
const { lineNotify } = require("./api/lineNotify"); // LineNotify API

async function Web_APItesting_staging() {

    // 跨案場打卡API測試
    // newman.run({
    //     collection: require('./collection/CrossClockIn_API_testing.postman_collection.json'),
    //     environment: require('./environment/Staging.postman_environment.json'),
    //     reporters: ['junit', 'cli'],
    //     reporter: { junit: { export: "./newman" } }
    // }, function (err) {
    //     if (err) { throw err; }
    //     console.log('collection run complete!');
    // });

    // 區權會API測試 
    newman.run({
        collection: require('./collection/UnitOwnerAsssembly_Prod_API_testing.postman_collection.json'),
        environment: require('./environment/Prod.postman_environment.json'),
        reporters: ['junit', 'cli'],
        reporter: { junit: { export: "./newman" } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });
};

Web_APItesting_staging();