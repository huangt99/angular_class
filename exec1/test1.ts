const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Working here')
  })

  
app.get('/hello', function (req, res) {
  res.send('Hello World!')
})


app.use('/static', express.static('static'))
app.use('/test', express.static('public'))
app.listen(2000, function () {
  console.log('Test app listening on port 2000!')
})