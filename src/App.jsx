import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Carrousel from '../src/components/Carrousel';
import Section from './components/Section';
import MovieDetails from './components/Moviedetails';
import { MoviesProvider } from './context/MoviesProvider';

const App = () => {
  return (
    <BrowserRouter>
      <MoviesProvider>
          <div className='text-white overflow-x-hidden'>
              <Navbar />
             
              <main className=''>
                  <Routes>
                      <Route path="/" element={<Section />} />
                      <Route path="/movie/:id" element={<MovieDetails />} />

                  </Routes>
              </main>
          </div>
       </MoviesProvider>
    </BrowserRouter>
  );
};

export default App;
