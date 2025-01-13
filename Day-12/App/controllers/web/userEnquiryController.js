const enquiryModel = require("../../models/enquiry.model");

// CREATE - Insert
const enquiryInsert = (req, res) => {
  const { sName, sEmail, sPhone, sMessage } = req.body;
  let enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  });
  enquiry
    .save()
    .then(() => {
      res.send({
        status: 1,
        message: "Data Saved in MongoDB",
      });
    })
    .catch((err) => {
      res.send({
        status: 0,
        message: "Error in Saving Data",
        err,
      });
      console.log(err);
    });
};

// READ - List
const enquiryList = async (req, res) => {
  let enquiryList = await enquiryModel.find();

  res.json({
    status: 200,
    message: "Enquiry List fetched Successfully",
    data: enquiryList,
  });
};

// UPDATE - update
const enquiryUpdate = async (req, res) => {
  const enquiryId = req.params.id;
  let { sName, sEmail, sPhone, sMessage } = req.body;
  let updateObj = {
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  };
  const updateRes = await enquiryModel.updateOne({ _id: enquiryId }, updateObj);

  res.send({
    status: 1,
    message: "Enquiry updated Successfully",
    updateRes,
  });
};

// DELETE - delete
const enquiryDelete = async (req, res) => {
  let enquiryId = req.params.id;
  let deleteEnquiry = await enquiryModel.deleteOne({
    _id: enquiryId,
  });

  res.send({
    status: 1,
    message: "Enquiry delete Successfully",
    id: enquiryId,
    delRes: deleteEnquiry,
  });
};

module.exports = { enquiryInsert, enquiryList, enquiryUpdate, enquiryDelete };
