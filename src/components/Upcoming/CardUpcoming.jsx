import React from 'react'

const imgURL = import.meta.env.VITE_IMGURL;

const CardUpcoming = ({img, title, overview, release_date}) => {
  return (
    <div className='flex gap-4 border-r overflow-hidden p-2'>
     <div className='w-36 sm:w-48 border'>
       <img className='rounded-lg' src={imgURL+img} alt="poster.img" />
     </div>
      <div className='flex flex-1 flex-col gap-2 h-52 sm:h-72 text-sm overflow-auto'>
        <h3 className='text-base sm:text-xl font-bold'>{title}</h3>
        <p className='text-sm sm:text-base font-semibold'>Release Date : <span className='text-xs text-slate-300'>{release_date}</span></p>
        <div>
          <p className='font-semibold text-sm sm:text-base'>Overview</p>
          <p className='text-slate-300 font-light'>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default CardUpcoming;
