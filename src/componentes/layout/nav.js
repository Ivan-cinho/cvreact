import React, { useState, useEffect } from 'react';
import '../../estilos/componentes/layout/nav.css'
import { Link } from 'react-router-dom';
import { obtenerDatosPersonales, obtenerDatos} from "../../api.js";

const Nav = (props) => {

    const [datosPersonales, setDatosPersonales] = useState([]);
    const [contacto, setContacto] = useState([]);

    useEffect(() => {
        const fetchDatos = async () => {
            const datosPersonales = await obtenerDatosPersonales();
            const contacto = await obtenerDatos('contacto');
            setDatosPersonales(datosPersonales);
            setContacto(contacto);
        };

        fetchDatos();
    }, []);

    return (
        <div>
            <aside className="aside">
                <div className="accordion" id="accordionExample"/>
                    <div className="accordion-item">
                        <h4 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Datos personales
                            </button>
                        </h4>
                        <div id="collapseOne" className="accordion-collapse show">
                            <div className="accordion-body">
                                <div className="Personales">
                                {datosPersonales.map((item, index) => (
                                        <div key={index}>
                                            <p>Edad: {item.edad}</p>
                                            <p>Nacionalidad: {item.nacionalidad}</p>
                                            <p>DNI: {item.dni}</p>
                                            <p>Domicilio: {item.domicilio}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Contacto
                            </button>
                        </h4>
                        <div id="collapseTwo" className="accordion-collapse show">
                            <div className="accordion-body">
                                <div className="contacto">
                                    <div className="contSocial">
                                        {contacto.map((item, index) => (
                                            <a key={index} href={item.url} target="_blank" className="enlaceContacto" rel="noopener noreferrer">
                                            <i className={`fa ${item.icon}`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className="contBotonera">
                        <Link to="/inicio" className="btn btn-primary botonInicio botonSecciones">Inicio</Link>
                        <Link to="/formacion" className="btn btn-primary botonFormacion botonSecciones">Formación</Link>
                        <Link to="/experiencia" className="btn btn-primary botonExperiencia botonSecciones">Experiencia laboral</Link>
                    </div>
            </aside>
        </div>
    );
}

export default Nav;