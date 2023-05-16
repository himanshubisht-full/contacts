import { Link } from 'react-router-dom'

const data = [
  {
    title: 'Contact',
    id: 0,
    path: '/',
  },
  {
    title: 'Charts and Maps',
    id: 1,
    path: '/charts',
  },
]

const Sidebar = () => {
  return (
    <div className='bg-slate-950 w-60 pt-16 pl-10'>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id} className='text-white font-bold mb-6'>
              <Link to={item.path}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
