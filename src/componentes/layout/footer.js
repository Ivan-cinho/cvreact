import React, { useState, useEffect } from 'react';
import '../../estilos/componentes/layout/footer.css';
import { obtenerDatos } from '../../api';

const Footer = (props) => {

    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await obtenerDatos('contacto');
            setContactos(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <footer>
                <section className="holder">
                    <div>
                    {contactos.map((contacto, index) => (
                            <a
                                key={index}
                                href={contacto.url}
                                className={`btn-social ${contacto.className}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={`fa ${contacto.icon}`} aria-hidden="true"></i>
                            </a>
                        ))}
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default Footer;