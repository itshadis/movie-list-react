import React, { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../services/services'
import CardUpcoming from '../components/Upcoming/CardUpcoming';
import { Link } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingMovie } from '../redux/actions/movie';

function Upcoming() {
  const { 
    getUpcomingMovieLoading,
    getUpcomingMovieResult,
    getUpcomingMovieError 
  } = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getUpcomingMovie());
  },[dispatch]);

  return (
    <PageLayout>
      <div className='text-white w-full bg-gradient-to-t from-black via-transparent to-black py-20'>
        <h1 className='text-3xl text-center font-bold pb-16 -translate-x-6'>Upcoming Movies</h1> 
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
        {getUpcomingMovieResult ? (
          getUpcomingMovieResult.map(movie => (
            <Link key={movie.id} to={`/detail/${movie.id}`}>
              <CardUpcoming 
                img={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview}
              />
            </Link>
          ))
        ) : getUpcomingMovieLoading ? (
          <div className='w-full h-96 text-3xl text-white font-bold'>Loading...</div>
        ) : (
          <div>{getUpcomingMovieError ? getUpcomingMovieError : "Empty Data"}</div>
        )
        }
        </div>
      </div>
      <hr />
    </PageLayout>
  )
}

export default Upcoming