const API_KEY = "88de441ba6ddf2708992d5574106ace1";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-IN`,
    fetchNetflixOriginals: `/discovery/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-IN`,
}
export default request;

