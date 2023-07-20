import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroMovie } from '../../redux/actions/movie';

const largeImgURL = import.meta.env.VITE_LARGE_IMAGE_URL;

function Hero() {
  const { getMovieHeroLoading, getMovieHeroResult, getMovieHeroError } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroMovie())  
  },[dispatch]);

  return (
    <>
    {getMovieHeroResult ? (
      <Carousel 
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={true}
      >
        {getMovieHeroResult.map((movie) => (
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
    ) : getMovieHeroLoading ? (
      <div className='w-full h-[600px] flex justify-center items-center text-5xl text-white font-bold'>
        Loading...
      </div>
    ) : (
      <div>{getMovieHeroError ? getMovieHeroError : "Empty Data"}</div>
    )}
    </>
  );
}

export default Hero;