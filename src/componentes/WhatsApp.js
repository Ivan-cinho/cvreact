import React from 'react';
import '../estilos/componentes/whatsapp.css';
import { obtenerDatosWhatsApp } from '../api';

const WhatsApp = () => {
    const whatsappData = obtenerDatosWhatsApp(); // Obtener datos de WhatsApp

    if (!whatsappData) return null; // Manejo de datos no disponibles

    return (
        <a
            href={whatsappData.url}
            className={"btn-wsp"}
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
};

export default WhatsApp;