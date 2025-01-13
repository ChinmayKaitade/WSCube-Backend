const express = require("express");
const {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquirySingleRow,
  enquiryUpdate,
} = require("../../controllers/web/enquiryController");
const enquiryRoute = express.Router();

// Routes
enquiryRoute.post("/insert", enquiryInsert);
enquiryRoute.get("/view", enquiryList);
enquiryRoute.delete("/delete/:id", enquiryDelete);
enquiryRoute.get("/single/:id", enquirySingleRow);
enquiryRoute.put("/update/:id", enquiryUpdate);

module.exports = enquiryRoute;
