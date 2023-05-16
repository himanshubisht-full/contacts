import { useSelector } from 'react-redux'
import { RootState } from 'store'
import ContactList from 'components/ContactList'
import CreateContactButton from 'components/CreateContactButton'

const ContactPage = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  if (!contacts.length) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="mb-4">
          <CreateContactButton />
        </div>
        <p className="font-bold w-60 text-center">
          No contact found Please add contact from Create Contact Button
        </p>
      </div>
    )
  }
  return (
    <div className='flex-1'>
      <div className='flex justify-center my-8'>
        <CreateContactButton />
      </div>
      <ContactList />
    </div>
  )
}

export default ContactPage
