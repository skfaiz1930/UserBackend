const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/register", userController.addUser);
router.get("/get-users", userController.getUsers);
router.get("/get-user/:id", userController.getUser);
router.put("/edit/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
