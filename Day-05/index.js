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

// GET -> http://localhost:8000/news/:id
app.get("/news/:id", (req, res) => {
  let id = req.params.id;
  res.send(`This is News Page ${id}`);
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

// POST -> http://localhost:8000/login (Using Body) mostly used in form-data
app.post("/login", (req, res) => {
  // console.log(req);
  console.log(req.body); // In the form of Object

  res.send({
    status: 200,
    message: "Login Page Fetched Successfully",
    data: req.body,
  });
});

// POST -> http://localhost:8000/logout (Using Query) mostly used in searching operation
app.post("/logout", (req, res) => {
  // console.log(body.query); // In the form of Object

  // res.send({
  //   status: 200,
  //   message: "Logout Successfully",
  //   bodyData: req.body,
  //   queryData: req.query,
  // });

  res.send(200).json({
    success: true,
    message: "Logout Successfully",
  });

  // Using Query Params
  // http://localhost:8000/logout?userName=ws&password=ws@123
});

app.listen(8000, (req, res) => {
  console.log("Server is running on port 8000");
});
