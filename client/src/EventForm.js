import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, onClick,onClose,Label,TextInput,Checkbox, Modal} from 'flowbite-react'

function EventForm() {
let history = useHistory()

function onClick(){
    console.log('astgst')
}
function handleCreate(){
    console.log('post')
}
function onClose(){
    console.log('aetga')
}
function handleGoBack(){
    history.goBack()
}
  return (
    <React.Fragment>
  <Modal
    show={true}
    size="md"
    popup={true}
    onClose={onClose}
  >
    <Modal.Header onClick = {handleGoBack}/>
    <Modal.Body >
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Create your meet up! ❄️
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              id='description'
              value="Your Meet Up Description ✍🏻"
            />
          </div>
          <TextInput
            id="description"
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
          <TextInput
            id="mountain"
            placeholder="Keystone, Breck or Crested?"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              id='time'
              value="What Time ⏱"
            />
          </div>
          <TextInput
            id="time"
            placeholder="What Time?"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              id="who"
              value="Who? 🏂"
            />
          </div>
          <TextInput
            id="who"
            placeholder='Who?'
            required={true}
          />
        </div>
        
        <div className="w-full">
          <Button onClick={handleCreate}>
            Create +
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
  )
}

export default EventForm