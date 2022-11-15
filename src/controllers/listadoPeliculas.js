let peliculas=[
    
    {
        nombre:"Hallowen la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0"

    },
    {
        nombre:"La noche del demonio",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc"
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1"
    },
    {
        nombre:"Tadeo",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=3b31d4c0-3c0b-4317-ba8a-fc47a47e2a84"
    },
    {
        nombre: "Wakanda forever",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690"
    },
    {
        nombre: "AMSTERDAM",
        duracion:115,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/AMSTERDAMNUEVO1.jpg?alt=media&token=502ffa4e-1c4b-4386-8e5a-1d3e59dc1fac"
    },
    {
        nombre: "la mujer",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LA%20MUJER.jpg?alt=media&token=d2b8a963-dcb6-491d-b027-a5daeb72360a"
    },
    {
        nombre: "sonrie1",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/SONRIE1.jpg?alt=media&token=759d87fa-6b61-4ecb-aa85-4060fda90fdd"
    },
    {
        nombre: "los reyes del mundo",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LOS%20REYES%20DEL%20MUNDO1.jpg?alt=media&token=754eeeff-d4e3-4776-862b-53f4ef3d077c"
    },
    {
        nombre: "la jauria",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LA%20JAURIA.jpg?alt=media&token=0dad90d1-1e92-49da-8fd6-956a95b50936"
    }
]
//creamos una referencia al espacio html donde queremos hacer el render(pintar etiquetas)
let etiquetafila=document.getElementById("fila")

/*si ya tengo datos que normalmente llegan al front 
como un arreglo de objetos debemos recorrer y depurar
dicha informacion */


//para pintar la informacion de cada pelicula debemos 
//aplicar una tecnica conocida como traversing
//traversing=crear etiquetas de html desde js
peliculas.forEach(function(pelicula){

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h4")
    duracion.classList.add("text-start")
    duracion.textContent="duracion: "+pelicula.duracion+"min"

    //jerarquia de etiquetas(padres e hijos)
    etiquetafila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
})