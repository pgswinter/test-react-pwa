const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const fs = require('fs');

const app = express()
const db = require('./db.json');
const dir = path.join(__dirname, './logs');
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/build')))

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(dir, 'log.txt'), { flags: 'a' })
}));

// Anything that doesn't match the above, send back the index.html file
app.get('/web', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})
app.get('/api', (req,res) => res.status(200).send({
  data: db
}));
// Choose the port and start the server
const PORT = process.env.PORT || 3535;
app.listen(PORT, () => {
  console.log(`Server is start up on port ${PORT}`)
})


