import React, { useState, useEffect } from "react";
import '../estilos/App.css';
import { 
    obtenerDatosSecundariaYSuperior, 
    obtenerDatosTecnicaturasYCursos, 
    obtenerDatosCertificaciones 
} from "../api.js";
import Acordeon from "../componentes/Acordeon";
import TarjetasTitulos from "../componentes/TarjetasTitulos";

const Formacion = () => {
    const [datosSecundariaYSuperior, setDatosSecundariaYSuperior] = useState([]);
    const [datosTecnicaturasYCursos, setDatosTecnicaturasYCursos] = useState([]);
    const [datosCertificaciones, setDatosCertificaciones] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            const secundariaYSuperior = await obtenerDatosSecundariaYSuperior();
            setDatosSecundariaYSuperior(secundariaYSuperior);

            const tecnicaturasYCursos = await obtenerDatosTecnicaturasYCursos();
            setDatosTecnicaturasYCursos(tecnicaturasYCursos);

            const certificaciones = await obtenerDatosCertificaciones();
            setDatosCertificaciones(certificaciones);
        };
        obtenerDatos();
    }, []);

    return (
        <section className="Formacion">
            <h3>Formación</h3>
            <div className="seccionConBordes">
                <div className="header">
                    <h4>Educación secundaria y superior</h4>
                </div>
                <div>
                    <ul className="acordeones">
                        {datosSecundariaYSuperior.map((item, index) => (
                            <Acordeon key={index} lugar={item.lugar} descripcion={item.descripcion} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="seccionConBordes">
                <div className="header">
                    <h4>Tecnicaturas y cursos</h4>
                </div>
                <div>
                    <ul className="acordeones">
                        {datosTecnicaturasYCursos.map((item, index) => (
                            <Acordeon key={index} lugar={item.lugar} descripcion={item.descripcion} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="seccionConBordes">
                <div className="header">
                    <h4>Títulos y certificaciones</h4>
                </div>
                <div>
                    <TarjetasTitulos data={datosCertificaciones} />
                </div>
            </div>
        </section>
    );
}

export default Formacion;