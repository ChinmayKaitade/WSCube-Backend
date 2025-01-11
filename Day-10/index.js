const express = require("express");
const dbConnect = require("./dbConnection");
const { ObjectId } = require("mongodb");
const app = express();

app.use(express.json());

app.get("/student-read", async (req, res) => {
  const myDB = await dbConnect();
  const studentCollection = myDB.collection("students");

  // find
  const data = await studentCollection.find().toArray();

  let resObject = {
    status: 1,
    message: "Student List",
    data,
  };

  res.send(resObject);
});

app.post("/student-insert", async (req, res) => {
  const myDB = await dbConnect();
  const studentCollection = myDB.collection("students");
  //   let obj = {
  //     sName: req.body.sName,
  //     sEmail: req.body.sEmail,
  //   };

  const { sName, sEmail } = req.body;
  let obj = { sName, sEmail };

  // same email id will not exists (checking same if email match)
  const checkEmail = await studentCollection.findOne({ sEmail });
  if (checkEmail) {
    return res.send({
      status: 0,
      message: "Email Id already exists.",
    });
  }

  // insert query
  let insertResponse = await studentCollection.insertOne(obj);

  let resObject = {
    status: 1,
    message: "Data Inserted Successfully",
    insertResponse,
  };

  res.send(resObject);
});

// delete
app.delete("/student-delete/:id", async (req, res) => {
  const { id } = req.params; // :id
  const myDB = await dbConnect();
  const studentCollection = myDB.collection("students");

  const delResponse = await studentCollection.deleteOne({
    _id: new ObjectId(id),
  });

  const resObj = {
    status: 1,
    message: "Data Deleted",
    delResponse,
  };

  res.send(resObj);
});

// update
app.put("/student-update/:id", async (req, res) => {
  const { id } = req.params; // :id
  const { sName, sEmail } = req.body;
  // let Obj = { sName, sEmail }; // data

  let Obj = {}; // data

  if (sName !== "" && sName !== undefined && sName !== null) {
    Obj["sName"] = sName;
  }

  if (sEmail !== "" && sEmail !== undefined && sEmail !== null) {
    Obj["sEmail"] = sEmail;
  }

  console.log(Obj);

  const myDB = await dbConnect();
  const studentCollection = myDB.collection("students");

  const updateResponse = await studentCollection.updateOne({
    _id: new ObjectId(id),
    // $set: { sName, sEmail },
    $set: { Obj },
  });

  resObj = {
    status: 1,
    message: "Data Updated",
    updateResponse,
  };

  res.send(resObj);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
