import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "c830bcff8dcc274ff002c7030f2a74dc";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=c830bcff8dcc274ff002c7030f2a74dc";

//https://api.themoviedb.org/3/trending/all/day?api_key=c830bcff8dcc274ff002c7030f2a74dc
//(movieByGenreBaseURL + "&with_genres=" + id)

const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`,
);

const getMovieByGenreId = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default { getTrendingVideos, getMovieByGenreId };
