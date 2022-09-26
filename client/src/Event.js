import React from 'react'


function Event({event}) {


    function handleDelete(){
        console.log('delete fetch here')
    }
    
      function handleEdit(){
        console.log('this is where we PATCH event')
      }

  return (
    <div>
         <tr>
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
           
            <td onClick={handleDelete} class="py-4 px-6 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline"> x </a>
            </td>
        
        </tr>
    </div>
  )
}

export default Event;
