import { useEffect, useState } from "react";

import Filter from "./Filter";

const MovieCard = ({ movies, search, rating }) => {
  const [filtermovies, setfilterMovies] = useState(movies);
  useEffect(() => {
    if (search.langth !== 0 || rating !== 0) {
      setfilterMovies(
        filtermovies.filter((movie) => {
          return (
            movie.name.toLowerCase().includes(search.toLowerCase()) ||
            movie.rating >= rating
          );
        })
      );
    } else {
      setfilterMovies(movies);
    }
  }, [search]);

  return (
    <div>
      <Filter movies={movies} />
    </div>
  );
};

export default MovieCard;
