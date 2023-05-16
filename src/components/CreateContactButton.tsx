import { Link } from 'react-router-dom'

const CreateContactButton = () => {
  return (
    <Link
      to="/contact-form"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Create Contact
    </Link>
  )
}

export default CreateContactButton
