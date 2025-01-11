const { MongoClient } = require("mongodb");

// Connection URL
const dbConnectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbConnectionURL);

const dbConnect = async () => {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db("mongoDBProject_WSCubeTech");
  return db;
};

module.exports = dbConnect;
