const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({ origin: "https:localhost:5173" , credentials: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, 
    limit: "50mb"
}));

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
}


const userRoutes = require("./controller/user");

app.use("/api/v2/user", userRoutes);
app.use(ErrorHandler);
module.exports = app;