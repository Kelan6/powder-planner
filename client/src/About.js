import React from 'react'
import p6 from './assets/p6.png'


function About() {
  return (
   <div className='justify-center'>
   <div className='pt-10 flex justify-center '>
    <figure class="flex justify-center h-1/3 w-1/3">
      <img class="max-w-full h-auto rounded-xl" src={p6} alt="" />
    </figure>
    </div>
    <div className=''>
    <div class=' pt-1 text-xs flex justify-center text-gray-900 dark:text-white'> Taken Apr 4,2021 on top of Peak 6, Breckenridge, CO. </div>
    <div class=' pt-14 flex justify-center text-gray-900 dark:text-white'> "Mountain Meetup was inspired by my Colorado Adventures! Born and mostly raised in Texas, I never thought I would see the mountains in the centennial state, let alone snowboard their Peaks. </div>
    <div class='flex justify-center text-gray-900 dark:text-white'> I quickly became addicted to the snowboarding commuity and the adrenaline associated with it. I wanted to share my new interest with my family and friends.</div>
    <div class='flex justify-center text-gray-900 dark:text-white'> Mountain Meetup was a quick and easy way to create meet ups on different mountains at different times. I plan to continue to update and improve this app as my adventures continue.</div>
    <div class='flex justify-center text-gray-900 dark:text-white'> Cheers to many more! Hope to see you out there!"</div>
    <div class='flex justify-center text-gray-900 dark:text-white'> - Kelan</div>
    </div>
    </div>
  )
}

export default About
