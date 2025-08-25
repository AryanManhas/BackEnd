const express = require('express')

// express

const app = express();

//  create the route (after domain xyz.com is domain)
// xyz.com/ here / route is afte rslash

//app.get(route , requestHandler) //requestHandler is also a middleware

app.get('/', (req, res) => { // requestHandler is a function
  res.send('Hello User!!')
})


app.get('/profile', (req, res) => { // requestHandler is a function
  res.send('Hello World!!')
})

app.listen(3000)

// nodemon is globally executed to run the file and create server and make the change in realtime eg if we change something on server after reload it will reflect and to run we simpally use tHe command nodemon filename

