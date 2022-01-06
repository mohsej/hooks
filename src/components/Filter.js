import ReactStars from "react-rating-stars-component";
import "./Filter.css";
const Filter = ({ movies }) => {
  return (
    <div className="acc">
      {movies.map((Filter) => {
        return (
          <div className="acc" key={Filter.id}>
            <img className="img" src={Filter.img} />
            <h4 className="name">{Filter.name}</h4>
            <div className="rate">
              <ReactStars
                count={5}
                value={Filter.rating}
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
