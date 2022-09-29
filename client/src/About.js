import React from 'react'
import p6 from './assets/p6.png'


function About() {
  return (
    <div>
    
   <div className='pt-10 flex justify-center'>
    <figure class="flex justify-center h-1/3 w-1/3">
      <img class="max-w-full h-auto rounded-xl" src={p6} alt="image description" />
    </figure>
    </div>
    <div className>
    <div class=' pt-1 text-xs text-white flex justify-center'> Taken Apr 4,2021 on top of Peak 6, Breckenridge, CO. </div>
    <div class=' pt-14 text-white flex justify-center'> "Mountain Meetup was inspired by my Colorado Adventures! Born and mostly raised in Texas, I never thought I would see the mountains in the centennial state, let alone snowboard their Peaks. </div>
    <div class='text-white flex justify-center'> I quickly became addicted to the snowboarding commuity and the adrenaline associated with it. I wanted to share my new interest with my family and friends.</div>
    <div class='text-white flex justify-center'> Mountain Meetup was a quick and easy way to create meet ups on different mountains at different times. I plan to continue to update and improve this app as my adventures continue.</div>
    <div class='text-white flex justify-center'> Cheers to many more! Hope to see you out there!"</div>
    <div class='text-white flex justify-center'> - Kelan</div>
    </div>
    </div>
  )
}

export default About
