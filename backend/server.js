require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`server work`));