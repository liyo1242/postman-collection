const newman = require('newman');
const { lineNotify } = require("./api/lineNotify"); // LineNotify API
const today = Date.now()

async function Web_APItesting_pre() {

    // 跨案場打卡_異常打卡API測試
    newman.run({
        collection: require('./collection/ManagerClock_API_testing.postman_collection'),
        environment: require('./environment/Pre.postman_environment.json'),
        reporters: ['junit', 'cli', 'htmlextra'],
        reporter: { junit: { export: `./newman/${today}-ManagerClock.xml` } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });

    // 區權會API測試 
    newman.run({
        collection: require('./collection/UnitOwnerAssembly_Prod_API_testing.postman_collection.json'),
        environment: require('./environment/Pre.postman_environment.json'),
        reporters: ['junit', 'cli', 'htmlextra'],
        reporter: { junit: { export: `./newman/${today}-UnitOwnerAssembly.xml` } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });

    // 實名制帳號綁定卡號API測試
    newman.run({
        collection: require('./collection/AuthorizationCarrier_API_testing.postman_collection.json'),
        environment: require('./environment/Pre.postman_environment.json'),
        reporters: ['junit', 'cli', 'htmlextra'],
        reporter: { junit: { export: `./newman/${today}-AuthorizationCarrier.xml` } }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });
};

Web_APItesting_pre();