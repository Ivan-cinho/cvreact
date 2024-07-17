// ajuste dinamico de altura de viewport //
export function ajustarAltura() {
    const content = document.querySelector('.content');
    const holder = document.querySelector('.holder');
    const footerHeight = document.querySelector('footer').offsetHeight;

    // Ajustar la altura del contenedor principal en función del contenido desplegable
    if (content && holder) {
        const contentHeight = holder.scrollHeight;
        const windowHeight = window.innerHeight;
        const newHeight = contentHeight + footerHeight > windowHeight ? contentHeight : windowHeight - footerHeight;

        content.style.minHeight = `${newHeight}px`;
    }
}

export function addAjustarAltura() {
    // Llamar a la función ajustarAltura cuando se carga la página y cuando cambia el tamaño de la ventana
    window.addEventListener('load', ajustarAltura);
    window.addEventListener('resize', ajustarAltura);

    // Llamar a la función ajustarAltura después de que el contenido se despliega
    document.querySelectorAll('.acordeon-toggle, .tarjetas-toggle').forEach((toggle) => {
        toggle.addEventListener('click', () => {
            setTimeout(ajustarAltura, 300); // Ajustar después de la animación de despliegue
        });
    });
}

export function removeAjustarAltura() {
    window.removeEventListener('load', ajustarAltura);
    window.removeEventListener('resize', ajustarAltura);
    document.querySelectorAll('.acordeon-toggle, .tarjetas-toggle').forEach((toggle) => {
        toggle.removeEventListener('click', ajustarAltura);
    });
}