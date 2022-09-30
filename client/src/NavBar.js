import React from 'react'
import {useHistory, Link} from 'react-router-dom'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import snowflake from './assets/snowflake.png'

function NavBar({ currentUser,setCurrentUser, loggedIn, setLoggedIn}) {

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
      <span className="block text-sm"> Welcome  Back {currentUser.name} !
      </span>
      <span className="block truncate text-sm font-medium">
        {currentUser.email}
      </span>
    </Dropdown.Header>)
    :
    (<Dropdown.Header>
      <span className="block text-sm">
        Please Log In to view Profile and Events
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
     <Link className="route-link" to="/planner"> Events</Link>
     </Dropdown.Item>
     :
     <Dropdown.Item>
     <Link className="route-link" to="/login"> Events</Link>
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
 
</Navbar.Collapse>
</Navbar>
  )
}

export default NavBar