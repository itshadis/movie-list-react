import { 
  GET_HERO_MOVIE, 
  GET_SERIES_MOVIES, 
  GET_TRENDING_TODAY_MOVIE,
  GET_TOP_RATED_MOVIES,
  GET_TOP_RATED_SERIES,
  GET_UPCOMING_MOVIES,
  GET_SEARCH_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_CASTERS,
} from "../../actions/movie";

const initialState = {
  getMovieHeroLoading: false,
  getMovieHeroResult: false,
  getMovieHeroError: false,

  getMovieTrendingTodayLoading: false,
  getMovieTrendingTodayResult: false,
  getMovieTrendingTodayError: false,
  
  getSeriesLoading: false,
  getSeriesResult: false,
  getSeriesError: false,

  getTopRatedMovieLoading: false,
  getTopRatedMovieResult: false,
  getTopRatedMovieError: false,
  
  getTopRatedSeriesLoading: false,
  getTopRatedSeriesResult: false,
  getTopRatedSeriesError: false,

  getUpcomingMovieLoading: false,
  getUpcomingMovieResult: false,
  getUpcomingMovieError: false,

  getSearchMovieLoading: false,
  getSearchMovieResult: false,
  getSearchMovieError: false,

  getMovieDetailLoading: false,
  getMovieDetailResult: false,
  getMovieDetailError: false,

  getMovieCasterLoading: false,
  getMovieCasterResult: false,
  getMovieCasterError: false,
}

const movie = (state = initialState, action) => {
  switch(action.type) {
    case GET_HERO_MOVIE:
      return {
        ...state,
        getMovieHeroLoading: action.payload.loading,
        getMovieHeroResult: action.payload.data,
        getMovieHeroError: action.payload.error
      }

    case GET_TRENDING_TODAY_MOVIE:
      return {
        ...state,
        getMovieTrendingTodayLoading: action.payload.loading,
        getMovieTrendingTodayResult: action.payload.data,
        getMovieTrendingTodayError: action.payload.error
      }
    
    case GET_SERIES_MOVIES:
      return {
        ...state,
        getSeriesLoading: action.payload.loading,
        getSeriesResult: action.payload.data,
        getSeriesError: action.payload.error
      }
    
    case GET_TOP_RATED_SERIES:
      return {
        ...state,
        getTopRatedSeriesLoading: action.payload.loading,
        getTopRatedSeriesResult: action.payload.data,
        getTopRatedSeriesError: action.payload.error
      }
      
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        getTopRatedMovieLoading: action.payload.loading,
        getTopRatedMovieResult: action.payload.data,
        getTopRatedMovieError: action.payload.error
      }
    
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        getUpcomingMovieLoading: action.payload.loading,
        getUpcomingMovieResult: action.payload.data,
        getUpcomingMovieError: action.payload.error     
      }
    
    case GET_SEARCH_MOVIES:
      return {
        ...state,
        getSearchMovieLoading: action.payload.loading,
        getSearchMovieResult: action.payload.data,
        getSearchMovieError: action.payload.error
      }

    case GET_MOVIE_DETAILS:
      return {
        ...state,
        getMovieDetailLoading: action.payload.loading,
        getMovieDetailResult: action.payload.data,
        getMovieDetailError: action.payload.error
      }

    case GET_MOVIE_CASTERS:
      return {
        ...state,
        getMovieCasterLoading: action.payload.loading,
        getMovieCasterResult: action.payload.data,
        getMovieCasterError: action.payload.error
      }

    default:
      return state;
  }
}

export default movie;