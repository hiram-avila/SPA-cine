import React, { useContext, useEffect, useState } from 'react'
import MoviesContext, { MoviesProvider } from '../context/MoviesProvider'
import { useParams } from 'react-router-dom'
import Modal from './Modal'
import Resumen from './Resumen'

const MovieDetails = () => {
    // Extrae los valores del contexto y otros estados
    const {
            movies,
            modalIsOpen,
            setModalIsOpen,
            selectedSeats,
            setSelectedSeats
      } = useContext(MoviesContext);

      // extraer el id de la url
      const { id } = useParams();
      
      // Define el estado para la hora seleccionada y el arreglo de horas
      const [horaSeleccionada, setHoraSeleccionada] = useState('');

      const hora= [  
            '',
            '3:45 AM',
            '4:32 AM',
            '5:15 AM',
            '12:00 PM',
            '1:30 PM',
            '6:00 PM'
      ]

      console.log('me ejecute')

      // Busca la película en el arreglo de películas basado en el id
      const datMovie = movies.find((movie) => id == movie.id);
          
      useEffect(() => {
        id !== movies.id ? setSelectedSeats([]) : null;
    }, []);
    

    console.log(selectedSeats)

    return (
        <div className='flex max-h-max overflow-y-hidden h-screen'>

            <section className="text-white bg-slate-850 body-font w-3/4  overflow-y-auto max-h-screen">
                <h1 className='flex justify-center items-center pt-7 font-serif text-4xl text-whitefont-bold'>{datMovie.title}</h1>

                <div className="container  py-20 mx-auto flex flex-wrap overflow-y-auto max-h-screen">
                    <div className="flex relative  pb-10 sm:items-center md:w-2/3 mx-auto items-center justify-center">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative  title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl pb-3">Selecciona la hora</h2>
                                <p className="leading-relaxed">
                                    <select
                                        className="block w-1/5 mt-1 p-2 rounded bg-gray-300 text-gray-900 min-w-max"
                                        value={horaSeleccionada}
                                        onChange={(e) => setHoraSeleccionada(e.target.value)}
                                    >
                                        {hora.map((hour, index) => (
                                            <option key={index} value={hour}>
                                                {hour}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto pt-10">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative  title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl">Selecciona asientos</h2>
                                <button
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                                    onClick={() => setModalIsOpen(true)} // Abre el modal al hacer clic
                                >
                                    Click me
                                </button>
                                {
                                    modalIsOpen ? <Modal /> : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex relative  sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative  title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl">The 400 Blows</h2>
                                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

           <Resumen horaSeleccionada={horaSeleccionada}/>
           
        </div>
    )
}

export default MovieDetails
