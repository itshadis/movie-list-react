import React from 'react'

const imgURL = import.meta.env.VITE_IMGURL;

function Poster({movieDetail}) {

  return (
    <div className='w-40 sm:w-64 drop-shadow-2xl -translate-y-20 brightness-90'>
      <img className='rounded-xl' src={imgURL+movieDetail.poster_path} alt="" />
    </div>
  );
}

export default Poster;