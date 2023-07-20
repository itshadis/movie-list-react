import React from 'react';
import star from '../asset/star.svg'

function Card({img, title, rating}) {

  return (
    <div className='relative flex flex-col rounded-lg overflow-hidden hover:scale-105 hover:brightness-150 transition-all duration-200'>
      <img className='border' src={img} alt="" />
      <div className='w-full h-full absolute bg-gradient-to-t from-black'>
        <div className='h-full flex flex-col justify-end p-1 sm:p-2'>
          <span className='text-xs font-thin sm:font-bold'>{title}</span>
          <div className='flex flex-row items-center gap-1 mt-1'>
            <span><img className='w-2 sm:w-3' src={star} alt="" /></span>
            <span className='text-xs font-thin sm:font-normal'>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;