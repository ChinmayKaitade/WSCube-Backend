const enquiryModel = require("../../models/enquiry.model");

// create enquiry
const enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;

  // Create a new enquiry instance
  let enquiry = new enquiryModel({
    name,
    email,
    phone,
    message,
  });

  // Save the enquiry to the database
  enquiry
    .save()
    .then(() => {
      // Send success response after saving
      res.send({
        status: 1,
        message: "Enquiry Inserted Successfully",
      });
    })
    .catch((err) => {
      // Handle errors and send an error response
      res.send({
        status: 0,
        message: "Error in Inserting Enquiry",
        error: err.message || err, // Provide descriptive error
      });
    });
};

// read enquiry
const enquiryList = async (req, res) => {
  let enquiry = await enquiryModel.find();
  res.send({
    status: 1,
    message: "Enquiry Data Fetched Successfully",
    enquiryList: enquiry,
  });
};

// edit enquiry
const enquirySingleRow = async (req, res) => {
  let enqId = req.params.id;
  let enquiry = await enquiryModel.findOne({ _id: enqId });

  res.send({ status: 1, enquiry });
};

// delete enquiry
const enquiryDelete = async (req, res) => {
  let enqId = req.params.id;
  let enquiry = await enquiryModel.deleteOne({ _id: enqId });

  res.send({
    status: 1,
    message: "Enquiry Deleted Successfully",
    enquiry,
  });
};

// update enquiry
const enquiryUpdate = async (req, res) => {
  let enquiryId = req.params.id;
  let { name, email, phone, message } = req.body;

  let updateObj = {
    name,
    email,
    phone,
    message,
  };

  let updateRes = await enquiryModel.updateOne({ _id: enquiryId }, updateObj);

  res.send({
    status: 1,
    message: "Enquiry Updated Successfully",
    updateRes,
  });
};

module.exports = {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquirySingleRow,
  enquiryUpdate,
};
