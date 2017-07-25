const jobs = require('./jobs.js')
// const schedule = require('node-schedule')

const metrics = {
  'days-myth': {
    type: 'api',
    schedule: '*/5 * * * * *',
    endpoint: 'https://amio.runkit.io/days-myth/branches/master'
  }
}

module.exports = function () {
  jobs.addJobs(metrics)
}
