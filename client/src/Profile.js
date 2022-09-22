import React from 'react'

function Profile({currentUser, setCurrentUser}) {
  
  return (
    <div> 
      <h1>{currentUser.name}</h1>
       </div>
  )
}

export default Profile