const express = require('express');
const bodyParser = require('body-parser');
const port = 7878;

var app = express();

app.use(bodyParser.json());

app.post('/postregister', (req, res) => {
    res.send({
      deviceFingerprint: "device_id"
    });
    res.end();
  })
  .post('/preregister', (req, res) => {
    res.send({
      deviceFingerprint: 'device_id',
      reviewStatus: 'pass',
      requestId: 'request_id'

    });
    res.end();
  })
  .listen(port, () => {
    console.log(`Server running on port: [${port}]`);
  });