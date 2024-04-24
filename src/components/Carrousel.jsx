import { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import image1 from '../assets/movies/cinepolis1.webp'
import image2 from '../assets/movies/cinepolis2.webp'
import image3 from '../assets/movies/cinepolis3.webp'
import image4 from '../assets/movies/cinepolis4.webp'


const Carrousel = () => {
    // Lista de diapositivas con sus URLs de imágenes
    const slides = [
        { url: image1 },
        { url: image2 },
        { url: image3 },
        { url: image4 }
    ];

    // Estado para rastrear el índice de la diapositiva actual
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        // Limpieza del intervalo al desmontar el componente
        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]); // Se ejecutará cada vez que currentIndex cambie


    // Función para mostrar la diapositiva anterior
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Función para mostrar la siguiente diapositiva
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Función para ir a una diapositiva específica al hacer clic en los puntos
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='w-screen h-[310px] relative group'>
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                className='w-full h-full duration-500 pl-4 pt-72 cursor-pointer'
                aria-label='Imagen de la película'
            >Creditos:Cinepolis
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl  p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carrousel