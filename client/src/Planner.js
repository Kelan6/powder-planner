import React, {useState, useEffect} from 'react'
import {Table} from 'flowbite-react'


function Planner() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((res) => res.json())
      .then((events) => {
        setEvents(events);
        console.log(events)
      });
  }, []);

  function handleAddClick(){
    console.log('this is where we POST event')
  }
  function handleEdit(){
    console.log('this is where we PATCH event')
  }

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
                    Lift
                </th>
                <th scope="col" class="py-3 px-6">
                    TIME
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Example Placeholder
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
        </tbody>
    </table>
   
</div>
  )
}

export default Planner