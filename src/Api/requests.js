const APIKEY="86db0e8670acf9dccbd011ba7ffde948"
const requests = {
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOrginals:`/discover/tv?api_key=${APIKEY}&with_network=213`,
    fetchTopRated : `/movie/top_rated>api_key${APIKEY}&with_gerers=35s`
}