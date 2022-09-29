import React from 'react'
import {Card, Dropdown} from 'flowbite-react'

function MountainCard({ mountain }) {


    return (
       <div>
        <Card className='flex flex-row pt-10'
        >
            <div>
            <img class="max-w-lg h-auto" src={mountain.image} alt=''/>
            </div>
            <div className='flex flex-row'>
            <div className=' w-6/12'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {mountain.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {mountain.address}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {mountain.description}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Mountain Elevation: {mountain.elevation}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                </p>
                <div> <a className='pt-1 pb-2 text-gray-900 dark:text-white hover:underline'  target='_blank' href={mountain.map}> Trail Map </a> </div>
                <Dropdown className='mt-1' label="Lifts">
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
        </Card>
        </div>
    )
}

export default MountainCard
