// client/src/components/App.js
import {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function App() {
  
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch(`/logged_in`)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true)
          res.json().then(user => setCurrentUser(user))
        }

      }
      )
  }, loggedIn);


  return (
    <BrowserRouter>
    <NavBar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser}setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/signup">
            <Signup setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;