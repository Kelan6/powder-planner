import React from 'react'
import {Card, Dropdown} from 'flowbite-react'

function MountainCard({ mountain }) {


    return (
       <div className='flex flex-col lg:flex lg:flex-row h-1/5 w-full pl-4 pb-5'>
       
            <div>
            <img class="max-w-lg h-auto " src={mountain.image} alt=''/>
            </div>
            <div className='flex flex-row pl-5'>
            <div className=' w-6/12'>
                <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white pb-1">
                    {mountain.title}
                </h5>
                <p className="text-sm font-normal text-gray-700 dark:text-gray-400 pb-2">
                    {mountain.address}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 pb-3">
                    {mountain.description}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 pb-2">
                    Mountain Elevation: {mountain.elevation}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                </p>
                <div className='pt-2 pb-2'> <a className='text-gray-900 dark:text-white hover:underline '  target='_blank' href={mountain.map}> Winter Trail Map </a> </div>
                <Dropdown className='mt-1' gradientDuoTone="purpleToBlue" label="Lifts">
                    <Dropdown.Item >
                        {mountain.lifts[0].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[1].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[2].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[3].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[4].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[5].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[6].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[7].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[8].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[9].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[10].title}
                    </Dropdown.Item>
                </Dropdown>
                </div>
                </div>
        </div>
    )
}

export default MountainCard
