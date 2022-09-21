import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {

  return (
    <div id='navbar'>
                <Link className="route-link" to="/">Home</Link>
                <Link className="route-link" to="/planner">Planner</Link>
                <Link className="route-link" to="/signup">Signup</Link>
                <Link className="route-link" to="/login">Login</Link>
    </div>
  )
}

export default NavBar