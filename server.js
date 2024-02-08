const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorhandler");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("server running");
})
