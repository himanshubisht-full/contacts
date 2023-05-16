import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Root = () => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Root
