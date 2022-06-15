const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/register", userController.addUser);
router.get("/get-students", userController.getUsers);
router.put("/edit/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
