import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import pic2 from './assets/pic2.jpg'
import sb1 from './assets/sb1.webp'
import gsd3 from './assets/gsd3.jpeg'
import smb from './assets/smb.jpeg'
import m1 from './assets/m1.jpeg'
import sk1 from './assets/sk1.jpeg'
import sb3 from './assets/sb3.avif'

function Home() {

  return (
    <div className='flex flex-col items-center'>
      <div className='text-white mt-10'>
        <h1 className='font-serif text-8xl  text-gray-900 dark:text-white'>Welcome to Mountain Meetup </h1>
        <div className='font-serif mt-10 flex justify-center  text-gray-900 dark:text-white'>
          <TypeAnimation
            sequence={[
              'An App Made for Snowboarders 🏂',
              1000,
              'An App Made for Skiers ⛷',
              1000,
              'An App Made for Adventurers 🏔',
              1000,
              'An App Made for All Snow Fanatics ❄️',
              1000,
            ]}
            speed={50}
            style={{ fontSize: '2em' }}
            wrapper="span" 
            repeat={Infinity} 
          />
        </div>
      </div>
      <div className=''>
        <section class="overflow-hidden text-gray-700">
          <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src={sb3} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src={gsd3} />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src={sb1} />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src={sk1} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src={smb} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src={m1} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home