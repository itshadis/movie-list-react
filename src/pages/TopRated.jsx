import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import CardTP from '../components/TopRated/CardTP';
import PageLayout from '../layout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getTopRatedMovie, getTopRatedSeries } from '../redux/actions/movie';

const imgURL = import.meta.env.VITE_IMGURL;

function TopRated() {
  const { 
    getTopRatedMovieLoading,
    getTopRatedMovieResult,
    getTopRatedMovieError
  } = useSelector(state => state.movieReducer);

  const { 
    getTopRatedSeriesLoading,
    getTopRatedSeriesResult,
    getTopRatedSeriesError 
  } = useSelector(state => state.movieReducer); 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovie());
    dispatch(getTopRatedSeries());
  },[dispatch]);

  return (
    <PageLayout>
      <div className='w-full text-white'>
        <div className='bg-gradient-to-b from-black via-transparent via-20% to-black to-95% pt-16'>
          <h1 className='text-4xl font-bold text-center pt-4'>Top Rated</h1>
          <div className='w-[90%] mx-auto pt-10'>
            <h2 className='text-2xl font-semibold -translate-x-4'>Movies</h2>
            <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4'>
              {getTopRatedMovieResult ? (
                getTopRatedMovieResult.map((movie) => (
                  <Link key={movie.id} to={`/detail/${movie.id}`}>
                    <CardTP img={imgURL+movie.poster_path} title={movie.title} />
                  </Link>
                ))
              ) : getTopRatedMovieLoading ? (
                  <div className='w-full h-52 text-xl text-white font-bold'>Loading...</div> 
              ) : (
                <div>{getTopRatedMovieError ? getTopRatedMovieError : "Empty Data"}</div>
              )
              }
            </div>
          </div>
        </div>
        <div className='bg-gradient-to-b from-black via-transparent via-20% to-black py-16'>
          <div className='w-[90%] mx-auto'>
            <h2 className='text-2xl font-semibold -translate-x-4'>TV Series</h2>
            <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4 mb-20'>
            {getTopRatedSeriesResult ? (
              getTopRatedSeriesResult.map((series) => (
                <Link key={series.id}>
                  <CardTP img={imgURL+series.poster_path} title={series.name} />
                </Link>
              ))
            ) : getTopRatedSeriesLoading ? (
              <div className='w-full h-52 text-xl text-white font-bold'>Loading...</div> 
            ) : (
              <div>{getTopRatedSeriesError ? getTopRatedSeriesError : "Empty Data"}</div>
            )
            }
            </div>
          </div>
        </div>
        <hr />
      </div>
    </PageLayout>
  )
}

export default TopRated;