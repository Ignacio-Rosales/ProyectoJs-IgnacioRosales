class Pelicula {
    constructor(id, nombre, descripcion, duracion){
        this.id  = id,
        this.nombre = nombre.toUpperCase(),
        this.descripcion = descripcion.toUpperCase(),
        this.duracion = parseInt(duracion)
    }
}

const pelicula1 = new Pelicula(1,"The Batman","Batman xd", 120)
const pelicula2 = new Pelicula(2,"Predator", "Bicho feo", 160)
const pelicula3 = new Pelicula(3,"La monja","monjita", 150)
const pelicula4 = new Pelicula(4,"Asesinos de la luna", "descripicon breve", 140)
const pelicula5 = new Pelicula(5,"Oppenheimer", "bombita", 185)


let listaPeliculas = [ pelicula1, pelicula2, pelicula3, pelicula4, pelicula5 ]

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

function mostrarListaPeliculas() {
    let mensaje = "Lista de películas disponibles:\n";
    console.log("Lista de películas disponibles:");
    for (let i = 0; i < listaPeliculas.length; i++) {
        mensaje += `${i + 1}. ${listaPeliculas[i].nombre}\n`;
        console.log(`${i + 1}. ${listaPeliculas[i].nombre}`);
    }
    return mensaje 
}

alert(mostrarListaPeliculas());

const carrito = [];

function agregarPeliculaAlCarrito(nombrePelicula) {
    const peliculaEncontrada = listaPeliculas.find(pelicula => pelicula.nombre === nombrePelicula);
    if (peliculaEncontrada) {
        if (!carrito.includes(peliculaEncontrada)) {
            carrito.push(peliculaEncontrada);
            console.log(`"${nombrePelicula}" ha sido agregada al carrito.`);
        } else {
            console.log("La película ya se encuentra en el carrito.");
        }
    } else {
        console.log(`"${nombrePelicula}" no se encontró en la lista de películas.`);
    }
}

function removerPeliculaDelCarrito(nombrePelicula) {
    const peliculaEnCarrito = carrito.find(pelicula => pelicula.nombre === nombrePelicula);
    if (peliculaEnCarrito) {
        const index = carrito.indexOf(peliculaEnCarrito);
        carrito.splice(index, 1);
        alert(`"${nombrePelicula}" ha sido eliminada del carrito.`);

        let mensaje = "Lista de películas actualizadas:\n";
        console.log("Lista de películas actualizadas:");
        for (let i = 0; i < carrito.length; i++) {
            mensaje += `${i + 1}. ${carrito[i].nombre}\n`;
            console.log(`${i + 1}. ${carrito[i].nombre}`);
        }
        return mensaje 
    } else {
        alert(`"${nombrePelicula}" no se encontró en el carrito.`);
    }
}

while (true) {
    const accion = prompt("¿Desea agregar una película (A) o eliminar una película (E) del carrito? Ingrese 'A' o 'E' (o cancele para salir)");

    if (accion === null) {
        break;
    } else if (accion === 'A') {
        const peliculaElegida = prompt("Ingrese el nombre de la película que desea agregar al carrito").toUpperCase();
        agregarPeliculaAlCarrito(peliculaElegida);
    } else if (accion === 'E') {
        const peliculaAEliminar = prompt("Ingrese el nombre de la película que desea eliminar del carrito").toUpperCase();
        removerPeliculaDelCarrito(peliculaAEliminar);
    }
}

if (carrito.length > 0) {
    let mensajeCarrito = "Esta es la lista de películas que eligió para comprar:\n";
    carrito.forEach(pelicula => mensajeCarrito += pelicula.nombre + "\n");
    alert(mensajeCarrito);
} else {
    alert("No ha agregado ninguna película al carrito.");
}


// const carrito = new Carrito()

// carrito.agregarPelicula(pelicula1, lista)
// carrito.agregarPelicula(pelicula2, lista)
// carrito.agregarPelicula(pelicula3, lista)

// console.log(carrito)

// carrito.quitarPelicula(pelicula2, carrito)

// console.log(carrito)

// carrito.agregarPelicula(serie1, lista)

// console.log(carrito)