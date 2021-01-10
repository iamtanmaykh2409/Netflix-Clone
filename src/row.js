import React, { useEffect, useState } from 'react'
import './row.css';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies,setMovies] = useState([])
    const [trailerUrl , setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData();
    }, [fetchUrl])

    const handleTrailer = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("")
        } else{
            movieTrailer(movie?.name || "").then((url) =>{
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'));
            }).catch(() => console.log("Temporarily Unavailable"))
        }
    }
    const opts = {
        height: "330",
        width: "100%",
        playerVars:{
            autoplay:1,
        }
    }
    return (
        <div className="row">
            {title}
            <div className="row_posters">
            {movies.map((movie) => (<img
            key = {movie.id}
            onClick={ () => handleTrailer(movie)}
             className={`row_poster ${isLargeRow && "row_posterLarge"}`}src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt = {movie.name}  />))
            }              
            </div>
            {trailerUrl && <YouTube videoId ={trailerUrl} opts ={opts} />}
        </div>
    )
}

export default Row
