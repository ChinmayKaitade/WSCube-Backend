let myToken = "12345";

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

module.exports = checkToken;
