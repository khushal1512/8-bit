const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Router = express.Router();

app.use(cors({ origin: "http://localhost:5173/" , credentials: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, 
    limit: "50mb"
}));

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
}

app
const userRoutes = require("./controller/user");

app.use("/user", userRoutes);

module.exports = app;