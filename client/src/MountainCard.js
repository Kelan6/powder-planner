import React from 'react'
import { Card, Dropdown, Avatar } from 'flowbite-react'
import k1 from './assets/k1.png'

function MountainCard({ mountain }) {

    console.log(mountain)

    return (
        <Card className='pt-10px' href="#">

            <img class="max-w-lg h-auto" src={mountain.image} alt="image description"/>

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
                <Dropdown label="Lifts">
                    <Dropdown.Item>
                        {mountain.lifts[0].title}
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {mountain.lifts[1].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[2].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[3].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[4].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[5].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[6].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[7].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[8].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[9].title}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {mountain.lifts[10].title}
                    </Dropdown.Item>
                </Dropdown>
        </Card>
    )
}

export default MountainCard

{/* <a className='mount-links' href='https://www.keystoneresort.com/-/aemasset/sitecore/keystone/maps/KEY_22-23_Winter-Trail-Map-Web_FINAL.pdf' target="_blank">KEYSTONE</a> 


<a className='mount-links' href='https://www.breckenridge.com/-/media/breckenridge/files/breck-new-trail-map-winter-18_19-converted.ashx' target="_blank">BRECKENRIDGE</a> 
<br/>

<a className='mount-links' href='https://www.skicb.com/-/aemasset/sitecore/crested-butte/maps/20211124_CB_trail_map_002.pdf' target="_blank">CRESTED BUTTE</a> 
     */}