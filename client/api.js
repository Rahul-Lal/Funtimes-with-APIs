import request from 'superagent'

const swapiURL = 'https://swapi.co/api/people'

function getPeople () {
  return request.get(swapiURL)
    .then(res => {
      console.log(res.body.results)
    })
}

export default getPeople
