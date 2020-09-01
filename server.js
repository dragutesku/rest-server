const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config.js');

const server = express();

// parse requests of content-type: application/json
server.use(bodyParser.json());
//parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type: aplication/x-www/form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// Test Route
server.get("/", (req, res) => {
  res.json({ message: "Express is running just fine !" });
});

// Routes
require("./routes/customer.routes.js")(server);
require("./routes/user.routes.js")(server);

//set port, listen for requests
server.listen(config.port, () => {
  console.log(config.message.server);
});