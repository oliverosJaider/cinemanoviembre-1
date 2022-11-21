let peliculas=[
    
    {
        nombre:"Hallowen la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0",
        sinopsis:"Cuatro años después de la desaparición de Michael Myers, el joven Corey lo encuentra maltrecho en las alcantarillas. Poco a poco, se establece un extraño vínculo entre estos dos personajes unidos por la venganza y la locura."

    },
    {
        nombre:"La noche del demonio",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc",
        sinopsis:"Josh (Patrick Wilson), su esposa Renai (Rose Byrne) y sus tres hijos acaban de mudarse a una vieja casa. Pero, tras un desgraciado accidente, uno de los niños entra en coma y, al mismo tiempo, empiezan a producirse en la casa extraños fenómenos que aterrorizan a la familia."
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1",
        sinopsis:"En los años 70, Gru crece siendo un gran admirador de Los salvajes seis, un supergrupo de villanos. Para demostrarles que puede ser malvado, Gru idea un plan con la esperanza de formar parte de la banda. Por suerte, cuenta con la ayuda de sus fieles seguidores, los Minions, siempre dispuestos a sembrar el caos."
    },
    {
        nombre:"Tadeo",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=3b31d4c0-3c0b-4317-ba8a-fc47a47e2a84",
        sinopsis:"Tadeo, un albañil que sueña con ser arqueólogo, es enviado por error a una expedición en Perú. Con la ayuda de su fiel perro Jeff, una intrépida profesora, un loro mudo y un buscavidas, intentará salvar la mítica ciudad perdida de los Incas de una malvada empresa de cazatesoros."
    },
    {
        nombre: "Wakanda forever",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:"Una secuela que seguirá explorando el incomparable mundo de Wakanda y todos los ricos y variados personajes presentados en la película de 2018"
        
    },
    {
        nombre: "AMSTERDAM",
        duracion:115,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/AMSTERDAMNUEVO1.jpg?alt=media&token=502ffa4e-1c4b-4386-8e5a-1d3e59dc1fac",
        sinopsis:"En la década de 1930, tres amigos que presencian un asesinato se convierten en sospechosos del mismo. La investigación que emprenden los lleva a descubrir una de las conspiraciones más asombrosas de la historia estadounidense."
    },
    {
        nombre: "la mujer",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LA%20MUJER.jpg?alt=media&token=d2b8a963-dcb6-491d-b027-a5daeb72360a",
        sinopsis:"The Woman es la última superviviente del violento clan que ha estado en la costa noreste durante décadas. Severamente herida y vulnerable, la mujer se convierte en una presa fácil para el perturbado abogado Christopher Cleek, el cual se embarcará en un desquiciado proyecto para capturarla y hacerla pedazos, una decisión que no tardará en amenazar su vida y la de los suyos"
    },
    {
        nombre: "sonrie1",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/SONRIE1.jpg?alt=media&token=759d87fa-6b61-4ecb-aa85-4060fda90fdd",
        sinopsis:"Tras presencia el dramático incidente sufrido por un paciente, la Dra. Cotter empieza a experimentar hechos aterradores sin explicación aparente. A medida que el horror se adueña de su vida, comprende que la respuesta está en su propio pasado."
    },
    {
        nombre: "los reyes del mundo",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LOS%20REYES%20DEL%20MUNDO1.jpg?alt=media&token=754eeeff-d4e3-4776-862b-53f4ef3d077c",
        sinopsis:"Un día todos los hombres se quedaron dormidos… Y los cercos de la tierra, ardieron” Rá (19), Culebro (16), Sere (14), Winny (12) Nano (13) cinco chicos de la calle de Medellín. Cinco reyes sin reino. En sus manos tienen unas viejas escrituras de una tierra heredada por Rá. Tras recibir una carta de la oficina de restitución de tierras del gobierno, notificando la devolución de los terrenos que le fueron arrebatados a su abuela, Rá decidirá emprender el viaje con sus amigos con la promesa de por fin cumplir un sueño: tener un lugar en el mundo donde ser libres, donde estar a salvo, donde construir su propio reino."
    },
    {
        nombre: "la jauria",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LA%20JAURIA.jpg?alt=media&token=0dad90d1-1e92-49da-8fd6-956a95b50936",
        sinopsis:"En un centro de rehabilitación experimental en medio de la selva, Eliú paga una sentencia por asesinato. Cuando su mejor amigo y cómplice es trasladado al mismo lugar, los jóvenes deberán reconstruir su crimen y enfrentar un pasado del que Eliú se quiere alejar. En medio de terapias y trabajos forzados, Eliú se enfrentará a la oscuridad de la naturaleza humana y tratará de escapar de la suya antes de que sea demasiado tarde."
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

    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

    //jerarquia de etiquetas(padres e hijos)
    etiquetafila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(sinopsis)
})

//Escuchadno el evento del clic en alguna pelicula de la cartelera

let peliculaSelecionada={}

etiquetafila.addEventListener("click", function(evento){
   if(evento.target.classList.contains("img-fluid")){
   // window.location.href="./src/views/verinfopelicula.html"
   // obteniendo los datos de la pelicula 
   // para ingresar a la fuente de una etiqueta se usa el src si es imagen o texconten si es texto
   peliculaSelecionada.imagen=evento.target.parentElement.querySelector('img').src
   peliculaSelecionada.titulo=evento.target.parentElement.querySelector('h3').textContent
   peliculaSelecionada.duraccion=evento.target.parentElement.querySelector('h4').textContent
   peliculaSelecionada.sinopsis=evento.target.parentElement.querySelector("P").textContent
    
   //enviando nuestros datos de la pelicula selecionada a la memoria
   localStorage.setItem("pelicula", JSON.stringify(peliculaSelecionada))
   window.location.href="./src/views/verinfopelicula.html"
   }
})