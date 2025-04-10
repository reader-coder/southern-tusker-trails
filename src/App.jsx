import React from 'react'
import { Outlet} from 'react-router'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='relative flex flex-col justify-center'>
      <Navbar/>
      <Outlet/>
      <ToastContainer />
    </div>  )
}

export default App