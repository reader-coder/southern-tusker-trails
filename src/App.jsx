import React from 'react'
import { Outlet} from 'react-router'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='relative flex flex-col justify-center'>
      <Navbar/>
      <Outlet/>
    </div>  )
}

export default App