import { useContext } from 'react'
import CardMovie from './CardMovie'
import MoviesContext from '../context/MoviesProvider'
import Carrousel from './Carrousel'

const Section = () => {

    const { movies } = useContext(MoviesContext)

    return (
<>
        <Carrousel />
        <section className="text-gray-400 body-font bg-gray-900 ">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="text-4xl font-medium title-font mb-2 text-white">Selecciona la pelicula</h1>
                        <div className="h-1 w-1/2 bg-blue-500 rounded"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 overflow-y-hidden">
                    {movies.map((pelicula) => (
                        <CardMovie key={pelicula.id} movie={pelicula} />
                    ))}
                </div>
            </div>
        </section>

</>
    )
}

export default Section
