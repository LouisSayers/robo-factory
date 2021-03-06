
const getRequest = (url) => {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
}

const requestWithBody = (requestType, url, body) => {
  return fetch(url, {
    method: requestType,
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(body)
  }).then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error("Looks like the server didn't like something!"))
    } else {
      return Promise.resolve(response)
    }
  }).then(function (response) {
    return response.json();
  })
}

const postRequest = (url, body={}) => requestWithBody('post', url, body)
const putRequest = (url, body={}) => requestWithBody('put', url, body)

const websiteApi = {
  getNextBatch: () => getRequest('/robots.json'),
  extinguishRobot: (robotId) => postRequest(`/robots/${robotId}/extinguish.json`),
  recycleRobots: (robotIds) => postRequest(`/robots/recycle.json`, { robotIds }),
  shipRobots: (robotIds) => putRequest(`/shipments/create`, { robotIds }),
}

export default websiteApi
