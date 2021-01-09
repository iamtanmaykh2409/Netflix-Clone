import React, { useEffect, useState } from 'react'
import './row.css';
import axios from './axios';

const baseUrl = "https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies,setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData();
    }, [fetchUrl])
    return (
        <div className="row">
            {title}
            <div className="row_posters">
            {movies.map((movie) => (
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt="moviename" />
                ))
            }
                
            </div>
        </div>
    )
}

export default Row
