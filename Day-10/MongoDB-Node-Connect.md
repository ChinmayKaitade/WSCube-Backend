## 📁 **`dbConnection.js`**

This file handles the connection to the **MongoDB database**.

### 🔍 **Code Explanation**

```javascript
const { MongoClient } = require("mongodb");

// Connection URL
const dbConnectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbConnectionURL);
```

- **`MongoClient`**: This is a MongoDB client library used to interact with the MongoDB database.
- **`dbConnectionURL`**: This specifies the MongoDB connection string. In this case, the database server is hosted locally (`127.0.0.1`) on **port `27017`**.

```javascript
const dbConnect = async () => {
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db("mongoDBProject_WSCubeTech");
  return db;
};
```

- **`dbConnect` Function**:
  - **`await client.connect()`**: Connects to the MongoDB server.
  - **`console.log`**: Logs a success message once the connection is established.
  - **`client.db("mongoDBProject_WSCubeTech")`**: Connects to a specific database named **`mongoDBProject_WSCubeTech`**.
  - **`return db`**: Returns the **database object** for further use.

```javascript
module.exports = dbConnect;
```

- The **`dbConnect`** function is exported so it can be reused in other files, such as `index.js`.

---

## 📁 **`index.js`**

This file sets up an **Express.js server** and defines two API endpoints.

### 🔍 **Code Explanation**

```javascript
const express = require("express");
const dbConnect = require("./dbConnection");
const app = express();

app.use(express.json());
```

- **`express`**: Framework for building web applications and APIs.
- **`dbConnect`**: Imports the database connection function from `dbConnection.js`.
- **`app.use(express.json())`**: Middleware that parses incoming JSON requests.

---

### 🚀 **API Endpoints**

#### 1️⃣ **GET: `/student-read`**

```javascript
app.get("/student-read", (req, res) => {
  res.send("Student View API");
});
```

- **Purpose**: A simple endpoint that returns `"Student View API"`.
- **Use Case**: Can be expanded later to fetch student data from MongoDB.

---

#### 2️⃣ **POST: `/student-insert`**

```javascript
app.post("/student-insert", async (req, res) => {
  const myDB = await dbConnect();
  const studentCollection = myDB.collection("students");

  const { sName, sEmail } = req.body;
  let obj = { sName, sEmail };

  let insertResponse = await studentCollection.insertOne(obj);
  let resObject = {
    status: 1,
    message: "Data Inserted Successfully",
    insertResponse,
  };

  res.send(resObject);
});
```

- **Purpose**: Insert a student record into the `students` collection.
- **Key Steps**:
  1.  Connect to the database using `dbConnect`.
  2.  Access the `students` collection.
  3.  Extract `sName` and `sEmail` from the request body.
  4.  Insert the data into the collection using `insertOne`.
  5.  Send a response with the insertion result.

**Response Example:**

```json
{
  "status": 1,
  "message": "Data Inserted Successfully",
  "insertResponse": { "acknowledged": true, "insertedId": "someId" }
}
```

---

### 🎧 **Start the Server**

```javascript
app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
```

- The server starts and listens on **port `8000`**.
- You can now access the endpoints at:
  - `http://localhost:8000/student-read`
  - `http://localhost:8000/student-insert`

---

## 📝 **Summary**

1. **`dbConnection.js`**: Handles MongoDB connection logic.
2. **`index.js`**:
   - Sets up the **Express.js** server.
   - Defines endpoints to **read** and **insert** student data into MongoDB.
