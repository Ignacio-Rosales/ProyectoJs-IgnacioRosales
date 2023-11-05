class Pelicula {
    constructor(id, imagenUrl, nombre, descripcion, duracion){
        this.id  = id,
        this.imagenUrl = imagenUrl,
        this.nombre = nombre.toUpperCase(),
        this.descripcion = descripcion,
        this.duracion = parseInt(duracion)
    }
}
//Convertirlos en JSON con Stringify
const pelicula1 = new Pelicula(1, "./img/batman.jpg","The Batman","En Halloween, el alcalde de Gotham City Don Mitchell Jr. es asesinado por el asesino en serie Riddler (Enigma en España, Acertijo en Hispanoamérica). El multimillonario Bruce Wayne, que lleva dos años operando en Gotham como el justiciero enmascarado Batman, investiga el hecho junto al Departamento de Policía de Gotham City (GCPD)", 120)
const pelicula2 = new Pelicula(2,"./img/depredador.jpg","Predator", "Un grupo de exsoldados y un biólogo se enfrentarán a los cazadores más letales de todo el universo, quienes han alterado sus cuerpos con el ADN de otras especies para hacer desaparecer a la raza humana.", 160)
const pelicula3 = new Pelicula(3,"./img/lamonja.jpg","La monja","Una monja se suicida en una abadía rumana y el Vaticano envía a un sacerdote y una novicia a investigar lo sucedido. Lo que ambos encuentran allá es un secreto perverso que los enfrentará cara a cara con el mal en su esencia más pura.", 150)
const pelicula4 = new Pelicula(4,"./img/dicaprio.jpg","Asesinos de la luna", "En la década de 1920, los miembros de la tribu de nativos americanos del condado de Osage, en Oklahoma, son asesinados cuando se encuentra petróleo en sus tierras. El FBI establece una investigación para encontrar a los culpables.", 140)
const pelicula5 = new Pelicula(5,"./img/oppenheimer.jpg","Oppenheimer", "Durante la Segunda Guerra Mundial, el teniente general Leslie Groves designa al físico J. Robert Oppenheimer para un grupo de trabajo que está desarrollando el Proyecto Manhattan, cuyo objetivo consiste en fabricar la primera bomba atómica.", 185)



let listaPeliculas = [ pelicula1, pelicula2, pelicula3, pelicula4, pelicula5 ]

const listaPeliculasStr = JSON.stringify(listaPeliculas)

localStorage.setItem("peliculas", listaPeliculasStr)

class Serie extends Pelicula {
    constructor(id, nombre, descripcion, duracion, capitulos, temporadas){
        super(id,nombre, descripcion, duracion)
        this.capitulos = capitulos,
        this.temporadas= temporadas
    }
}

class Carrito {
    constructor(){
        this.lista = []
    }

        agregarPelicula(p, lista){
            if(lista != null && p != null ){
                if(lista.includes(p)){
                    console.log("La pelicula ya se encuentra en el carrito")
                }else{
                    this.lista.push(p)
                }
            }
        }

        quitarPelicula(p,carrito){
            let carritoLista 
            if(carrito != null ){
                if(carrito.lista.includes(p)){
                    carritoLista = carrito.lista.filter(item => item !== p)
                }else {
                    console.log("La pelicula no esta en el carrito")
                }
                carrito.lista = carritoLista
            } 
    }
}   



const contenedor = document.querySelector(".contenedor")
const contador = document.getElementById("contador")

// Recuperar el valor del contador almacenado en el localStorage si existe
const contadorStorage = localStorage.getItem("contador")
if (contadorStorage) {
  contador.innerText = contadorStorage
}

for (let p of listaPeliculas) {
  let div_img = document.createElement("div")
  div_img.className = "contenedor_img"
  div_img.innerHTML = `
    <img src="${p.imagenUrl}">
    <h3>${p.nombre}</h3>
    <p>${p.descripcion}</p>
    <button class="btn-comprar" data-text="Agregar al carrito">Agregar al carrito</button>
  `
  contenedor.appendChild(div_img)
}

function actualizarContador(event) {
  const contador = document.getElementById("contador")
  const boton = event.target
  const textoOriginal = boton.getAttribute("data-text")

  if (boton.textContent === "Agregado") {
    boton.textContent = textoOriginal
    contador.innerText = parseInt(contador.innerText) - 1
  } else {
    boton.textContent = "Agregado"
    contador.innerText = parseInt(contador.innerText) + 1
  }

  // Guardar el valor de los botones en el LocalStorage
  const botonesAgregar = document.querySelectorAll(".btn-comprar")
  const botonesText = Array.from(botonesAgregar).map((boton) => boton.textContent)
  localStorage.setItem("botones", JSON.stringify(botonesText))

  // Guardar el valor actual del contador en el LocalStorage
  localStorage.setItem("contador", contador.innerText)
}

const botonesAgregar = document.querySelectorAll(".btn-comprar")
botonesAgregar.forEach(function (boton) {
  boton.addEventListener("click", actualizarContador)
})

// Recuperar el valor de los botones almacenados en el localStorage si existe
const botonesStorage = localStorage.getItem("botones")
if (botonesStorage) {
    const botonesText = JSON.parse(botonesStorage)
    const botonesAgregar = document.querySelectorAll(".btn-comprar")

    botonesAgregar.forEach((boton, index) => {
        boton.innerText = botonesText[index]
    })
}




// function mostrarListaPeliculas() {
//     let mensaje = "Lista de películas disponibles:\n";
//     console.log("Lista de películas disponibles:");
//     for (let i = 0; i < listaPeliculas.length; i++) {
//         mensaje += `${i + 1}. ${listaPeliculas[i].nombre}\n`;
//         console.log(`${i + 1}. ${listaPeliculas[i].nombre}`);
//     }
//     return mensaje 
// }

// alert(mostrarListaPeliculas());

// const carrito = [];//Este carrito tiene que ser un JSON para almacenar los datos en el localStorage

// function agregarPeliculaAlCarrito(nombrePelicula) {
//     const peliculaEncontrada = listaPeliculas.find(pelicula => pelicula.nombre === nombrePelicula);
//     if (peliculaEncontrada) {
//         if (!carrito.includes(peliculaEncontrada)) {
//             carrito.push(peliculaEncontrada);
//             console.log(`"${nombrePelicula}" ha sido agregada al carrito.`);
//         } else {
//             console.log("La película ya se encuentra en el carrito.");
//         }
//     } else {
//         console.log(`"${nombrePelicula}" no se encontró en la lista de películas.`);
//     }
// }

// function removerPeliculaDelCarrito(nombrePelicula) {
//     const peliculaEnCarrito = carrito.find(pelicula => pelicula.nombre === nombrePelicula);
//     if (peliculaEnCarrito) {
//         const index = carrito.indexOf(peliculaEnCarrito);
//         carrito.splice(index, 1);
//         alert(`"${nombrePelicula}" ha sido eliminada del carrito.`);

//         let mensaje = "Lista de películas actualizadas:\n";
//         console.log("Lista de películas actualizadas:");
//         for (let i = 0; i < carrito.length; i++) {
//             mensaje += `${i + 1}. ${carrito[i].nombre}\n`;
//             console.log(`${i + 1}. ${carrito[i].nombre}`);
//         }
//         return mensaje 
//     } else {
//         alert(`"${nombrePelicula}" no se encontró en el carrito.`);
//     }
// }

// while (true) {
//     const accion = prompt("¿Desea agregar una película (A) o eliminar una película (E) del carrito? Ingrese 'A' o 'E' (o cancele para salir)");

//     if (accion === null) {
//         break;
//     } else if (accion === 'A') {
//         const peliculaElegida = prompt("Ingrese el nombre de la película que desea agregar al carrito").toUpperCase();
//         agregarPeliculaAlCarrito(peliculaElegida);
//     } else if (accion === 'E') {
//         const peliculaAEliminar = prompt("Ingrese el nombre de la película que desea eliminar del carrito").toUpperCase();
//         removerPeliculaDelCarrito(peliculaAEliminar);
//     }
// }

// if (carrito.length > 0) {
//     let mensajeCarrito = "Esta es la lista de películas que eligió para comprar:\n";
//     carrito.forEach(pelicula => mensajeCarrito += pelicula.nombre + "\n");
//     alert(mensajeCarrito);
// } else {
//     alert("No ha agregado ninguna película al carrito.");
// }

// const carritoStr = JSON.stringify(carrito)

// localStorage.setItem("carrito", carritoStr)
//Corregir problema de que se reinicia el carrito cada vez que se actualiza la pagina






