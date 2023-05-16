import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootState } from 'store'
import { addContact, editContact } from 'store/contactSlice'
import { IContact, TStatus } from 'types'

const ContactForm = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  const contacts = useSelector((state: RootState) => state.contacts)
  const [firstname, setFirstname] = useState(state?.firstname || '')
  const [lastname, setLastname] = useState(state?.lastname || '')
  const [status, setStatus] = useState<TStatus>(state?.status || 'ACTIVE')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!firstname || !lastname) return null

    const newContact: IContact = {
      id: contacts.length,
      firstname,
      lastname,
      status,
    }

    if (state?.id > -1) {
      newContact.id = state?.id
      dispatch(editContact(newContact))
    } else {
      dispatch(addContact(newContact))
    }
    setFirstname('')
    setLastname('')
    setStatus('ACTIVE')
    navigate('/')
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="p-4 flex flex-col">
        <div>
          <label htmlFor="firstname" className="mr-2">First Name:</label>
          <input
            id="firstname"
            type="text"
            placeholder="Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border p-2 mb-2"
          />
        </div>
        <div>
          <label htmlFor="lastname" className="mr-2">Last Name:</label>
          <input
            type="lastName"
            placeholder="lastName"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border p-2 mb-4"
          />
        </div>
        <div>
          <div className="flex items-center gap-5 mb-4">
            <h1>Status</h1>
            <div className="flex flex-col">
              <div className="mb-5">
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="ACTIVE"
                  checked={status === 'ACTIVE'}
                  onChange={(e) => setStatus(e.target.value as TStatus)}
                  className="mr-2"
                />
                <label htmlFor="active">ACTIVE</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="INACTIVE"
                  checked={status === 'INACTIVE'}
                  onChange={(e) => setStatus(e.target.value as TStatus)}
                  className="mr-2"
                />
                <label htmlFor="inactive">INACTIVE</label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {state?.id > -1 ? 'Edit' : 'Add'} Contact
        </button>
      </form>
    </div>
  )
}

export default ContactForm
