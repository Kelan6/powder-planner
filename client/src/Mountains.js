import React,{useState,useEffect} from 'react'
import MountainCard from './MountainCard'

function Mountains() {

  const [mountains, setMountains] = useState([])

  useEffect(() => {
    fetch("/mountains")
      .then((res) => res.json())
      .then((data) => {
        setMountains(data);
        console.log(mountains)
      });
      
  }, []);


const mountsArr = mountains.map((mountain)=> {
  return <MountainCard key={mountain.id} mountain={mountain}/>
})


  return (
    <div>  
      {mountsArr}
    </div>
  )
}

export default Mountains