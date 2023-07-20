import { 
  getHeroMovies,
  getTrendingMovies,
  getSeriesMovies,
  getTRMovies, 
  getTRSeries,
  getUpcomingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCasters,
} from "../../services/services";

export const GET_HERO_MOVIE = 'GET_HERO_MOVIE';
export const GET_TRENDING_TODAY_MOVIE = 'GET_TRENDING_TODAY_MOVIE';
export const GET_SERIES_MOVIES = 'GET_SERIES_MOVIES';
export const GET_TOP_RATED_MOVIES = 'GET_TOP_RATED_MOVIES';
export const GET_TOP_RATED_SERIES = 'GET_TOP_RATED_SERIES';
export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';
export const GET_SEARCH_MOVIES = 'GETS_SEARCH_MOVIES';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'; 
export const GET_MOVIE_CASTERS = 'GET_MOVIE_CASTERS';

//get hero movies
export const getHeroMovie = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_HERO_MOVIE,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getHeroMovies()
      .then(result => {
        dispatch({
          type:GET_HERO_MOVIE,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_HERO_MOVIE,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}

//get trending today movies
export const getTrendingMovieToday = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_TRENDING_TODAY_MOVIE,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getTrendingMovies()
      .then(result => {
        dispatch({
          type:GET_TRENDING_TODAY_MOVIE,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_TRENDING_TODAY_MOVIE,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}

//get series
export const getSeriesMovie = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_SERIES_MOVIES,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getSeriesMovies()
      .then(result => {
        dispatch({
          type:GET_SERIES_MOVIES,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_SERIES_MOVIES,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}

//get top rated movies
export const getTopRatedMovie = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getTRMovies()
      .then(result => {
        dispatch({
          type:GET_TOP_RATED_MOVIES,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_TOP_RATED_MOVIES,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}

//get top rated series
export const getTopRatedSeries = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_TOP_RATED_SERIES,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getTRSeries()
      .then(result => {
        dispatch({
          type:GET_TOP_RATED_SERIES,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_TOP_RATED_SERIES,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}

//get upcoming movies
export const getUpcomingMovie = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_UPCOMING_MOVIES,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getUpcomingMovies()
      .then(result => {
        dispatch({
          type:GET_UPCOMING_MOVIES,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_UPCOMING_MOVIES,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}

//get search movies
export const getSearchMovie = (query) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_SEARCH_MOVIES,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getSearchMovies(query)
      .then(result => {
        dispatch({
          type:GET_SEARCH_MOVIES,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_SEARCH_MOVIES,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}

//get movie details
export const getMovieDetail = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_MOVIE_DETAILS,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getMovieDetails(id)
      .then(result => {
        dispatch({
          type:GET_MOVIE_DETAILS,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_MOVIE_DETAILS,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}

//get movie casters
export const getMovieCaster = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_MOVIE_CASTERS,
      payload: {
        loading: true,
        data: false,
        error: false
      }
    })

    //getData
    getMovieCasters(id)
      .then(result => {
        dispatch({
          type:GET_MOVIE_CASTERS,          
          payload: {
            loading: false,
            data: result,
            error: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_MOVIE_CASTERS,
          payload: {
            loading: false,
            data: false,
            error: error.message
          }
        })
      })
  }
}