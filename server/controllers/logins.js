const Login = require("Casino/server/models/logins");

exports.getAllLogins = async (req, res) => {
  try {
    const result = await Login.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Logins found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Logins not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLoginById = async (req, res) => {
  try {
    const result = await Login.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Login found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Login not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteLogin = async (req, res) => {
  try {
    const result = await Login.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Login deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateLogin = async (req, res) => {
  try {
    const data = {
      username: req.body.username,
      password: req.body.password
    };
    const result = await Login.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Login updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Login was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createLogin = async (req, res) => {
  try {
    const data = new Login({
     username: req.body.username,
     password: req.body.password
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Login created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Login was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
