import { useState } from 'react';
import Nav from './components/Nav';
import MovieCard from './components/MovieCard';
import AddMovies from './components/AddMovies';


function App() {
  const [movies, setMovies] = useState([
    {

      id:Math.random(),
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjDP660IMVh8lpOcF3LCXgRBMudLvzhuRxA&usqp=CAU",
      name:"jaws",
      rating : 4  ,
    
    },
    {
      id:Math.random(),
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2VP63XKPH-r9kqz_avG9gVyFmIvhv4wQiw&usqp=CAU",
      name:"titanic",
      rating : 1  ,
    
    },
    {
      id:Math.random(),
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBBYXD36mqPXWmVFgrfc6-SbbvuDQ6hkE5w&usqp=CAU",
      name:"avatar",
      rating : 5  ,
    
    },
    {
      id:Math.random(),
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G2t9fbv61SM2A-Y352tfI5IfLL_E4hmJXQ&usqp=CAU",
      name:"gone girl",
      rating : 5  ,
    
    },
    {
      id:Math.random(),
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVrVWH0eKN4XEFh05N2zCa6g4EFCzPDt0Mw&usqp=CAU",
      name:"the road",
      rating : 4  ,
    
    },
    {
      id:Math.random(),
      img : "https://www.joblo.com/wp-content/uploads/2019/12/venom-let-there-be-carnage-poster-2-819x1024-1-400x600.jpg",
      name:"venom",
      rating : 3  ,
    
    },
    {
      id:Math.random(),
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnLbrjDAlr8Plaf1azHJNIXPFCrGlHmKG3g&usqp=CAU",
      name:"fight club",
      rating : 2  ,
    
    },
    {
      id:Math.random(),
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwKy1nwZrZGhrlbAqxEKkHookXcbuUbb1Kg&usqp=CAU",
      name:"furry",
      rating : 5  ,
    
    },
    
    ]);
const[newMovie,setNewMovie] = useState ({
  id: Math.random(),
  title: " ",
  image: " ",
  date: " ",
  rate: 0 ,
});
const[search,setSearch] = useState (" ");
const[rating , setRating] = useState(0);
const[toggle, setToggle] =useState (false)
const handleRating = (newRating) =>
setRating(newRating) ;
const handleSearch= (search) => {
  setSearch(search.target.value);
};
const handleModal = () => {
  setToggle(!toggle);
if ( newMovie.title.length !== 0 && newMovie.image.length !== 0 ) {
  setMovies ([...movies,newMovie]); setToggle(!toggle);
}
else {setToggle(!toggle)}
};
const handleAddMovie = (e) => {
(setNewMovie( e.target.title)) 
}
  return (
    <div className="App">
      <Nav search={search} 
      handleSearch={handleSearch}
       rating={rating}
        handleRating={handleRating}
        handleModal={handleModal}/>
    <MovieCard movies={movies} search={search}/>
    <AddMovies 
    toggle={toggle} 
    handleModal={handleModal}
    newMovie={newMovie}
    handleAddMovie={handleAddMovie}/>
    </div>
  );
}

export default App;
