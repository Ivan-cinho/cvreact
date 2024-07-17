import React from 'react';
import '../estilos/componentes/tarjetasReferencias.css'

const TarjetasReferencias = ({ data }) => {
    return (
        <div className="contTarjetas" id="tarjetasReferencias">
            {data.map((dato, index) => (
                <div key={index} className="card" style={{ minWidth: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{dato.nombre}</h5>
                        {dato.telefono && (
                            <p className='datosReferencias'>{dato.telefono}</p>
                        )}
                        {dato.correo && (
                            <p className='datosReferencias'>{dato.correo}</p>
                        )}
                        {dato.linkedin && (
                            <a href={dato.linkedin} target="_blank" rel="noopener noreferrer" className="enlaceLinked">
                                <i className="fa-brands fa-linkedin linkedRefes"></i>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TarjetasReferencias;