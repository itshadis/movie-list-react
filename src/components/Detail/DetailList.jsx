import React, { useState } from 'react'

function DetailList({movieDetail}) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className='flex flex-col md:flex-row flex-1 gap-1 text-white -translate-y-16 sm:translate-y-0 md:mt-4'>
      <div className='flex flex-1 gap-10'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-6'>
            <span className='font-medium w-24'>Title</span>
            <p className='text-slate-300'>{movieDetail.title}</p>
          </div>
          <div className='flex gap-6'>
            <span className='font-medium w-24'>Status</span>
            <p className='text-slate-300'>{movieDetail.status}</p>
          </div>
          <div className='flex gap-6'>
            <span className='font-medium w-24'>Release Date</span>
            <p className='text-slate-300'>{movieDetail.release_date}</p>
          </div>
          <div className='flex gap-6'>
            <span className='font-medium w-24'>Rating</span>
            <p className='text-slate-300'>{movieDetail.vote_average}</p>
          </div>
          <div className='flex gap-6'>
            <span className='font-medium w-24 '>Description</span>
            <p className='hidden md:block text-slate-300 flex-1'>{movieDetail.overview}</p>
          </div>
        </div>
      </div>
      <p className='md:hidden text-slate-300'>{movieDetail.overview}</p>
    </div>
  );
}

export default DetailList;