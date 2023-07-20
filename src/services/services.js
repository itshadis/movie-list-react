import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const popularURL = import.meta.env.VITE_POPULAR_URL
const search = import.meta.env.VITE_SEARCH;
const trendingURL = import.meta.env.VITE_TRENDING_URL;
const seriesURL = import.meta.env.VITE_SERIES_URL;
const upcomingURL = import.meta.env.VITE_UPCOMING;
const tpMovieURL = import.meta.env.VITE_TOPRATED_URL;
const tpSeriesURL = import.meta.env.VITE_TP_SERIES;
const detailURL = import.meta.env.VITE_MOVIE_DETAIL_URL;

export const getHeroMovies = async () => {
  const movies = await axios.get(`${popularURL}?api_key=${apiKey}`);
  return movies.data.results
}

export const getTrendingMovies = async () => {
  const movies = await axios.get(`${trendingURL}?api_key=${apiKey}`);
  return movies.data.results;
}

export const getSeriesMovies = async () => {
  const movies = await axios.get(`${seriesURL}?api_key=${apiKey}`);
  return movies.data.results;
}

export const getTRMovies = async () => {
  const movies = await axios.get(`${tpMovieURL}?api_key=${apiKey}`);
  return movies.data.results;
}

export const getTRSeries = async () => {
  const movies = await axios.get(`${tpSeriesURL}?api_key=${apiKey}`);
  return movies.data.results;
}

export const getUpcomingMovies = async () => {
  const movies = await axios.get(`${upcomingURL}?api_key=${apiKey}`);
  return movies.data.results;
}

export const getSearchMovies = async (q) => {
  const movies = await axios.get(`${search}?query=${q}&api_key=${apiKey}`);
  return movies.data.results;
}

export const getMovieDetails = async (id) => {
  const movies = await axios.get(`${detailURL}/${id}?api_key=${apiKey}`);
  return movies.data;
}

export const getMovieCasters = async (id) => {
  const caster = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
  return caster.data.cast;
}