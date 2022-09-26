// client/src/components/App.js
import {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Planner from './Planner'
import Mountains from './Mountains'
import About from './About'
import Profile from './Profile'
import EventForm from './EventForm';
import ProfileForm from './ProfileForm'

function App() {
  
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [mountains, setMountains] = useState({})


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
      .then((data) => {
        setMountains(data);
      });
      console.log(mountains)
  }, []);


  return (
    <BrowserRouter>
    <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/planner">
            <Planner  currentUser={currentUser} />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser}setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/signup">
            <Signup setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/mountains">
            <Mountains mountains={mountains}/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/profile">
            <Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path="/add">
            <EventForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path="/update">
            <ProfileForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;