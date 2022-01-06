import React from "react"
import {Navbar,Form,Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

function MainNavbar({search,handleSearch,rating,handleRating,handleModal}) {
    return (
        <div className="Nav">
             <Navbar bg="dark" variant="dark">
     
      <Button className="button" onClick={handleModal}>AddMovies</Button>
        <Form className="d-flex"
        >
        <input 
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={handleSearch}
        />
        <Button className="buts" variant="outline-success">Search</Button> 
         
       <div className="star"> <ReactStars 
         count={5}
         size={24} 
         value={rating}
         onChange={handleRating}
         isHalf={false}
         emptyIcon={<i className="far fa-star"></i>}
         halfIcon={<i className="fa fa-star-half-alt"></i>}
         fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700" />
          
          </div> 
      </Form>
     
        </Navbar>
    


        </div>
    )
}

export default MainNavbar
