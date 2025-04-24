import { IKImage } from 'imagekitio-react'
import { useInView } from 'react-intersection-observer'
import React, { useState } from 'react'
import { IKURL } from '../../lib'
import './Timeline.css'

const Timeline = () => {
  const [trigger, setTrigger] = useState(false);
  // Using useInView to set trigger state to true so that elements can use it to trigger their animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) setTrigger(true);
    }
  });

  return (
    <div ref={ref} className='h-fit max-w-screen bg-[url(https://ik.imagekit.io/gzqqjuhn9/timelineBG.png?updatedAt=1745484213448)] bg-contain bg-no-repeat bg-center flex justify-center gap-8 lg:gap-16 px-8 lg:px-20 xl:px-32 2xl:px-56 container'>
      {/* Left */}
      <div className={`hidden w-full md:flex flex-col items-center justify-center ${trigger?'comeFromLeft':''}`}>
        <div className='flex gap-2'>
          <IKImage urlEndpoint={IKURL} path='Camping.png' className='size-40'/>
          <div className='flex flex-col gap-8 justify-center'>
            <h3 className='font-[manrope] font-semibold text-2xl'>Camping</h3>
            <p className='font-[manrope] text-md'>"Step into the wild, conquer towering peaks, and embrace the thrill of adventure—because every trail leads to a story worth telling!"</p>
          </div>
        </div>
      </div>
      {/* Middle */}
      <div className={`h-screen min-h-[800px] w-3 relative hidden md:flex flex-col justify-evenly items-center`}>
        {/* Gradient top */}
       <div className='bg-gradient-to-b from-white to-transparent absolute top-0 h-[65%] z-10 w-full pointer-events-none'></div>
        {/* Gradient bottom */}
        <div  className='bg-gradient-to-t from-white to-transparent absolute bottom-0 h-[65%] z-10 w-full pointer-events-none'></div>
        {/* Inner green line */}
        <div className={`absolute w-3 h-full top-0 left-0 bg-[#A5F211] ${trigger ? 'fadeInReveal' : ""}`}></div>
        {/* Black circles */}
            <div className={`rounded-full border-[#A5F211] border-4 bg-black size-8 z-20 ${trigger? 'fadeIn':''}`}></div>
            <div className={`rounded-full border-[#A5F211] border-4 bg-black size-8 z-20 ${trigger? 'fadeIn':''}`}></div>
            <div className={`rounded-full border-[#A5F211] border-4 bg-black size-8 z-20 ${trigger? 'fadeIn':''}`}></div>
      </div>
      {/* Right */}
      <div className={`w-full flex flex-col items-center gap-10 sm:gap-0 justify-between py-35 ${trigger ? 'comeFromRight': ''}`}>
      <div className='flex flex-col sm:flex-row gap-2'>
          <IKImage urlEndpoint={IKURL} path='Trekking.png'className='size-40'/>
          <div className='flex flex-col gap-2 sm:gap-8 justify-center'>
            <h3 className='font-[manrope] font-semibold text-2xl'>Trekking</h3>
            <p className='font-[manrope] text-md'>"Step into the wild, conquer towering peaks, and embrace the thrill of adventure—because every trail leads to a story worth telling!"</p>
          </div>
        </div>
        <div className='md:hidden flex flex-col sm:flex-row gap-2'>
          <IKImage urlEndpoint={IKURL} path='Camping.png' className='size-40'/>
          <div className='flex flex-col gap-2 sm:gap-8 justify-center'>
            <h3 className='font-[manrope] font-semibold text-2xl'>Camping</h3>
            <p className='font-[manrope] text-md'>"Escape the ordinary, sleep under the stars, and wake up to adventure—because the best memories are made around a campfire!"</p>
          </div>
        </div>
        <div className='  flex flex-col sm:flex-row gap-2'>
          <IKImage urlEndpoint={IKURL} path='Adventures.png' className='size-40'/>
          <div className='flex flex-col gap-2 sm:gap-8 justify-center'>
            <h3 className='font-[manrope] font-semibold text-2xl'>Adventure Activities</h3>
            <p className='font-[manrope] text-md'>"Fuel your spirit with adrenaline, conquer the wild, and embrace the thrill—because the best stories begin where the comfort zone ends!"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline