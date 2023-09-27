import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";
import "./Rows.css";

function Rows({ title, fetchUrl,isPoster }) {
  
  const base_url = "https://image.tmdb.org/t/p/original/";
  // console.log(fetchUrl);
  const[allMovies,setAllMovies]=useState([])
  const fetchData = async () => {
    const {data} = await tmdbAxiosInstance.get(fetchUrl);
    setAllMovies(data.results)
  };
  // console.log(allMovies);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movies_row">
        {allMovies.map(item=>(
          <img className={`movie ${isPoster && 'movie_large'}`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt="No image" />
        ))}
      </div>
    </div>
  );
}

export default Rows;
