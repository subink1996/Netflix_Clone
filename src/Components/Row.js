import { useState, useEffect } from "react";
import axios from "../Api/api";
const Row = (props) => {
  useEffect(() => {
    async function fectchData() {
      const request = await axios.get(props.fetchUrl);
      console.log(request.data.results);
      return request;
    }
    fectchData();
  }, []);
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <h2>{props.title}</h2>
      {movies.map((movie) => (
        <div></div>
      ))}
    </div>
  );
};
export default Row;
