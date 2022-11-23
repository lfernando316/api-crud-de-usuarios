const router = require("express").Router();

const crudServices = require("./crud.services");

router.get("/users", crudServices.getAllUsers);
router.post("/users", crudServices.postNewUser);
router.get("/users/:id", crudServices.getUserById);

module.exports = router;
