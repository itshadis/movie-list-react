import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Detail/Banner';
import Poster from '../components/Detail/Poster';
import DetailList from '../components/Detail/DetailList';
import Artist from '../components/Detail/Artist';
import PageLayout from '../layout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieCaster, getMovieDetail } from '../redux/actions/movie';

function Detail() {
  const { id } = useParams();
  const { 
    getMovieDetailLoading,
    getMovieDetailResult,
    getMovieDetailError
  } = useSelector(state => state.movieReducer);

  const {
    getMovieCasterLoading,
    getMovieCasterResult,
    getMovieCasterError
  } = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetail(id));
    dispatch(getMovieCaster(id));
  },[dispatch,id]);
  
  return (
    <PageLayout>
      <div className='w-full bg-gradient-to-t from-black via-transparent via-20% to-black to-90%'>
        <div className='w-full overflow-hidden relative'>
          {getMovieDetailResult ? (
            <>
              <Banner movieDetail={getMovieDetailResult} />
              <div className='w-full h-full absolute bottom-0 bg-gradient-to-t from-black'></div>
            </>
          ) : getMovieDetailLoading ? (
              <div className='w-full h-[600px] flex justify-center items-center text-3xl text-white font-semibold'>Loading...</div>
          ) : (
            <div>{getMovieDetailError ? getMovieDetailError : "Empty Data"}</div>
          )
          }
        </div>
        <div className='w-[90%] mx-auto flex flex-col sm:flex-row relative gap-4 sm:gap-10'>
          {getMovieDetailResult ? (
            <>
              <Poster movieDetail={getMovieDetailResult} />
              <DetailList movieDetail={getMovieDetailResult} />
            </> 
          ) : getMovieDetailLoading ? (
            <div className='w-[90%] mx-auto h-[600px] text-3xl text-white font-semibold'>Loading...</div>
          ) : (
            <div>{getMovieDetailError ? getMovieDetailError : "Empty Data"}</div>
          )
          } 
        </div>
        {getMovieCasterResult ? (
          <Artist caster={getMovieCasterResult} />
        ) : getMovieCasterLoading ? (
          <div className='w-[90%] mx-auto text-3xl text-white font-semibold'>Loading...</div>
        ) : (
          <div>{getMovieCasterError ? getMovieCasterError : "Empty Data"}</div>
        )
        }
      </div>
      <hr />
    </PageLayout>
  );
}

export default Detail;