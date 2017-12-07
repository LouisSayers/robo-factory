
const fetchJSON = (url) => {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
}

const websiteApi = {
  getNextBatch: () => fetchJSON('/robots.json')
} 

export default websiteApi
