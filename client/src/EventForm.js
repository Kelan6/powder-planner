import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button,Label,TextInput, Modal} from 'flowbite-react'

function EventForm({currentUser}) {

let history = useHistory()

const [formData, setFormData]=useState({
    name: '',
    mountain_id:'',
    user_id: currentUser.id,
    time: ''
})

function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
}

function handleGoBack(){
    history.goBack()
}

function handleChange(e){
    setFormData({...formData,[e.target.name]: e.target.value})
}

  return (
    <React.Fragment>
  <Modal
    show={true}
    size="md"
    popup={true}
  >
    <Modal.Header onClick = {handleGoBack}/>
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
<select name='mountain_id' onChange={handleChange}id="mountains" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a Mountain</option>
  <option value="1"> Keystone </option>
  <option value="2"> Breckenridge </option>
  <option value="3"> Crested Butte </option>
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
        <div className="w-full">
          <Button type='submit'>
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