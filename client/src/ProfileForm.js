import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Label, TextInput, Modal, Checkbox } from 'flowbite-react'

function ProfileForm({ currentUser, setCurrentUser }) {

  let history = useHistory()
  function handleGoBack() {
    history.push('./profile')
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    snowboarder: "",
  });

  function handleInputChange(e) {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }


  return (
    <React.Fragment>
      <Modal
        show={true}
        size="md"
        popup={true}
      >
        <form className='profile-submit' onSubmit={handleSubmit}>
          <Modal.Header onClick={handleGoBack} />
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
                  name='name'
                  placeholder={currentUser.name}
                  required={true}
                  onChange={handleInputChange}
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
                  name="email"
                  placeholder={currentUser.email}
                  required={true}
                  onChange={handleInputChange}
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
                name="password"
                type='password'
                required={true}
                onChange={handleInputChange}
              />
            </div>
            <span className=" mb-6 text-sm font-medium text-gray-900 dark:text-gray-300">Skier</span>
            <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="default-toggle" className="mt-10 sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Snowboarder</span>
            </label>
            <div className="flex flex-wrap gap-2 mt-3">
              <Button type='submit' gradientDuoTone="purpleToBlue">
                Update Profile
              </Button>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </React.Fragment>
  )
}

export default ProfileForm