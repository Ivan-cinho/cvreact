import React from 'react';

const TarjetaPortafolio = ({ titulo, descripcion, enlace, referencia, imagen, id }) => {
    const imagenSrc = `${process.env.PUBLIC_URL}/${imagen}`;
    return (
        <div className="card cardPorta" style={{ minWidth: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{titulo || 'Sin título'}</h5>
                {descripcion && <p>{descripcion}</p>}
                {enlace && (
                    <a href={enlace} target="_blank" rel="" className="card-link">
                        <img id={id} className="imagen" src={imagenSrc || 'placeholder.jpg'} alt={titulo} />
                    </a>
                )}
                {referencia && (
                    <button className="btn btn-primary">
                        <a className="referenciaPortafolios" href={referencia} target="_blank" rel="noopener noreferrer">Referencia</a>
                    </button>
                )}
            </div>
        </div>
    );
};

export default TarjetaPortafolio;