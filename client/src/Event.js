import React from 'react'

function Event({event}) {
    console.log(event)
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
            <td class="py-4 px-6">
                event.time
            </td>
           
            <td class="py-4 px-6 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
       
        </tr>
    </div>
  )
}

export default Event;
