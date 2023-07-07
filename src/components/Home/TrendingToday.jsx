import React, { useEffect, useState } from 'react'
import { getTrendingMovies } from '../../services/services';
import Card from '../Card';
import { Link } from 'react-router-dom';

const imgURL = import.meta.env.VITE_IMGURL;

function TrendingToday() {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(results => {
      setTrendingMovie(results);
    })
  }, [])

  return (
    <div className='w-full'>
      <div className='w-[90%] mx-auto py-8 text-white'>
        <h2 className='text-xl font-bold'>Trending Today</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-2'>
          {trendingMovie.map(movie => (
            <Link key={movie.id} to={`/detail/${movie.id}`}>
              <Card img={imgURL+movie.poster_path} title={movie.title} rating={movie.vote_average} />
            </Link>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default TrendingToday;