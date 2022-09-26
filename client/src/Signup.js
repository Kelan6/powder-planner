import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ setCurrentUser, setLoggedIn }) {


  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    snowboarder: ''
  });

  const history = useHistory()

  const { name, email, password, snowboarder } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function snowboarderCheck() {
    setFormData({ ...formData, [snowboarder]: true });
    console.log(formData)
  }
  function skierCheck() {
    setFormData({ ...formData, [snowboarder]: false });
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

            <div class="flex items-center">
              <input onClick={snowboarderCheck} id="snowboarder" type="checkbox" name='snowboarder' value='' class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> I prefer 1 board 🏂</label>
            </div>

            <div class="flex items-center">
    <input  onClick={skierCheck} id="skier" type="checkbox" name='skier' value='' class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 2 is better than 1 ⛷ </label>
</div>
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
