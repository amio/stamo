const NodeSchedule = require('node-schedule')
const metricApi = require('./metrics/api.js')

const jobs = {}

const addJob = (name, config) => {
  const { type, schedule, endpoint } = config
  switch (type) {
    case 'api':
      jobs[name] = NodeSchedule.scheduleJob(schedule, () => {
        metricApi(endpoint)().then(result => {
          console.log(result)
        })
      })
      break
  }
  return jobs[name]
}

const addJobs = (cfgs) => {
  Object.keys(cfgs).forEach(name => {
    addJob(name, cfgs[name])
  })
}

const list = () => jobs

module.exports = {
  addJob,
  addJobs,
  list
}
