/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');


// allows controller to read json files from req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const apiRouter = require('./api/api.js');
// Define route handlers
app.use('/api', apiRouter);

// statically serve everything in the build folder on the route '/build
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(3000);

module.exports = app;
