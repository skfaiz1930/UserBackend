const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/route");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || port, () => {
      console.log(`Server is running ${port}`);
    });
  })
  .catch((err) => console.log("error while connecting to db", err));
app.use("", router);
