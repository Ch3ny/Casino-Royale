import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAccounts } from "../../models/Accounts";
import "./Login.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const loginForm = async () => {
    const accounts = await getAccounts();
    if (accounts.payload) {
      const account = accounts.payload.find(
        acc => acc.name === formData.name && acc.password === formData.password
      );
      if (account) {
        localStorage.setItem("name", formData.name);
        localStorage.setItem("id", account._id);
        redirectToSuccesPage(account._id);
        return;
      }
    }
    setInfo("Wrong name or password");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    loginForm();
  };

  const redirectToSuccesPage = (id) => {
    navigate(`/account/${id}`);
  };

  return (
    <div className="center-container">
      <Link to={"/"}>
        <h1 className="portfolio">Casino Royale</h1>
      </Link>

      <div className="separator"></div>

      <div className="content">
        <div className="login-container">
          <h2>Sign in</h2>
          <form id="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Name:</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <h5>{info}</h5>
              <button type="submit" className="button-account">Sign in</button>
            </div>
            <h5>OR</h5>
            <div className="form-group">
              <Link to={"/register"}>
                <button className="button-account">Sign up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
