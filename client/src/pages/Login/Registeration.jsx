import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createAccount, getAccounts } from "../../models/Accounts";
import "./Login.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordAgain: ""
  });
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accounts = await getAccounts();
    const isNameTaken = accounts.payload?.some((account) => account.name === formData.name);

    if (isNameTaken) {
      setInfo("Name already taken");
      return;
    }

    if (formData.password !== formData.passwordAgain) {
      setInfo("Passwords do not match");
      return;
    }

    const account = await createAccount(formData);
    if (account.status === 201) {
      localStorage.setItem("name", formData.name);
      localStorage.setItem("id", account.payload._id);
      navigate(`/`);
    } else {
      setInfo(account.msg);
    }
  };

  return (
    <div className="center-container">
      <Link to={"/"}>
        <h1 className="portfolio">Casino Royale</h1>
      </Link>

      <div className="separator"></div>

      <div className="content">
        <div className="login-container">
          <h2>Sign up</h2>
          <form id="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Enter password"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Password again:</label>
              <input
                type="password"
                name="passwordAgain"
                value={formData.passwordAgain}
                placeholder="Enter password again"
                onChange={handleInputChange}
                required
              />
              <h5>{info}</h5>
              <button type="submit" className="button-account">Create</button>
            </div>
            <h5>OR</h5>
            <div className="form-group">
              <Link to={"/login"}>
                <button className="button-account">Sign in</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
