import { IKImage } from 'imagekitio-react'
import React from 'react'
import { IKURL } from '../../lib'

const WhyComponent = ({heading, list}) => {

  return (
 <div className='h-fit px-8 lg:pl-20 xl:pl-32 2xl:pl-56 py-20 xl:py-24 2xl:py-30 flex flex-col gap-16 overflow-x-hidden  2xl:flex 2xl:w-full 2xl:justify-center [@media(min-width:2000px)]:items-center [@media(min-width:2000px)]:px-56'>
            <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl font-bold">
            {heading}
        </h3>
       <div className='flex flex-col gap-5'>
    {
        list.map((listItem)=>(
           <div key={listItem.id} className='flex flex-col gap-3'>
             <div className='flex gap-4 items-center'>
                <span className='flex items-center justify-center p-2 bg-black rounded-full'>
                    <IKImage urlEndpoint={IKURL} path="greenLeaf.png" className=' size-3'/>
                </span>
                <h5 className='font-[manrope] text-lg md:text-xl font-semibold'>{listItem.heading}</h5>
            </div>
            <p className='font-[manrope] text-sm md:text-lg'>{listItem.desc}</p>
           </div>
        ))
    }
</div>
 </div>
  )
}

export default WhyComponent