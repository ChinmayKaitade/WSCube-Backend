`enquiry.model.js` Schema File

```javascript
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
```

enquiry -> collection
userEnquirySchema -> fields

# **Connecting MongoDB with Node.js (Simplified Guide)**

Connecting MongoDB with Node.js allows you to interact with your database directly from your application. Below are the **steps, descriptions, and explanations** in simpler terms:

---

## **Step 1: Install MongoDB and Node.js**

- **Description:** Make sure MongoDB and Node.js are installed on your system.
- **Explanation:** MongoDB is your database, and Node.js is your runtime environment for running JavaScript code.

- **Command to check Node.js version:**
  ```bash
  node -v
  ```
- **Command to check MongoDB version:**
  ```bash
  mongod --version
  ```

---

## **Step 2: Create a Node.js Project**

- **Description:** Create a new Node.js project using `npm`.
- **Explanation:** This sets up a project directory with the required configuration file.

- **Commands:**
  ```bash
  mkdir my-mongo-app
  cd my-mongo-app
  npm init -y
  ```

---

## **Step 3: Install MongoDB Driver (mongoose)**

- **Description:** Install the `mongoose` library, which simplifies MongoDB operations.
- **Explanation:** `mongoose` helps you interact with MongoDB more easily using schemas and models.

- **Command:**
  ```bash
  npm install mongoose
  ```

---

## **Step 4: Create a Connection File**

- **Description:** Create a file (e.g., `app.js`) to connect Node.js with MongoDB.
- **Explanation:** This file will include the connection string and connection logic.

- **File:** `app.js`

  ```javascript
  const mongoose = require("mongoose");

  // Connection to MongoDB
  mongoose
    .connect("mongodb://localhost:27017/mydatabase")
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
  ```

- **Explanation:**
  - `mongoose.connect` connects to MongoDB using a URL (`mongodb://localhost:27017/mydatabase`).
  - `localhost` is the address, `27017` is the default MongoDB port, and `mydatabase` is the database name.
  - `.then()` runs if the connection is successful.
  - `.catch()` handles errors if the connection fails.

---

## **Step 5: Run the Connection Script**

- **Description:** Run the file to test the connection.
- **Explanation:** This verifies if Node.js can successfully connect to MongoDB.

- **Command:**

  ```bash
  node app.js
  ```

- **Expected Output:**
  ```
  MongoDB connected successfully
  ```

---

## **Step 6: Create a Schema and Model (Optional but Recommended)**

- **Description:** Define a schema and model to structure your data.
- **Explanation:** A schema sets rules for your database documents.

- **Update `app.js`:**

  ```javascript
  const mongoose = require("mongoose");

  mongoose
    .connect("mongodb://localhost:27017/mydatabase")
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });

  // Define a schema
  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
  });

  // Create a model
  const User = mongoose.model("User", userSchema);

  // Add a new user
  const newUser = new User({
    name: "John Doe",
    age: 25,
    email: "john@example.com",
  });
  newUser
    .save()
    .then(() => console.log("User added successfully"))
    .catch((err) => console.error("Error adding user:", err));
  ```

- **Explanation:**
  - `userSchema`: Defines the structure for `User` documents.
  - `User`: Creates a model based on the schema.
  - `new User`: Adds a new user document to the database.

---

## **Step 7: Verify in MongoDB Compass or Shell**

- **Description:** Check if the data is added to MongoDB.
- **Explanation:** Use MongoDB Compass GUI or Mongo Shell to view the database.

- **In Mongo Shell:**
  ```bash
  use mydatabase
  db.users.find()
  ```

---

### **Summary of the Steps:**

1. Install Node.js and MongoDB
2. Create a Node.js project
3. Install `mongoose`
4. Write connection code in `app.js`
5. Run the script
6. Create a schema and add data
7. Verify the data in MongoDB
