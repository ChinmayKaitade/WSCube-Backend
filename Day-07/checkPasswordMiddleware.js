let myPass = "abc@123";

// Middleware for password validation
const checkPassword = (req, res, next) => {
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
};

module.exports = checkPassword;
