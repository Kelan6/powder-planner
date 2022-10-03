import React from 'react'

function Footer() {
  return (
    <div className='justify-between fixed bottom-0 left-0'>
<footer class=" mt-auto bg-inherit rounded-lg  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" class="hover:underline">Mountain Meetup™</a>
    </span>
    
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/kelanhamman/" target='_blank'class="mr-4 hover:underline md:mr-6 "> ․ LinkedIn</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="https://github.com/Kelan6" target='_blank' class="hover:underline">Github</a>
        </li>
    </ul>
</footer>
</div>

  )
}

export default Footer