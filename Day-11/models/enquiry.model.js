const mongoose = require("mongoose");

const userEnquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const enquiryModel = mongoose.model("enquiry", userEnquirySchema);
module.exports = enquiryModel;
