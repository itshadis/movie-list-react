import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getHeroMovies } from '../../services/services';

const largeImgURL = import.meta.env.VITE_LARGE_IMAGE_URL;

function Hero() {
  const [heroMovie, setHeroMovie] = useState([]);

  useEffect(() => {
    getHeroMovies().then(results => {
      setHeroMovie(results);
    })
  },[]);

  return (
    <>
      <Carousel 
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={true}
      >
        {heroMovie.map((movie) => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <div className='w-full relative'>
              <div className='w-full lg:h-[600px]'>
                <img src={largeImgURL+movie.backdrop_path} alt="" />
              </div>
              <div className='w-full h-full flex items-end absolute text-white top-0 bg-gradient-to-t from-black'>
                <div className='w-full ml-6 md:ml-16 mb-16 sm:w-[450px] flex flex-col text-start gap-0 md:gap-2'>
                  <h1 className='text-lg sm:text-2xl md:text-4xl font-bold'>{movie.title}</h1>
                  <span className='text-xs sm:text-base text-slate-400'>{movie.release_date}</span>
                  <p className='text-xs sm:text-base max-[500px]:hidden'>{movie.overview}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  );
}

export default Hero;