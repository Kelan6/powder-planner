import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Label, TextInput, Modal } from 'flowbite-react'

function EventForm({ currentUser, mounts }) {

  const [keystoneMounts, setKeystoneMounts] = useState(mounts[0].lifts)
  const [breckMounts, setBreckMounts] = useState(mounts[1].lifts)
  const [butteMounts, setButteMounts] = useState(mounts[2].lifts)
  // const [liftMount, setLiftMount] = useState("keystoneMounts")

  let history = useHistory()





  const [formData, setFormData] = useState({
    name: '',
    mountain_id: '',
    lift_id: '',
    user_id: currentUser.id,
    time: ''
  })

  function handleSubmit(e) {
    e.preventDefault()

    const formDataBody = { ...formData, mountain_id: parseInt(formData.mountain_id) }
    fetch("/events", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataBody)
    })
      .then(res => res.json())
      .then(data => console.log(data))
    setFormData({
      name: '',
      mountain_id: '',
      lift_id: '',
      user_id: currentUser.id,
      time: ''
    })
    console.log(formDataBody)
    history.push('./planner')
  }

  function handleGoBack() {
    history.goBack()
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
    // handleMountainChange(e.target.value)
  }

  // function handleMountainChange(mountain) {
  //   console.log(mountain)

  //   if (mountain === "1") {
  //     setLiftMount("keystoneMounts")
  //     //fetch first custom route, then set state, then map (outside this function)
  //   } else if (mountain === "2") {
  //     //fetch second custom route, then set state, then map (outside this function)
  //     setLiftMount("breckMounts")
  //   } else if (mountain === "3") {
  //     //fetch third custom route, then set state, then map (outside this function)
  //     setLiftMount("butteMounts")
  //   }
  //   else {
  //     setLiftMount("keystoneMounts")
  //   }
  // }

  const km = keystoneMounts.map((lift) => {
    return <option name ='lift' value={lift.id}>{lift.title}</option>
  })

  const bm = breckMounts.map((lift) => {
    return <option name ='lift' value={lift.id}>{lift.title}</option>
  })

  const cm = butteMounts.map((lift) => {
    return <option name ='lift' value={lift.id}>{lift.title}</option>
  })


  return (
    <React.Fragment>
      <Modal
        show={true}
        size="md"
        popup={true}
      >
        <Modal.Header onClick={handleGoBack} />
        <Modal.Body >
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Create your meet up! ❄️
            </h3>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label
                    id='description'
                    value="Your Meet Up Description ✍🏻"
                  />
                </div>
                <TextInput
                  onChange={handleChange}
                  id="description"
                  name='name'
                  value={formData.name}
                  placeholder="Where we shredding and how?"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    id='mountain'
                    value="Which Mountain 🏔"
                  />
                </div>
                <label for="mountains" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an mountain</label>
                <select name='mountain_id' onChange={handleChange} id="mountains" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a Mountain</option>
                  <option value="1"> Keystone </option>
                  <option value="2"> Breckenridge </option>
                  <option value="3"> Crested Butte </option>
                </select>
                <label for="lifts" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an Lift </label>
                <select name="lift_id" onChange={handleChange} id="lifts" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option  selected>Choose a Lift</option>
                  {/* {liftMount === "keystoneMounts" ?
                  {km}
                  :
                  liftMount === "breckMounts" ?
                  {bm}
                  :
                  liftMount === "butteMounts" ?
                  {cm} :
                  <></>
                } */}
                  
                  {km}
                  {bm}{cm}
                  {/* <option value="1">mountain_id.first.title</option>
  <option value="2"> mountain_id.second.title </option>
  <option value="3"> mountain_id.third.title </option> */}
                </select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    id='time'
                    value="What Time ⏱"
                  />
                </div>
                <TextInput
                  onChange={handleChange}
                  id="time"
                  name='time'
                  value={formData.time}
                  placeholder="What Time?"
                  required={true}
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <Button type='submit' gradientDuoTone="purpleToBlue">
                  Create +
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

export default EventForm