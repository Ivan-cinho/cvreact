import React, { useState } from 'react';
import '../estilos/App.css';

const Acordeon = ({ lugar, descripcion }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className={`list ${isOpen ? 'scale' : ''}`}>
            <div className="otraClase" onClick={toggleAccordion}>
                <h4 className="lugar">{lugar}</h4>
                <i className={`fa-solid fa-chevron-down ${isOpen ? 'rotate' : ''}`}></i>
            </div>
            {isOpen && <p className="descripcion">{descripcion}</p>}
        </li>
    );
};

export default Acordeon;