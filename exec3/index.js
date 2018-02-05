const express = require('express')
const app = express()
var cors = require('cors');

app.use(cors());
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


// post function here
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log("Test Page");
  console.log(req.body);
  res.json(req.body);
});

let tweetsList = [];

app.post('/tweets', function(req, res) {
    var json = req.body;
    tweetsList.push(json.message);
    res.json({status:"success"});
});

app.get('/tweets', function(req, res) {
    res.json(tweetsList);
});

