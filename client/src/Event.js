import React from 'react'



function Event({event, setEvents}) {



console.log(event)

    function handleDelete(){
        fetch(`/events/${event.id}`, {
            method: "DELETE"
        })
        .then(res=>res.json())
        .then((data) => {
            setEvents(data);
          })
    }
    
      function handleEdit(){
        console.log('this is where we PATCH event')
      }

  return (
    <div>
         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {event.name}
            </th>
            <td class="py-4 px-6">
                {event.mountain.title}
            </td>
            <td class="py-4 px-6">
                {event.user.name}
            </td>
            <td class="text-white py-4 px-6">
                {event.time}
            </td>
            <td onClick={handleDelete} class="py-4 px-6 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline"> x </a>
            </td>
        
        </tr>
    </div>
  )
}

export default Event;
