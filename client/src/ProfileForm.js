import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button,Label,TextInput, Modal,Checkbox} from 'flowbite-react'

function ProfileForm({currentUser}) {

    let history = useHistory()

    function handleGoBack(){
        history.push('./profile')
    }




  return (
    <React.Fragment>
  <Modal
    show={true}
    size="md"
    popup={true}
  >
    <Modal.Header onClick = {handleGoBack}/>
    <Modal.Body>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Edit your Profile
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              id="name"
              value="Change your Name"
            />
          </div>
        
          <TextInput
            id="names"
            placeholder={currentUser.name}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
            id='emails'
              value="Change your email"
            />
          </div>
          <TextInput
            id="email"
            placeholder={currentUser.email}
            required={true}
          />
        </div>
      </div>
      <div>
          <div className="mb-2 block">
            <Label
              id="password"
              value="Change your Password"
            />
          </div>
          <TextInput
            id="password"
            type='password'
            required={true}
          />
        </div>
        <span className=" mb-6 text-sm font-medium text-gray-900 dark:text-gray-300">Skier</span>
<label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" className="mt-10 sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Snowboarder</span>
</label>
        <div className="flex flex-wrap gap-2 mt-3">
  <Button gradientDuoTone="purpleToBlue">
    Update Profile
  </Button>
  </div>
  </Modal.Body>
  </Modal>
</React.Fragment>
  )
}

export default ProfileForm