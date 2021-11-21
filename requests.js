const API_KEY = "78099ac8e8b9d322862f7e69eb9f9c14 ";

const requests = {
  netflixOriginal: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`,
  fatchTrendingMovie: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  fatchTopRatedMovie: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  fatchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  fatchUpcomingMovie: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  fatchNowPlyaingMovie: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
};
export default requests;
