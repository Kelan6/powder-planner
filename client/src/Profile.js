import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card} from 'flowbite-react'
import snowflake from './assets/snowflake.png'
import './App.css'

function Profile({currentUser, setCurrentUser}) {
  



let history = useHistory()

function handleProfileClick(){
  history.push('./update')
}

function handleHomeClick(){
  history.push('./planner')
}

console.log(currentUser.events)

  return (
    <div className='background'>
    <div className='flex flex-col items-center pt-12'>
      
  <Card className='flex'>
    <div className="  w-96 flex justify-end px-4 pt-4">
      
    </div>
    <div className="flex flex-col items-center pb-10">
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src={snowflake}
        alt=""
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {currentUser.name}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {currentUser.email}
      </span>
      <div className='mt-3'>
      {currentUser.snowboarder ? <div> 🏂 </div> : <div> ⛷ </div>}
      </div>
      <div  className="mt-4 flex space-x-3 lg:mt-6">
        <button onClick = {handleProfileClick}
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit Profile
        </button>
        <a onClick={handleHomeClick}
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Meet up +
        </a>
      </div>
    </div>
  </Card>
  <div> 
  </div>
</div>
</div>
  )
}

export default Profile