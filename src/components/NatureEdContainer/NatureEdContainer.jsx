import { IKImage } from 'imagekitio-react'
import React from 'react'
import { IKURL } from '../../lib'

const NatureEdContainer = () => {
    
    const items = [
        {
          id: 1,
          imgPath: '/assets/1.png',
          heading: "Outdoor Exploration & Observation",
          list: [
            "Identify native plants, trees, butterflies, and birds using real-world clues.",
            "Understand how flora and fauna interact within their environment.",
            "Track animals using footprints, nests, and signs of movement.",
            "Learn about different ecosystems through guided forest walks.",
            "Engage in cloud watching, stargazing, and night hikes for sensory discovery.",
            "Explore how weather, terrain, and seasons shape life in the wild."
          ]
        },
        {
          id: 2,
          imgPath: '/assets/2.png',
          heading: "Creative Expression & Community Building",
          list: [
            "Express thoughts through nature journaling, creative writing, and storytelling.",
            "Connect with peers through team games, art, and collaborative projects.",
            "Build confidence through public speaking and sharing personal observations.",
            "Explore music, movement, and rhythm through nature-inspired dance activities.",
            "Contribute to group projects like eco-installations and nature-based crafts.",
            "Participate in community service to nurture social and environmental responsibility."
          ]
        }
      ];
      

  return (
<div className='h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col gap-20'>
{
    items.map((item)=>(
        <div key={item.id} className={`h-fit flex lg:justify-evenly gap-20 ${item.id % 2==0? "lg:flex-row-reverse":""}`}>
        <div className='hidden lg:block'>
        <img src={item.imgPath} alt={item.heading} className=' object-contain'/>
        </div>
        <div className='flex flex-col gap-10'>
            <h5 className='font-[manrope] text-3xl font-semibold'>{item.heading}</h5>
            <div className='flex flex-col gap-5'>
                {
                    item.list.map((listItem)=>(
                        <div className='flex gap-4 items-center'>
                            <span className='flex min-w-[30px] min-h-[30px] items-center justify-center p-2 bg-black rounded-full'>
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