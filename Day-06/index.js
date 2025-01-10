let express = require("express");

const app = express();
app.use(express.json()); // pre-built middleware

let myToken = "12345";
let myPass = "abc@123";

// custom middlewares
// Middleware for token validation
const checkToken = (req, res, next) => {
  console.log(req.query.token);
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      status: 400,
      message: "Please Enter Valid Token!",
    });
  }

  if (req.query.token != myToken) {
    return res.send({
      status: "400",
      message: "Invalid Token",
    });
  }

  next();
};

app.use(checkToken); // custom middleware (application level middleware)

// Middleware for password validation
app.use((req, res, next) => {
  if (req.query.pass == "" || req.query.pass == undefined) {
    return res.send({
      status: 400,
      message: "Please Enter Valid Password!",
    });
  }

  if (req.query.pass != myPass) {
    return res.send({
      status: "400",
      message: "Invalid Password",
    });
  }

  next();
});

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Welcome to Home Page",
  });
});

app.get("/news", (req, res) => {
  res.send("Welcome to News Page");
});

app.get("/posts", (req, res) => {
  res.send("Welcome to Posts Page");
});

app.listen(8000, (req, res) => {
  console.log("Server is running on port 8000");
});
