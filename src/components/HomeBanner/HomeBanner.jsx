import { IKVideo } from 'imagekitio-react'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'
import { IKURL } from '../../lib'

const HomeBanner = () => {
    const [loading, setLoading]=useState(true)
  return (
    <div className='h-screen relative'>
        <div className='h-full flex items-center justify-center'>
            <IKVideo urlEndpoint={IKURL} path='sample-video.mp4' autoPlay muted loop onLoadedData={()=>setLoading(false)} className={`h-full w-full object-cover ${loading ? 'hidden':''}`}/>
            <Loader className={`text-green-600/50 size-12 animate-spin ${!loading ? 'hidden':'' }`}/>
        </div>
    </div>
  )
}

export default HomeBanner