import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Detail/Banner';
import Poster from '../components/Detail/Poster';
import DetailList from '../components/Detail/DetailList';
import Artist from '../components/Detail/Artist';

const apiKey = import.meta.env.VITE_API_KEY;
const detailURL = import.meta.env.VITE_MOVIE_DETAIL_URL;

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [caster, setCaster] = useState([]);
  
  useEffect(() => {
    const fetchDetailMovie = async () => {
      const dataMovies = await fetch(`${detailURL}/${id}?api_key=${apiKey}`);
      const movies = await dataMovies.json();
      setMovieDetail(movies);

      const dataCaster = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
      const caster = await dataCaster.json();
      setCaster(caster.cast);
    }
    
    fetchDetailMovie();
  },[id]);

  return (
    <>
      <div className='w-full bg-gradient-to-t from-black via-transparent via-20% to-black to-90%'>
        <div className='w-full overflow-hidden relative'>
          <Banner movieDetail={movieDetail} />
          <div className='w-full h-full absolute bottom-0 bg-gradient-to-t from-black'></div>
        </div>
        <div className='w-[90%] mx-auto flex flex-col sm:flex-row relative gap-4 sm:gap-10'>
          <Poster movieDetail={movieDetail} />
          <DetailList movieDetail={movieDetail} />
        </div>
        <Artist caster={caster} />
      </div>
      <hr />
    </>
  );
}

export default Detail;