import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Home() {
  
  return (
    <div className='flex justify-center'>
    <div className='text-white mt-10'>
      <h1 className='font-serif text-8xl'>Welcome to Mountain Meetup</h1>
      <div className='font-serif mt-10 flex justify-center'>
    <TypeAnimation 
    sequence={[
    'An App Made for Snowboarders 🏂',
    1000,
    'An App Made for Skiers ⛷',
    1000,
    'An App Made for All Snow Fanatics ❄️',
    1000,
    ]}
    speed={50}
    style={{ fontSize: '2em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
    </div>
    </div>
    </div>
  )
}

export default Home