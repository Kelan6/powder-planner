import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({setLoggedIn, setCurrentUser}) {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
      });
    
      const history = useHistory()
    
      const { name, password } = formData;
    
      function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch(`/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          if (res.ok) {
            res.json().then((formData) => {
              setCurrentUser(formData);
              setLoggedIn(formData)
              history.push("/");
            });
          } else {
            res.json().then((errors) => {
              console.error(errors)
            });
          }
        });
      }
  return (
    <div className="form-box">
    <div className="login-box">
      <h1>Login</h1>
      <div className="form-container">
        <form className="login-signup-form" onSubmit={handleSubmit}>
          <section className="input-form">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="  Enter Name">
            </input>
          </section>
          <section className="input-form">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="  Enter Password" />
          </section>
          <section className="input-form">
            <input className="lg-su-button" type="submit" value="Login!" />
          </section>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login