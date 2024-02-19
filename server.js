const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5001',
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
