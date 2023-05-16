// src/ContactList.tsx

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact, editContact } from 'store/contactSlice'
import { RootState } from 'store'
import { useNavigate } from 'react-router-dom'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id))
  }

  const handleEdit = (id: number) => {
    const contactIdToEdit = contacts.find((contact) => id === contact.id)
    navigate('/contact-form', { state: contactIdToEdit })
  }

  return (
    <ul className="p-4 flex flex-wrap gap-8 justify-center">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="bg-white shadow-md rounded-md p-4"
        >
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2">
              {contact.firstname} {contact.lastname}
            </h2>
            <p className="text-gray-600 mb-2">
              Status:{' '}
              <span className={`${contact.status === 'ACTIVE' ? 'text-green-500' : 'text-red-500'} font-bold`}>{contact.status}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleDelete(contact.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(contact.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ContactList
