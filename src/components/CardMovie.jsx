import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'



const CardMovie = ({ movie }) => {

    const {id, category, resume, title, image} = movie

    return (
        <div className="max-w-sm mx-auto ">
            <Link to={`/movie/${id}`}>
                <div className="bg-gray-700 bg-opacity-40 p-6 rounded-lg h-96 overflow-hidden ">
                    <p className="text-xl font-semibold mb-2 text-white p-1 transition  duration-400 hover:scale-120 hover:text-blue-500 hover:z-10">{title}</p>
                    <div className="relative">
                        <img className="w-full h-48 object-contain object-center mb-4 transition transform duration-500 hover:scale-110 hover:z-10 cursor-pointer" src={image} alt={title} />
                    </div>

                    <div className="flex ">
                        <p className="text-blue-400 text-base font-medium pr-2">Género</p>
                        <p className="text-base text-white font-medium">{category}</p>
                    </div>

                    <div className="mt-4 overflow-y-auto ">
                        <p className="text-blue-400 text-xs font-medium">Descripción:</p>
                        <p className="text-base text-white leading-relaxed">{resume}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

CardMovie.propTypes = {

    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        resume: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default CardMovie