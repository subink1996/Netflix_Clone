const APIKEY = "86db0e8670acf9dccbd011ba7ffde948";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-IN`,
  fetchNetflixOrginals: `/discover/tv?api_key=${APIKEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-IN`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorroeMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default requests;
