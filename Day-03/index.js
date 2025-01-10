let http = require("http");

let server = http.createServer(async (req, res) => {
  if (req.url == "/") {
    res.end("Home Page");
  }

  if (req.url == "/news") {
    let obj = {
      status: 200,
      data: [
        {
          newsTitle: "WSCube",
          newsDesc: "Description for WSCube Tech",
        },
      ],
    };
    res.end(JSON.stringify(obj));
  }

  if (req.url == "/about") {
    res.end("About Page");
  }

  if (req.url == "/contact") {
    res.end("Contact Page");
  }
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000"); // http://localhost:8000/
});
