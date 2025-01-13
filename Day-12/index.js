const express = require("express");
const mongoose = require("mongoose");
const enquiryRoutes = require("./App/routes/web/enquiryRoutes");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());

// fixed url for versioning
app.use("/web/api/enquiry", enquiryRoutes);
// http://localhost:8000//web/api/enquiry

// Connect to MongoDB
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected to MongoDB Successfully!");

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
