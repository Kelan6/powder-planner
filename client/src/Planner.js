import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


function Planner({ currentUser, setCurrentUser }) {
  let history = useHistory()
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((res) => res.json())
      .then((events) => {
        setEvents(events);
      });
  }, []);

  function handleAddClick() {
    history.push('./add')

  }
  function onRemoveEvent(event) {
    fetch(`/events/${event.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(setEvents(events.filter(ev => ev.id !== event.id)))
  }
  

  let eventsArr = events.map((event) => {
    return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {event.name}
      </th>
      <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {event.mountain.title}
      </td>
      <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {event.lift.title}
      </td>
      <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {event.user.name}
      </td>
      <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {event.time}
      </td>
      <button onClick={() => onRemoveEvent(event)} type="button" class=" mt-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-small rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">cancel</button>
      {/* <button onClick={() => onRemoveEvent(event)} className='text-red-600 mt-3'> cancel </button> */}
    </tr>)

  })

  

  return (

    <div class="overflow-x-auto relative flex flex-col items-center">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Meet Up Description
            </th>
            <th scope="col" class="py-3 px-6">
              Mountain
            </th>
            <th scope="col" class="py-3 px-6">
              Lift
            </th>
            <th scope="col" class="py-3 px-6">
              User
            </th>
            <th scope="col" class="py-3 px-6">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {eventsArr}
        </tbody>
      </table>
      <button class='text-white' onClick={handleAddClick}> Create Meet Up + </button>
    </div>

  )
}

export default Planner