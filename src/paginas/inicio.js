import React, { useState, useEffect } from "react";
import '../estilos/App.css';
import { obtenerCartaDePresentacion, obtenerDatosPortafolios } from "../api.js";
import TarjetaPortafolio from "../componentes/TarjetasPortafolios.js";

const Inicio = () => {
    const [cartaDePresentacion, setCartaDePresentacion] = useState([]);
    const [portafolios, setPortafolios] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            const carta = await obtenerCartaDePresentacion();
            setCartaDePresentacion(carta);

            const datosPortafolios = await obtenerDatosPortafolios();
            setPortafolios(datosPortafolios);
        };
        obtenerDatos();
    }, []);

    return (
        <section className="Inicio">
            <h3>Inicio</h3>
            <div className="seccionConBordes">
                <div className="header">
                    <h4>Carta de presentación</h4>
                </div>
                <div>
                    {cartaDePresentacion.map((item, index) => (
                        <p key={index}>{item.carta}</p>
                    ))}
                </div>
            </div>
            <div className="seccionConBordes">
                <div className="header">
                    <h4>Portafolios web</h4>
                </div>
                <div className="contTarjetas">
                    {portafolios.map((proyecto, index) => (
                        <TarjetaPortafolio
                            key={index}
                            titulo={proyecto.titulo}
                            descripcion={proyecto.descripcion}
                            enlace={proyecto.enlace}
                            referencia={proyecto.referencia}
                            imagen={proyecto.imagen} // Imagen se maneja desde el componente TarjetaPortafolio
                            id={proyecto.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Inicio;