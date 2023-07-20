import React, { useEffect } from 'react';
import star from '../../asset/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getSeriesMovie } from '../../redux/actions/movie';

const imgURL = import.meta.env.VITE_IMGURL;

function Series() {
  const { getSeriesLoading, getSeriesResult, getSeriesError } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesMovie())
  },[dispatch]);

  return (
     <div className='w-[90%] mx-auto py-8 text-white '>
       <h2 className='text-xl font-bold mb-2'>Series</h2>
       <div className='flex overflow-auto snap-x gap-4'>
         {getSeriesResult ? (
           getSeriesResult.map((movie) => (
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
          ))
         ) : getSeriesLoading ? (
             <div className='w-full h-80 flex items-center justify-center text-xl text-white font-bold'>Loading...</div>
         ) : (
              <div>{getSeriesError ? getSeriesError : "Empty Data"}</div>
         )
         }
      </div>
    </div>
  )
}

export default Series;