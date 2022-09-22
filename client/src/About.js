import React from 'react'
import {Carousel} from 'flowbite-react'
import k1 from './assets/k1.png'
import pic3 from './assets/pic3.jpg'
import k7 from './assets/k7.jpeg'
import pic from './assets/pic.jpeg'

function About() {
  return (
    <div>
    <div className='pt-2 flex justify-center'>
    <div className= 'h-96 w-2/3'>
    <Carousel >
    <img
        src={pic}
        alt="..."
      />
      <img 
        src={k1}
        alt="..."
      />
      <img
        src={pic3}
        alt="..."
      />
      <img
        src={k7}
        alt="..."
      />
    </Carousel>
  </div>
  </div>
  <div className='pt-2 flex justify-center text-slate-50'> Inspired by ..</div>
  </div>
  )
}

export default About