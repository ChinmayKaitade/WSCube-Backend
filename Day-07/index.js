let express = require("express");
const checkToken = require("./checkTokenMiddleware");
const checkPassword = require("./checkPasswordMiddleware");

const app = express();
app.use(express.json()); // pre-built middleware

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Welcome to Home Page",
  });
});

app.get("/news", checkToken, checkPassword, (req, res) => {
  res.send("Welcome to News Page");
});

app.get("/posts", (req, res) => {
  res.send("Welcome to Posts Page");
});

app.listen(8000, (req, res) => {
  console.log("Server is running on port 8000");
});
