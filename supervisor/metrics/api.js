const axios = require('axios')
const { SUCCESS, FAILURE } = require('./constants.js')

module.exports = function (endpoint, config) {
  return () => {
    const timeStart = new Date()
    return axios.get(endpoint, config)
      .then(res => {
        const timeSpan = new Date().getTime() - timeStart
        return {
          status: SUCCESS,
          value: timeSpan
        }
      }, e => {
        return {
          status: FAILURE,
          message: e.toString()
        }
      })
  }
}
