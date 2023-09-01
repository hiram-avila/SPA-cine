import React from 'react'
import { Link } from 'react-router-dom'



const CardMovie = ({ movie }) => {

    return (
        <div className="max-w-sm mx-auto  ">
            <Link to={`/movie/${movie.id}`}>
                <div className="bg-gray-700 bg-opacity-40 p-6 rounded-lg h-96 overflow-hidden ">
                    <p className="text-xl font-semibold mb-2 text-white p-1 transition  duration-400 hover:scale-120 hover:text-blue-500 hover:z-10">{movie.title}</p>
                    <div className="relative">
                        <img className="w-full h-48 object-contain object-center mb-4 transition transform duration-500 hover:scale-110 hover:z-10 cursor-pointer" src={movie.image} alt={movie.title} />
                    </div>

                    <div className="flex ">
                        <p className="text-blue-400 text-base font-medium pr-2">Género</p>
                        <p className="text-base text-white font-medium">{movie.category}</p>
                    </div>

                    <div className="mt-4 overflow-y-auto pb-8">
                        <p className="text-blue-400 text-xs font-medium">Descripción:</p>
                        <p className="text-base text-white leading-relaxed">{movie.resume}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardMovie