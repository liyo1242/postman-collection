const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./CrossClockIn.postman_collection.json'),
    reporters: 'cli',
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});

newman.run({
    collection: require('./HousekeeperToken.postman_collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});