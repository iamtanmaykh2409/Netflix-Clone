const APIKEY = "88de441ba6ddf2708992d5574106ace1"
// const APIKEY ="8228ea1e0fmshcbb20b7b9e79db2p1e2e90jsn0bfa6375080f"

const requests ={
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-IN`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests;