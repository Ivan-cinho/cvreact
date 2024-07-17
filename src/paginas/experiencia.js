import React, { useState, useEffect } from "react";
import '../estilos/App.css';
import { obtenerDatosExperiencia, obtenerDatosReferencias } from "../api.js";
import Acordeon from "../componentes/Acordeon";
import TarjetasReferencias from "../componentes/TarjetasReferencias";

const Experiencia = () => {
    const [datosExperiencia, setDatosExperiencia] = useState([]);
    const [datosReferencias, setDatosReferencias] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            const experiencia = await obtenerDatosExperiencia();
            setDatosExperiencia(experiencia);

            const referencias = await obtenerDatosReferencias();
            setDatosReferencias(referencias);
        };
        obtenerDatos();
    }, []);

    return (
        <section className="Experiencia">
            <h3>Experiencia laboral</h3>
            <div className="seccionConBordes">
                <div className="header">
                    <h4>Empleador</h4>
                </div>
                <div>
                    <ul className="acordeones">
                        {datosExperiencia.map((item, index) => (
                            <Acordeon key={index} lugar={item.lugar} descripcion={item.descripcion} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="seccionConBordes">
                <div className="header">
                    <h4>Referencias</h4>
                </div>
                <div>
                    <TarjetasReferencias data={datosReferencias} />
                </div>
            </div>
        </section>
    );
}

export default Experiencia;