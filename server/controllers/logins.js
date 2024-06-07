const Login = require("../models/logins");

exports.getAllLogins = async (req, res) => {
  try {
    const logins = await Login.find();
    res.status(200).json({ msg: "Logins found", payload: logins });
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving logins", error: error.message });
  }
};

exports.getLoginById = async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);
    if (!login) {
      return res.status(404).json({ msg: "Login not found" });
    }
    res.status(200).json({ msg: "Login found", payload: login });
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving login", error: error.message });
  }
};

exports.deleteLogin = async (req, res) => {
  try {
    const login = await Login.findByIdAndDelete(req.params.id);
    if (!login) {
      return res.status(404).json({ msg: "Login not found" });
    }
    res.status(200).json({ msg: "Login deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting login", error: error.message });
  }
};

exports.updateLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const login = await Login.findByIdAndUpdate(req.params.id, { username, password }, { new: true });
    if (!login) {
      return res.status(404).json({ msg: "Login not found" });
    }
    res.status(200).json({ msg: "Login updated", payload: login });
  } catch (error) {
    res.status(500).json({ msg: "Error updating login", error: error.message });
  }
};

exports.createLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newLogin = new Login({ username, password });
    const savedLogin = await newLogin.save();
    res.status(201).json({ msg: "Login created", payload: savedLogin });
  } catch (error) {
    res.status(500).json({ msg: "Error creating login", error: error.message });
  }
};
