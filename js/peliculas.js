import { db } from './firebaseConfig.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const getPeliculas = async () => {
	const tipo = new URLSearchParams(window.location.search).get('id');
	const idEstado = tipo === 'cartelera' ? '1' : '2';
	const titulo = tipo === 'cartelera' ? 'Cartelera' : 'Próximos Estrenos';

	const q = query(collection(db, "peliculas"), where("idEstado", "==", idEstado));
	const querySnapshot = await getDocs(q);

	const peliculas = querySnapshot.docs.map(doc => doc.data()).sort((a, b) => a.id - b.id);

	let html = `<br/><h1>${titulo}</h1><br/>`

	peliculas.forEach(pelicula => {
		html += `
                <div class="contenido-pelicula">
					<div class="datos-pelicula">
						<h2>${pelicula.Titulo}</h2><br/>
						<p>${pelicula.Sinopsis}</p>
						<br/>
                       	<div class="boton-pelicula"> 
                       		<a href="pelicula.html?id=${pelicula.id}">
                       			<img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                       		</a>
               			</div>
               			<div class="boton-pelicula"> 
               				<a href="https://www.youtube.com/v/${pelicula.Link}" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
               					<img src="img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
               				</a>
                        </div> 
					</div>
					<img src="img/pelicula/${pelicula.id}.jpg" width="160" height="226"/><br/><br/>
				</div>
            `
	});
	document.getElementById('contenido-interno').innerHTML = html
}
getPeliculas()