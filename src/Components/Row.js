import { useState, useEffect } from "react";
import axios from "../Api/api";
import "./Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  useEffect(() => {
    async function fectchData() {
      const request = await axios.get(props.fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fectchData();
  }, [props.fetchUrl]);
  const [movies, setMovies] = useState([]);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className={`row__poster`}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__posters ${props.isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
export default Row;
