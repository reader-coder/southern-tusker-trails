import { IKImage } from 'imagekitio-react'
import React from 'react'
import { IKURL } from '../../lib'

const Banner = ({imgPath, Heading}) => {
  return (
<div className='min-h-screen h-[500px] relative overflow-hidden'>
    <IKImage className='h-full w-full absolute top-0 left-0 object-cover bg-zoomOut' urlEndpoint={IKURL} path={imgPath}/>
    <div className='z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center'><span className='text-white text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-[technoNueMedium] text-center fade-in-banner'><Heading/></span></div>
</div>
  )
}

export default Banner