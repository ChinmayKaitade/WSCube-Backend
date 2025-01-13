const express = require("express");
const mongoose = require("mongoose");
const enquiryRoute = require("./App/routes/web/enquiryRoute");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8011;

// base url route
app.use("/api/website/enquiry", enquiryRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB Successfully!");

    app.listen(PORT, () => {
      console.log(`App is listening on Port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
