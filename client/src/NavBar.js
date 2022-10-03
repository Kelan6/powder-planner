import React,{useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import snowflake from './assets/snowflake.png'

function NavBar({ currentUser,setCurrentUser, loggedIn, setLoggedIn}) {

  // const api = {
  //   key: '8f80650316956abc5148c9fb777b5296',
  //   base: 'https://api.openweathermap.org/data/2.5/'
  // }
  // const [query, setQuery] = useState('')
  // const [weather, setWeather] = useState({})

  // const search = evt => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         setWeather(result);
  //         setQuery('');
  //         console.log(result);
  //       });
  //   }
  // }
  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`
  // }


  let history = useHistory()

  const handleLogout = () => {
    fetch('/logout', { method: "DELETE" })
        .then(res => {
            if (res.ok) {
                setCurrentUser(null)
                setLoggedIn(false)
                alert('You have logged out')
                history.push('./')
            }
        })
}
function handleClick() {
  history.push('./')
}

function toProfile(){
  history.push('./profile')
}

function toLogin(){
  history.push('./login')
}

  return (
<Navbar 
fluid={true}
rounded={true}
>
<Navbar.Brand >
  <img
    src={snowflake} alt='' width='30px' onClick={handleClick}
  />
  <span className="pl-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white"onClick={handleClick}>
          Mountain Meetup
  </span>
</Navbar.Brand>
<div className="flex md:order-2">
  <Dropdown
    arrowIcon={false}
    inline={true}
    label={<Avatar alt="User settings" img="" rounded={true}/>}
  >
    {loggedIn ?
    (<Dropdown.Header>
      <span className="block text-sm"> Welcome  back {currentUser.name}!
      </span>
      <span className="block truncate text-sm font-medium">
        {currentUser.email}
      </span>
    </Dropdown.Header>)
    :
    (<Dropdown.Header>
      <span className="block text-sm">
        Please Login
      </span>
    </Dropdown.Header>)}
    {loggedIn ? 
    <Dropdown.Item onClick={toProfile}>Profile
    </Dropdown.Item>
    :
    <Dropdown.Item onClick={toLogin}>Profile
    </Dropdown.Item>
    }
    {loggedIn ? 
     <Dropdown.Item>
     <Link className="route-link" to="/planner"> Meetup +</Link>
     </Dropdown.Item>
     :
     <Dropdown.Item>
     <Link className="route-link" to="/login"> Meetup +</Link>
     </Dropdown.Item>
    }
   
    <Dropdown.Divider />
    <Dropdown.Item>
    {loggedIn ? 
    (<div id="banner">
                <Link className="route-link" to="/" onClick={handleLogout}>Logout</Link></div>) 
                :
                (<Link className="route-link" to="/login">Login</Link>)}
    </Dropdown.Item>
  </Dropdown>
  <Navbar.Toggle />
</div>
<Navbar.Collapse>
  <Navbar.Link
    active={true}
    href='./'
  >
    Home
  </Navbar.Link>
  <Navbar.Link href="/about">
    About 
  </Navbar.Link>
  <Navbar.Link href="/mountains">
    Mountains
  </Navbar.Link>
  {loggedIn ?
   <Navbar.Link href="/planner">
   Meetup +
 </Navbar.Link>
 :
 <Navbar.Link href="/login">
 Meetup +
</Navbar.Link>
}
{loggedIn ? 
<Navbar.Link href="/weather">
  Check weather 🌦
</Navbar.Link>
:
<></>}

</Navbar.Collapse>

</Navbar>
  )
}

export default NavBar