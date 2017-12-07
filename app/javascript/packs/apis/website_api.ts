
const getRequest = (url) => {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
}

const postRequest = (url, body='') => {
  return fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: body
    }).then(function (response) {
      if (response.status !== 200) {
        let errorMessage = "Looks like the server didn't like something!"
        return Promise.reject(new Error(errorMessage))
      }
    }).then(function (response) {
      return response.json();
    })
}

const websiteApi = {
  getNextBatch: () => getRequest('/robots.json'),
  extinguishRobot: (robotId) => postRequest(`/robots/${robotId}/extinguish.json`),
}

export default websiteApi
