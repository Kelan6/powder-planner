import React from 'react'
import {Card,Dropdown} from 'flowbite-react'

function MountainCard({ mountain }) {

    console.log(mountain.lifts[0].title)

    return (
        <Card className='pt-10px'href="#">
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {mountain.title}
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    {mountain.address}
  </p>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    {mountain.elevation},000 ft
  </p>
  <p className="font-normal text-gray-700 dark:text-gray-400">
  </p>
  <Dropdown label="Lifts">
  <Dropdown.Item>
    {mountain.lifts[0].title}
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