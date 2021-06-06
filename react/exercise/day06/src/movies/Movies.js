import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import data from '../utils/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';

const Movies = () => {
    const [ movies , setMovies] = useState(data);
    const [movieId, setMovieId]=useState(data[0]);
    const [isActive, setIsActive]=useState(false);

    const onOver=(id)=>{
        //setMovieId(movies[id-1])
        setMovieId(movies.find( item => item.rank===id ))
    }

    const openModal=()=>{
        setIsActive(true)
    }
    const closeModal=()=>{
        setIsActive(false)
    }

    return (
        <div className="gallery">
             <MovieView movieId = { movieId } openModal={openModal}/>   
             <MovieList movies={ movies } onOver={ onOver }/>
             {
                 isActive && <Modal movieId = { movieId } closeModal={closeModal}/>  
             }
              
        </div>
    );
};

export default Movies;