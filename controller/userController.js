const user = require("../model/user");

exports.addUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const User = await user.create(userData);
    console.log("user created", User);
    res.json({ User, status: true });
  } catch (err) {
    console.log(err);
    res.json({ error, status: false });
  }
};

exports.updateUser = async (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  try {
    const id = req.params.id;
    const data = req.body;
    const User = await user.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    res.json({ User, status: true });
  } catch (err) {
    console.log(err);
    res.json({ err, status: false });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const User = await user.findByIdAndDelete(id);
    res.json({ User, status: true });
  } catch (err) {
    console.log(err);
    res.json({ err, status: false });
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await user.find();
    res.json({ users, status: true });
  } catch (err) {
    res.json({ users: null, status: false });
  }
};

//get a single user
exports.getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const users = await user.findById(id);
    res.json({ users, status: true });
  } catch (err) {
    res.json({ users: null, status: false });
  }
};
