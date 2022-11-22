//obteniendo datos de la memoria
let peliculaConsultadaEnMemoria=JSON.parse(localStorage.getItem("pelicula"))
console.log(peliculaConsultadaEnMemoria)

let etiquetaImagen=document.getElementById("imagenPelicula")
etiquetaImagen.src=peliculaConsultadaEnMemoria.imagen

let etiquetaNombre=document.getElementById("nombrePelicula")
etiquetaNombre.textContent=peliculaConsultadaEnMemoria.titulo

let etiquetaDuracion=document.getElementById("duracion")
etiquetaDuracion.textContent=peliculaConsultadaEnMemoria.duraccion

let etiquetaSinopsis=document.getElementById("sipnosis")
etiquetaSinopsis.textContent=peliculaConsultadaEnMemoria.sinopsis

let etiquetaimagendos=document.getElementById("imagenpeliculados")
etiquetaimagendos.src=peliculaConsultadaEnMemoria.imagendos

let etiquetagenero=document.getElementById("genero")
etiquetagenero.textContent=peliculaConsultadaEnMemoria.genero