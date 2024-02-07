const express = require("express");
const dotenv = require("dotenv");

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log("server running");
})
