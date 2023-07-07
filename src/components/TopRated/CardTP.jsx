import React from 'react'

function CardTP({img, title}) {
  return (
    <div className='relative flex flex-col rounded-lg overflow-hidden hover:scale-105 hover:brightness-90 transition-all duration-200'>
      <div className='border' >
        <img src={img} alt="" />
      </div>
      <div className='w-full h-full absolute bg-gradient-to-t from-black'>
        <div className='relative h-full flex items-end'>
          <div className='absolute bottom-0 w-full pb-1 bg-yellow-50'></div>
          <span className='text-sm font-bold ml-2 pb-5'>{title}</span>
        </div>
      </div>
    </div>
  )
}

export default CardTP;