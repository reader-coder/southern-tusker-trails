import { IKVideo } from 'imagekitio-react'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'
import { IKURL } from '../../lib'
import './HomeBanner.css'

const HomeBanner = () => {
    const [loading, setLoading]=useState(true)
  return (
    <div className='h-screen relative'>
        <div className='h-full w-full flex items-center justify-center absolute top-0 left-0'>
            <IKVideo urlEndpoint={IKURL} path='banner.mp4' autoPlay muted loop onLoadedData={()=>setLoading(false)} className={`h-full w-full object-cover ${loading ? 'hidden':''}`}/>
            <Loader className={`text-green-600/50 size-12 animate-spin ${!loading ? 'hidden':'' }`}/>
        </div>
        {/* Div on top of video */}
        <div className='h-full w-full absolute z-10 left-0 top-0 flex justify-center'>
            {/* Inner container */}
            <div className='h-full flex flex-col justify-center'>
                {/* Clouds container */}
                <div className='hidden md:flex z-20'>
                <img className='w-[50%] object-contain cloudOne' src="/assets/cloud.png" alt="cloud" />
                <img className='w-[50%] object-contain cloudTwo' src="/assets/cloud.png" alt="cloud" />
                </div>
                {/* Text box */}
                <div className='w-full flex flex-col gap-1 px-2 mt-50 sm:mt-0 sm:gap-2 lg:gap-6 justify-center items-center textBox'>
                    <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-[technoNueMedium] text-center'>Experience Munnar <br />like never before!</h1>
                    <p className='text-white text-md lg:text-3xl xl:text-4xl font-[manrope] text-center'>"Unveil Munnar’s Magic – A Journey Beyond the Ordinary!"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner