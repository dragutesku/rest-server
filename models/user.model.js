const sql = require("../config/database.js");

// Model: User

const User = function(customer) {
  this.email = user.email;
  this.username = user.username;
  this.firstName = user.firstName;
  this.secondName = user.secondName;
  this.password  = user.password;
  this.active = user.active;
  this.roles = user.role;
};

// CREATE
User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", {...newUser});
    result(null, {...newUser});
  });
};

// FIND by ID
User.findById = (userId, result) => {
  sql.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ kind: "non_found "}, null);
  });
};

// GET
User.getAll = result => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

// UPDATE
User.updateById = (id, customer, result) => {
  sql.query("UPDATE users SET email = ?, username = ?, firstName = ?, secondName = ?, password = ?, active = ?, role = ? WHERE id = ?",
  [
    user.email, 
    user.username, 
    user.firstName, 
    user.secondName, user.password, user.active, user.role
  ], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found User with id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("updated user: ", {id: id, ...user});
    result(null, {id: id, ...user});
  });
};

// DELETE
User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (resizeTo.affectedRows == 0) {
      // not found User with the id
      result({kind: "not_found"}, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

// DELETE ALL
User.removeAll = result => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users`);
    result(null, res);
  }) ;
};

module.exports = User;
