import React from 'react'
import { Outlet} from 'react-router'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'
import { FaWhatsapp } from 'react-icons/fa6'

const App = () => {
  return (
    <div className='relative flex flex-col justify-center'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <ToastContainer />
      <a href='https://wa.me/919633996929' target='_blank' rel="noopener noreferrer" className='fixed bottom-5 right-0 md:right-5 md:bottom-5 lg:right-10 lg:bottom-10 p-2 md:p-4 bg-[#075E54] rounded-tl-xl rounded-bl-xl md:rounded-full z-30 shadow-2xl'>
        <FaWhatsapp className=' size-8 xl:size-12 text-white '/>
      </a>
    </div>  )
}

export default App