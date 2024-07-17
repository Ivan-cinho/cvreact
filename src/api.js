

export const obtenerDatos = async (tipo) => {
    try {
        const response = await fetch('/data/datos.json');
        const data = await response.json();
        return data[tipo];
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return [];
    }
};

// Funciones específicas para cada grupo de datos usando la función genérica
export const obtenerDatosPersonales = () => obtenerDatos('datosPersonales');
export const obtenerCartaDePresentacion = () => obtenerDatos('cartaDePresentacion');
export const obtenerDatosPortafolios = () => obtenerDatos('datosPortafolios');
export const obtenerDatosSecundariaYSuperior = () => obtenerDatos('datosSecundariaYSuperior');
export const obtenerDatosTecnicaturasYCursos = () => obtenerDatos('datosTecnicaturasYCursos');
export const obtenerDatosCertificaciones = () => obtenerDatos('datosCertificaciones');
export const obtenerDatosExperiencia = () => obtenerDatos('datosExperiencia');
export const obtenerDatosReferencias = () => obtenerDatos('datosReferencias');
export const obtenerDatosWhatsApp = () => obtenerDatos('whatsapp');
export const obtenerDatosHeader = () => obtenerDatos('datosHeader');