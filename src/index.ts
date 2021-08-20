// setup environtment configuration
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// // setup express framework, server configuration and import router object
const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3000,
  progressv1 = require('./router/v1/progress')
// enable express body parser
app.use(express.json()); 
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/v1/progress', progressv1)

// // other than test environtment, use express app to listen for request
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server running on ${PORT}!`));
}
// // export app for test purposes
module.exports = app;
