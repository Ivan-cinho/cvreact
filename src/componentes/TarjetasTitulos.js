import React from 'react';
import Swal from 'sweetalert2';

const TarjetasTitulos = ({ data }) => {

    const mostrarCertis = (datos) => {
        Swal.fire({
            width: '50%',
            backdrop: true,
            imageUrl: `${process.env.PUBLIC_URL}/${datos.imagen}`,
            imageWidth: '70%',
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__fadeInUp animate__fast'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown animate__fast'
            }
        });
    };

    return (
        <div className="contTarjetas" id="tarjetasCertificaciones">
            {data.map((dato, index) => (
                <div key={index} className="card" id="tarjetaCertis" style={{ minWidth: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{dato.nombre}</h5>
                        <button 
                            className="card-link botonCertis" 
                            onClick={() => mostrarCertis(dato)}
                        >
                            <img 
                                id={dato.id} 
                                className="imagen" 
                                src={`${process.env.PUBLIC_URL}/${dato.imagen}`} 
                                alt={dato.nombre} 
                            />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TarjetasTitulos;