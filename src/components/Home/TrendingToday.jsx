import React, { useEffect } from 'react'
import Card from '../Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingMovieToday } from '../../redux/actions/movie';

const imgURL = import.meta.env.VITE_IMGURL;

function TrendingToday() {
  const { getMovieTrendingTodayLoading, getMovieTrendingTodayResult, getMovieTrendingTodayError } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingMovieToday());
  },[dispatch])

  return (
    <div className='w-full'>
      <div className='w-[90%] mx-auto py-8 text-white'>
        <h2 className='text-xl font-bold'>Trending Today</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-2'>
          {getMovieTrendingTodayResult ? (
            getMovieTrendingTodayResult.map(movie => (
              <Link key={movie.id} to={`/detail/${movie.id}`}>
                <Card img={imgURL+movie.poster_path} title={movie.title} rating={movie.vote_average} />
              </Link>
            ))
          ) : getMovieTrendingTodayLoading ? (
              <div className='w-full h-52 flex items-center justify-center text-xl text-white font-bold'>Loading...</div> 
          ) : (
              <div>{getMovieTrendingTodayError ? getMovieTrendingTodayError : "Empty Data"}</div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default TrendingToday;