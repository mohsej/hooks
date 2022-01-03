import ReactStars from "react-rating-stars-component";
import React from "react";

const Filter = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        console.log(movie);
        return (
          <div key={movie.id}>
            <img src={movie.img} />
            <h4>{movie.name}</h4>
            <div>
              <ReactStars
                count={5}
                value={movie.rating}
                size={24}
                isHalf={false}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
