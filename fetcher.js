const request = require('request');
const fs = require('fs');
request('http://example.edu/', (error, response, body) => {

  if (error) {
    console.log(error)
  }

  if (response && response.statusCode) {
    fs.writeFile('./test.txt', body, (error) => {
      if (error) {
        console.log('Error;', error)
      } else {
        console.log('Downloaded and saved 3261 bytes to ./test.txt')
      }
    })
  }

})