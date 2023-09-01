import React, { createContext, useState } from 'react';
import {movies} from '../constants/movies'


const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);


  return (
    <MoviesContext.Provider 
        value={{
            movies,
            modalIsOpen,
            setModalIsOpen,
            selectedSeats,
            setSelectedSeats
        }}>

      {children}
    </MoviesContext.Provider>
  );
};

export{
    MoviesProvider
}

export default MoviesContext