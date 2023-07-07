import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CardTP from '../components/TopRated/CardTP';

const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMGURL;
const tpURL = import.meta.env.VITE_TOPRATED_URL;
const seriesURL = import.meta.env.VITE_TP_SERIES;

function TopRated() {
  const [tpMovies, setTPMovies] = useState([]);
  const [tpSeries, setTPSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataMovies = await fetch(`${tpURL}?api_key=${apiKey}`);
      const movies = await dataMovies.json();
      setTPMovies(movies.results);

      const dataSeries = await fetch(`${seriesURL}?api_key=${apiKey}`);
      const series = await dataSeries.json();
      setTPSeries(series.results);
    }

    fetchData()
  },[]);

  return (
    <div className='w-full text-white'>
      <div className='bg-gradient-to-b from-black via-transparent via-20% to-black to-95% pt-16'>
        <h1 className='text-4xl font-bold text-center pt-4'>Top Rated</h1>
        <div className='w-[90%] mx-auto pt-10'>
          <h2 className='text-2xl font-semibold -translate-x-4'>Movies</h2>
          <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4'>
            {tpMovies.map((movie) => (
              <Link key={movie.id} to={`/detail/${movie.id}`}>
                <CardTP img={imgURL+movie.poster_path} title={movie.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-black via-transparent via-20% to-black py-16'>
        <div className='w-[90%] mx-auto'>
          <h2 className='text-2xl font-semibold -translate-x-4'>TV Series</h2>
          <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4 mb-20'>
          {tpSeries.map((series) => (
            <Link key={series.id}>
              <CardTP img={imgURL+series.poster_path} title={series.name} />
            </Link>
          ))}
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default TopRated;