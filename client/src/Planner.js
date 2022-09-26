import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Event from './Event'


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

  let eventsArr = events.map((event) => {
    return (<tr>
      <td>
        {event.name}
      </td>
      <td>
        {event.mountain.title}
      </td>
      <td>
        {event.user.name}
      </td>
      <td>
        {event.time}
      </td>

      <td class="py-4 px-6 text-right">
        <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline"> x </a>
      </td>

    </tr>
    )
  })


  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Meet Up Description</th>
            <th>Mountain</th>
            <th>User</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {eventsArr}
        </tbody>
      </table>
      <button onClick={handleAddClick}> + </button>
    </div>
  )
}

export default Planner