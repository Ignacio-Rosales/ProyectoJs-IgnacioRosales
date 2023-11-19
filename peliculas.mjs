class Pelicula {
    constructor(id, imagenUrl, nombre, descripcion, duracion){
        this.id  = id,
        this.imagenUrl = imagenUrl,
        this.nombre = nombre.toUpperCase(),
        this.descripcion = descripcion,
        this.duracion = parseInt(duracion)
    }
}

let listaPeliculas = []

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



function agregarPeliculaAlDom(pelicula){
    
    const div_img = document.createElement("div")
    div_img.className = "contenedor_img"
    div_img.innerHTML = `
      <img src="${pelicula.imagenUrl}">
      <h3>${pelicula.nombre}</h3>
      <p>${pelicula.descripcion}</p>
      <button class="btn-comprar" data-text="Agregar al carrito">Agregar al carrito</button>
      `
    contenedor.appendChild(div_img)
      
}

// function actualizarContador(event) {
//     // const contador = document.getElementById("contador")
//     const boton = event.target
//     const textoOriginal = boton.getAttribute("data-text")
  
//     if (boton.textContent === "Quitar del carrito") {
//       boton.textContent = textoOriginal
//       contador.innerText = parseInt(contador.innerText) - 1
//     } else {
//       boton.textContent = "Quitar del carrito"
//       contador.innerText = parseInt(contador.innerText) + 1
//     }
  
//     // Guardar el valor de los botones en el LocalStorage
//     const botonesAgregar = document.querySelectorAll(".btn-comprar")
//     const botonesText = Array.from(botonesAgregar).map((boton) => boton.textContent)
//     localStorage.setItem("botones", JSON.stringify(botonesText))
  
//     // Guardar el valor actual del contador en el LocalStorage
//     localStorage.setItem("contador", contador.innerText)
//   }

function actualizarContador(event) {
    const boton = event.target;
    const textoOriginal = boton.getAttribute("data-text");

    Swal.fire({
        title: 'Confirmación',
        text: `¿Deseas ${boton.textContent.toLowerCase()} esta película al carrito?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            if (boton.textContent === "Quitar del carrito") {
                boton.textContent = textoOriginal;
                contador.innerText = parseInt(contador.innerText) - 1;
            } else {
                boton.textContent = "Quitar del carrito";
                contador.innerText = parseInt(contador.innerText) + 1;
            }

            // Resto del código para guardar en localStorage
            const botonesAgregar = document.querySelectorAll(".btn-comprar");
            const botonesText = Array.from(botonesAgregar).map((boton) => boton.textContent);
            localStorage.setItem("botones", JSON.stringify(botonesText));

            localStorage.setItem("contador", contador.innerText);
        }
    });
}

fetch('peliculas.json')
    .then(response => response.json())
    .then(data => {
        const peliculasDesdeJSON = data.map(pelicula => new Pelicula(
            pelicula.id,
            pelicula.imagenUrl,
            pelicula.nombre,
            pelicula.descripcion,
            pelicula.duracion
          ))

          for (let pelicula of peliculasDesdeJSON){
            agregarPeliculaAlDom(pelicula)
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

            // Recuperar el valor del contador almacenado en el localStorage si existe
            const contadorStorage = localStorage.getItem("contador")
            if (contadorStorage) {
            contador.innerText = contadorStorage
            }
    })
    .catch(error => console.log('Error al cargar datos:', error))












