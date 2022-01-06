import Filter from "./Filter";
import { useState, useEffect } from "react";

const MovieCard = ({ movies, search, rating }) => {
  const [filtermovies, setfilterMovies] = useState(movies);
  useEffect(() => {
    if (search.length !== 0 || rating !== 0) {
      setfilterMovies(
        movies.filter((Filter) => {
          return (
            Filter.name.toLowerCase().includes(search.toLowerCase()) &&
            Filter.rating >= rating
          );
        })
      );
    } else {
      setfilterMovies(movies);
    }
  }, [search, rating, movies]);
  return (
    <div>
      <Filter movies={filtermovies} />
    </div>
  );
};

export default MovieCard;
