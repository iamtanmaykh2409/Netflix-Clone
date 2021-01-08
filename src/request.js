const APIKEY = "88de441ba6ddf2708992d5574106ace1"

const requests ={
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genre=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genre=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genre=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}&with_genre=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genre=99`
}

export default requests;