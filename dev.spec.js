const newman = require('newman')
const today = Date.now()

function Web_APItesting_dev() {

  newman.run({
    collection: require('./collection_dev/Postman_Echo.postman_collection'),
    // environment: require('./environment/Dev.postman_environment.json'),
    reporters: ['junit', 'htmlextra'],
    reporter: { junit: { export: `./newman/${today}-ManagerClock.xml` } }
  }, function (err) {
    if (err) { throw err }
    console.log('collection run complete!')
  })
}

Web_APItesting_dev()
