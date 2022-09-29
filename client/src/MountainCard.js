import React from 'react'
import {Card, Dropdown} from 'flowbite-react'

function MountainCard({ mountain }) {


    return (
        <Card className='w-2/3 pt-10px'>

            <img class="max-w-lg h-auto" src={mountain.image} alt=''/>
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
                <div> <a className='text-white hover:underline'  target='_blank' href={mountain.map}> Trail Map </a> </div>
                <Dropdown label="Lifts">
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
        </Card>
    )
}

export default MountainCard
