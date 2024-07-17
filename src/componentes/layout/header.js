import React, { useEffect, useState } from 'react';
import '../../estilos/componentes/layout/header.css'
import { obtenerDatosHeader } from '../../api'

const Header = (props) => {

    const [datosHeader, setDatosHeader] = useState({ nombre: '', imagen: '' });

    useEffect(() => {
        const fetchDatosHeader = async () => {
            try {
                const data = await obtenerDatosHeader();
                setDatosHeader(data);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchDatosHeader();
    }, []);
    return (
        <div>
            <header className="encabezado">
                <div className="holder">
                    <div className="elh1">
                        <h1>{datosHeader.nombre}</h1>
                        <p>Curriculum Vitae</p>
                    </div>
                </div>
            </header>
            <div><img 
                        src={`${process.env.PUBLIC_URL}/${datosHeader.imagen}`} 
                        alt="foto" className="foto"
                />
            </div>
        </div>
    );
}

export default Header;