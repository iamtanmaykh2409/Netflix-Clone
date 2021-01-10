import React, {useEffect, useState} from 'react'
import axios from './axios'
import requests from './Requests'
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetFlixOriginals)
            console.log(request.data.results);

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
            return request;
        }
        fetchData();
    },[])
    console.log(movie);

    // function truncate(str, n){
    //     return str?.length > n ? str.substr(0, n-1) + "..." : str;
    // }

    return (
        <header className = "banner"
            style={{
                backgroundSize: "cover",
                // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sacurrent.com%2FArtSlut%2Farchives%2F2017%2F11%2F15%2Flas-lloronas-bringing-the-upside-down-to-brick-at-blue-star&psig=AOvVaw1HE0vFJn51PxR24If_jRCP&ust=1610359102586000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjAt6qNke4CFQAAAAAdAAAAABAR")`,
                backgroundPosition: "center center",
            }}
        >

            <div className = "banner__contents">
                {/* <h1 className = "banner__title">{movie?.title || movie?.name || movie?.original_name}</h1> */}
                <h1 className = "banner__title">Stranger Things</h1>

                <div className = "banner__buttons">
                    <button className = "banner__button">Play</button>
                    <button className = "banner__button">My List</button>
                </div>
                    {/* <h1 className = "banner__description">{truncate(movie?.overview, 150)}</h1> */}
                    <h1 className = "banner__description">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</h1>
            </div>
            <div className = "banner__fadeBottom" ></div>
        </header>
    )
}

export default Banner