import { useContext, useEffect, useState } from 'react'
import MoviesContext from '../context/MoviesProvider'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Modal from './Modal'
import Resumen from './Resumen'

const MovieDetails = () => {
    // Extrae los valores del contexto y otros estados
    const {
        movies,
        modalIsOpen,
        setModalIsOpen,
        setSelectedSeats
    } = useContext(MoviesContext);

    // extraer el id de la url
    const { id } = useParams();


    // Define el estado para la hora seleccionada y el arreglo de horas
    const [horaSeleccionada, setHoraSeleccionada] = useState('');

    const hora = [
        '',
        '3:45 AM',
        '4:32 AM',
        '5:15 AM',
        '12:00 PM',
        '1:30 PM',
        '6:00 PM'
    ]


    // Busca la película en el arreglo de películas basado en el id
    const datMovie = movies.find((movie) => id == movie.id)

    useEffect(() => {
        id !== movies.id ? setSelectedSeats([]) : null;
    },[] );



    return (
        <div className='flex max-h-max overflow-y-hidden h-screen'>
            <section className="text-white bg-slate-850 body-font w-3/4  overflow-y-auto max-h-screen">
                <h1 className='flex justify-center items-center pt-7 font-serif text-4xl text-whitefont-bold'>{datMovie.title}</h1>

                <div className="mt-1 ml-44">
                    <Link to="/" className="flex items-center justify-center w-16 h-10 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                    </Link>
                </div>

                <div className="container  mt-28 mx-auto flex flex-wrap overflow-y-auto max-h-screen">

                    <div className="flex relative  pb-10 sm:items-center md:w-2/3 mx-auto items-center justify-center">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative  title-font font-medium text-sm">1</div>
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
                                        className="block w-1/5 mt-1 p-1 rounded bg-gray-300 text-gray-900 min-w-max"
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
                            <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative  title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 rounded-full inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className="w-12 h-12 text-indigo-500">
                                    <path fill="#4F46E5" d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
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
                            <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
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
                                <h2 className="font-medium title-font text-white mb-1 text-xl">Duración y clasificación</h2>
                                <p className="leading-relaxed">Clasificacion C y duracion: 2:43</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Resumen horaSeleccionada={horaSeleccionada} />

        </div>
    )
}

export default MovieDetails
