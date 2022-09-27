import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import snowflake from './assets/snowflake.png'

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
    const { name, value, type, checked } = e.target;
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
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src={snowflake} alt="logo" />
          Mountain Meetup
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form onSubmit= {handleSubmit} class="space-y-4 md:space-y-6" >
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input type="text" value={name} onChange={handleChange} name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name here" required="" />
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" value={email} onChange={handleChange} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" value={password} onChange={handleChange} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms"  name='snowboarder' value={snowboarder} onChange={handleChange} class="font-light text-gray-500 dark:text-gray-300"> I shred on 1 board 🏂 </label>
                </div>
              </div>
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href='./login' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;

{/* <div className="form-box">
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
  ); */}