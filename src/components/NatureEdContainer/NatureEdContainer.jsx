import { IKImage } from 'imagekitio-react'
import React from 'react'
import { IKURL } from '../../lib'

const NatureEdContainer = () => {
    
    const items = [
        {
            id:1,
            imgPath:'/assets/1.png',
            heading:"Plant, Tree & Wildlife Identification",
            list:[
                "Learn to identify native plants, medicinal herbs, and unique trees.",
                "Understand the ecological role of plants in maintaining biodiversity.",
                "Track wildlife through signs, footprints, scat, and nesting patterns.",
                "Observe animal behavior, survival techniques, and habitat adaptation.",
                "Learn how different species interact within the ecosystem.",
                "Explore the significance of plants and animals in indigenous cultures."
            ]
        },
        {
            id:2,
            imgPath:'/assets/2.png',
            heading:"Plant, Tree & Wildlife Identification",
            list:[
                "Learn to identify native plants, medicinal herbs, and unique trees.",
                "Understand the ecological role of plants in maintaining biodiversity.",
                "Track wildlife through signs, footprints, scat, and nesting patterns.",
                "Observe animal behavior, survival techniques, and habitat adaptation.",
                "Learn how different species interact within the ecosystem.",
                "Explore the significance of plants and animals in indigenous cultures."
            ]
        }
    ]

  return (
<div className='h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col gap-20'>
{
    items.map((item)=>(
        <div key={item.id} className={`h-fit flex justify-evenly gap-20 ${item.id % 2==0? "flex-row-reverse":""}`}>
        <div>
        <img src={item.imgPath} alt={item.heading} className='object-contain'/>
        </div>
        <div className='flex flex-col gap-10'>
            <h5 className='font-[manrope] text-3xl font-semibold'>{item.heading}</h5>
            <div className='flex flex-col gap-5'>
                {
                    item.list.map((listItem)=>(
                        <div className='flex gap-4 items-center'>
                            <span className='flex items-center justify-center p-2 bg-black rounded-full'>
                                <IKImage urlEndpoint={IKURL} path="greenLeaf.png" className=' size-3'/>
                            </span>
                            <p className='font-[manrope] text-lg'>{listItem}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    ))
}
</div>
  )
}

export default NatureEdContainer