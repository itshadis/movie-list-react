import React, { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../services/services'
import CardUpcoming from '../components/Upcoming/CardUpcoming';
import { Link } from 'react-router-dom';

function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect (() => {
    getUpcomingMovies().then(result => {
      setUpcomingMovies(result)
    })
  }, []);

  return (
    <>
      <div className='text-white w-full bg-gradient-to-t from-black via-transparent to-black py-20'>
        <h1 className='text-3xl text-center font-bold pb-16 -translate-x-6'>Upcoming Movies</h1> 
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
        {upcomingMovies.map(movie => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <CardUpcoming 
              img={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview}
            />
          </Link>
        ))}
        </div>
      </div>
      <hr />
    </>
  )
}

export default Upcoming