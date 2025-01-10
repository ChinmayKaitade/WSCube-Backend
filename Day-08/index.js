let express = require("express");
require("dotenv").config();

const checkToken = require("./checkTokenMiddleware");

const app = express();
app.use(express.json()); // pre-built middleware

let PORT = process.env.PORT;
console.log(process.env.SECRET);

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Welcome to Home Page",
  });
});

app.get("/news", checkToken, (req, res) => {
  res.send("Welcome to News Page");
});

app.get("/posts", (req, res) => {
  res.send("Welcome to Posts Page");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
