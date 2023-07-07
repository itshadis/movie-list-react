import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const search = import.meta.env.VITE_SEARCH;
const trendingURL = import.meta.env.VITE_TRENDING_URL;
const seriesURL = import.meta.env.VITE_SERIES_URL;
const upcomingURL = import.meta.env.VITE_UPCOMING;

export const getHeroMovies = async () => {
  const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
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

export const getUpcomingMovies = async () => {
  const movies = await axios.get(`${upcomingURL}?api_key=${apiKey}`);
  return movies.data.results;
}

export const getSearchMovies = async (q) => {
  const movies = await axios.get(`${search}?query=${q}&api_key=${apiKey}`);
  return movies.data.results;
}