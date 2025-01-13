const express = require("express");
const {
  enquiryInsert,
  enquiryList,
  enquiryUpdate,
  enquiryDelete,
} = require("../../controllers/web/userEnquiryController");
const enquiryRoutes = express.Router();

// insert query (CREATE)
enquiryRoutes.post("/enquiry-insert", enquiryInsert);

// read query (READ)
enquiryRoutes.get("/enquiry-list", enquiryList);

// update query (UPDATE)
enquiryRoutes.put("/enquiry-update/:id", enquiryUpdate);

// delete query (DELETE)
enquiryRoutes.delete("/enquiry-delete/:id", enquiryDelete);

module.exports = enquiryRoutes;
