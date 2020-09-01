module.exports = server => {
  /* 
    /customers: GET, POST, DELETE
    /customers/:customerId: GET, PUT, DELETE
  */

  const customer = require("../controllers/customer.controller");

  // Create a new customer
  server.post("/customers", customer.create);

  // Retrieve all Customers
  server.get("/customers", customer.findAll);

  // Retrieve a single customer by id
  server.get("/customers/:customerId", customer.findOne);

  // Update a Customer with customerId
  server.put("/customers/:customerId", customer.update);

  // Delete a Customer with id
  server.delete("/customers/:customerId", customer.delete);

  // Delete all Customers
  server.delete("/customers", customer.deleteAll);
};
