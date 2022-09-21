// client/src/components/App.js
import {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Planner from './Planner'
import Mountains from './Mountains'

function App() {
  
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [mounts, setMounts] = useState({})

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

  useEffect(() => {
    fetch("/mountains")
      .then((res) => res.json())
      .then((Arr) => {
        setMounts(Arr);
        console.log(mounts)
      });
  }, []);
  return (
    <BrowserRouter>
    <NavBar setCurrentUser={setCurrentUser}loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/planner">
            <Planner setCurrentUser={setCurrentUser}loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser}setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/signup">
            <Signup setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/our-mountains">
            <Mountains mounts={mounts}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;