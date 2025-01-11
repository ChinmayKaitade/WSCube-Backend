const express = require("express");
const mongoose = require("mongoose");
const enquiryModel = require("./models/enquiry.model");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());

// insert query (CREATE)
app.post("/api/enquiry-insert", (req, res) => {
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
});

// read query (READ)
app.get("/api/enquiry-list", async (req, res) => {
  let enquiryList = await enquiryModel.find();

  res.json({
    status: 200,
    message: "Enquiry List fetched Successfully",
    data: enquiryList,
  });
});

// update query (UPDATE)
app.put("/api/enquiry-update/:id", async (req, res) => {
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
});

// delete query (DELETE)
app.delete("/api/enquiry-delete/:id", async (req, res) => {
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
});

// Connect to MongoDB
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected to MongoDB Successfully!");

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
