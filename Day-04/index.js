let express = require("express");

const app = express();
app.use(express.json());

// GET -> http://localhost:8000
app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Hello to Home Page",
  });
});

// GET -> http://localhost:8000/news
app.get("/news", (req, res) => {
  res.send({
    status: 200,
    message: "News Page",
  });
});

// GET -> http://localhost:8000/about
app.get("/about", (req, res) => {
  res.send({
    status: 200,
    message: "Hello to About Page",
  });
});

// GET -> http://localhost:8000/contact
app.get("/contact", (req, res) => {
  res.send({
    status: 200,
    message: "Hello to Contact Page",
  });
});

// POST -> http://localhost:8000/login
app.post("/login", (req, res) => {
  res.send({
    status: 200,
    message: "Login Page ",
  });
});

// POST -> http://localhost:8000/logout
app.post("/logout", (req, res) => {
  res.send({
    status: 200,
    message: "Logout Page ",
  });
});

app.listen(8000, (req, res) => {
  console.log("Server is running on port 8000");
});
