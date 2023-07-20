import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { getSearchMovies } from '../services/services';
import CardSearch from '../components/Search/CardSearch';
import PageLayout from '../layout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchMovie } from '../redux/actions/movie';

function SearchResult() {
  const location = useLocation();
  const query = location.state;
  const {
    getSearchMovieLoading,
    getSearchMovieResult,
    getSearchMovieError
  } = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchMovie(query))
  }, [query, dispatch]);

  return (
    <PageLayout>
      <div className='text-white w-full bg-gradient-to-t from-black via-transparent to-black py-20'>
        <div className='w-[90%] mx-auto'>
          <h1 className='text-3xl font-bold pb-16 sm:-translate-x-6'>Result for <span className='font-semibold'>{query}</span>
          </h1>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4'>
            {getSearchMovieResult ? (
              getSearchMovieResult.map(movie => (
                <Link key={movie.id} to={`/detail/${movie.id}`}>
                  <CardSearch img={movie.poster_path} title={movie.title.length < 30 ? movie.title : movie.title.substring(0,26)+'...'} />
                </Link>
              ))
            ) : getSearchMovieLoading ? (
              <div className='w-full h-52 flex items-center justify-center text-xl text-white font-bold'>Loading...</div> 
            ) : (
              <div>{getSearchMovieError ? getSearchMovieError : "Empty Data"}</div>
            )
            }
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default SearchResult;