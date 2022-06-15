const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      require: true,
    },
    employee: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
