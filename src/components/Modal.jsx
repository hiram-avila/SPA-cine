import { useContext, useState } from 'react';

import image1 from '../assets/seats/seat-disable.png'
import image2 from '../assets/seats/seat-enable.png'
import MoviesContext from '../context/MoviesProvider';

const ModalComponent = ({ isOpen, onClose }) => {
    // Definimos el número de filas y columnas de asientos
    const numRows = 10;
    const numCols = 10;
    // Definimos las letras para etiquetar las columnas
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Usamos el contexto MoviesContext para acceder a los datos compartidos y funciones
    const { modalIsOpen, setModalIsOpen, selectedSeats, setSelectedSeats } = useContext(MoviesContext);

    // Función para cerrar el modal
    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Función para manejar el clic en un asiento
    const handleSeatClick = (seatLabel) => {
        if (selectedSeats.includes(seatLabel)) {
            // Si el asiento ya está seleccionado, lo eliminamos de los asientos seleccionados
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatLabel));
        } else {
            if (selectedSeats.length < 4) {
                // Si hay menos de 4 asientos seleccionados, agregamos el nuevo asiento
                setSelectedSeats([...selectedSeats, seatLabel]);
            } else {
                // Si ya se han seleccionado 4 asientos, mostramos una alerta
                alert('Solo puedes seleccionar hasta 4 asientos.');
            }
        }
    };

    return (
        <>
            {modalIsOpen && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  pl-5 w-1/2 h-1/2">
                                <div className="bg-white px-4 pb-4 pt-5 ">

                                    <div className=''>
                                        <div className="flex flex-wrap gap-2">
                                            {/* Números de columna */}
                                    <div className='w-full bg-black p-1 flex justify-center items-center mx-3'>
                                        <p>Pantalla</p>
                                    </div>
                                            <div className="w-10 h-10"></div>
                                            {Array.from({ length: numCols }).map((_, col) => (
                                                <div key={`col-${col}`} className="w-10 h-10 flex items-center justify-center cursor-pointer text-black">
                                                    {col + 1}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Filas y asientos */}
                                        {Array.from({ length: numRows }).map((_, row) => (
                                            <div key={`row-${row}`} className="flex items-center">
                                                <div className="w-10 h-10 flex items-center justify-center cursor-pointer text-black">
                                                    {alphabet.charAt(row)}
                                                </div>
                                                {Array.from({ length: numCols }).map((_, col) => {
                                                    const seatLabel = `${alphabet.charAt(row)}${col + 1}`;
                                                    const isSeatOccupied = (row + col) % 2 === 0;
                                                    const isSelected = selectedSeats.includes(seatLabel);

                                                    return (
                                                        <div
                                                            key={`${row}-${col}`}
                                                            className={`w-10 h-10 flex ml-2 my-1 items-center justify-center relative cursor-pointer `}
                                                            onClick={() => handleSeatClick(seatLabel)}
                                                        >
                                                            <img src={isSelected ? image2 : image1} alt={`Asiento ${seatLabel}`} />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ))}


                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 sm:ml-3 sm:w-auto"
                                        onClick={closeModal}
                                    >
                                        Aceptar
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 sm:mt-0 sm:w-auto"
                                        onClick={() => { setSelectedSeats([]); closeModal(); }}>
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default ModalComponent;
