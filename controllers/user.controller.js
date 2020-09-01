const User = require("../models/user.model.js");

// Create and save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty !"
    });
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    password: req.body.password,
    active: req.body.active,
    role: req.body.role,
  });

  // Save user in the database
  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Error occured while creating the user"
      });
    } else res.send(data);
  });
};

// Retrieve all Users from the db
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Error while retrieving the user"
      });
    } else res.send(data);
  })
}