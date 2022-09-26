import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ setCurrentUser, setLoggedIn }) {


  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    snowboarder: false
  });


  const history = useHistory()

  const { name, email, password, snowboarder } = formData;

  function handleChange(e) {
    const { name, value, type,checked} = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
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
          console.log(formData)
          history.push("/");
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    <div className="form-box">
      <div className="login-box">
        <h1>Signup</h1>
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
              <label>Email:</label>
              <input type="text" name="email" value={email} onChange={handleChange} placeholder="  Enter Email" />
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
            <input name='snowboarder' value={snowboarder} onChange={handleChange} type="checkbox"/> <span> 🏂 snowboarder </span>
            <section className="input-form">
              <input className="lg-su-button" type="submit" value="Sign up!" />
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
