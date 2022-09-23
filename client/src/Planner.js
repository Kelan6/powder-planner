import React, {useState, useEffect} from 'react'
import {Table} from 'flowbite-react'
import Event from './Event'


function Planner({currentUser, setCurrentUser}) {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((res) => res.json())
      .then((events) => {
        setEvents(events);
      });
  }, []);
  
  function handleAddClick(){
    console.log('this is where we POST event')
  }
  function handleEdit(){
    console.log('this is where we PATCH event')
  }

  let eventsArr = events.map((event)=> {
    return <Event key={event.id} event={event}/>
  })

  return (
    <div class="relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 pt-10px">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Meet Up Description
                </th>
                <th scope="col" class="py-3 px-6">
                    Mountain
                </th>
                <th scope="col" class="py-3 px-6">
                    Friend
                </th>
                <th scope="col" class="py-3 px-6">
                    TIME
                </th>
            </tr>
        </thead> {eventsArr}
        {/* <tbody> 
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    
                </th>
                <td class="py-4 px-6">
                    mountain.name
                </td>
                <td class="py-4 px-6">
                    lift.name
                </td>
                <td class="py-4 px-6">
                    event.time
                </td>
               
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleEdit}>Edit</a>
                </td>
           
            </tr>
            <button className= 'flex justify-center' onClick={handleAddClick}> + </button>
        </tbody> */}
    </table>
   
</div>
  )
}

export default Planner