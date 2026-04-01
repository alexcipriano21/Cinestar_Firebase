import { getPeliculas, getPelicula, getCines, getCine } from './cinestar.js';

const router = async () => {
    const contentDiv = document.getElementById('contenido-interno');
    const hash = (window.location.hash || '#/').toLowerCase();

    try {
        if (hash === '#/' || hash === '') return;
        if (hash === '#cartelera') return await getPeliculas('cartelera');
        if (hash === '#estrenos') return await getPeliculas('estrenos');
        if (hash === '#cines') return await getCines();
        if (hash.startsWith('#pelicula/')) {
            const id = hash.split('/')[1];
            return await getPelicula(id);
        }
        if (hash.startsWith('#cine/')) {
            const id = hash.split('/')[1];
            return await getCine(id);
        }
    } catch (error) {
        console.error("Error al cargar la ruta:", error);
        contentDiv.innerHTML = '<br><h2 style="color:red; text-align:center;">Error al cagar la información de la Base de Datos.</h2><br>';
    }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
