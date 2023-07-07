import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSeriesMovies } from '../../services/services';
import star from '../../asset/star.svg';

const imgURL = import.meta.env.VITE_IMGURL;

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeriesMovies().then(result => {
      setSeries(result);
    });
  }, []);

  return (
     <div className='w-[90%] mx-auto py-8 text-white '>
       <h2 className='text-xl font-bold mb-2'>Series</h2>
       <div className='flex overflow-auto snap-x gap-4'>
         {series.map((movie) => (
          <div key={movie.id} className='flex flex-col snap-center'>
             <div className='w-48 sm:w-60'>
               <img className='object-cover rounded-lg' src={imgURL+movie.poster_path} alt="" />
            </div>
            <div className='mt-2 mb-4'>
              <span className='font-semibold my'>{movie.name}</span>
              <div className='flex items-center gap-2'>
                <img className='w-4' src={star} alt="" />
                <span>{movie.vote_average}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Series;