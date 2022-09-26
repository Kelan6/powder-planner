import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import Event from './Event'


function Planner({currentUser, setCurrentUser}) {
let history = useHistory()
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((res) => res.json())
      .then((events) => {
        setEvents(events);
      });
  }, []);
  
  function handleAddClick(){
    history.push('./add')

  }
function onRemoveEvent(removedEvent){
  fetch(`/events/${removedEvent.id}`, {
    method: "DELETE"
})
.then(res=>res.json())
.then( setEvents(events.filter(ev => ev.id !== removedEvent.id)))
}

  let eventsArr = events.map((event)=> {
    return <Event key={event.id} event={event} onRemoveEvent={onRemoveEvent}/> 

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
                    Time
                </th>
            </tr>
        </thead> {eventsArr}
    </table>
   <button onClick={handleAddClick}> + </button>
</div>
  )
}

export default Planner