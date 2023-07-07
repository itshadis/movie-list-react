import React from 'react'

const imgURL = import.meta.env.VITE_IMGURL;

function CardSearch({img, title}) {
  return (
    <div className='flex flex-col gap-1'>
      <div className='rounded-lg overflow-hidden relative border'>
        <img src={imgURL+img} alt="" />
        <div className='absolute bottom-0 w-full py-4 bg-gradient-to-t from-white'></div>
      </div>
      <p className='text-center font-medium'>{title}</p>
    </div>
  );
}

export default CardSearch;