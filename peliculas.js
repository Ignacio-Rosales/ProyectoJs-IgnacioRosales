class Pelicula {
    constructor(id, nombre, descripcion, duracion){
        this.id  = id,
        this.nombre = nombre.toUpperCase(),
        this.descripcion = descripcion.toUpperCase(),
        this.duracion = parseInt(duracion)
    }
}

class Serie extends Pelicula {
    constructor(id,nombre, descripcion, duracion, capitulos, temporadas){
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


const lista = []

const pelicula1 = new Pelicula(1,"Fight Club","Pelicula de un esquizofrenico", 120)
const pelicula2 = new Pelicula(2,"Codigo Enigma","Alan nigga", 160)
const pelicula3 = new Pelicula(3,"Buscando al soldado ryan","Guerra", 140)

const serie1 = new Serie(1,"Vikings", "Serie basada en nordicos", 40, 10 , 5)

const carrito = new Carrito()

carrito.agregarPelicula(pelicula1, lista)
carrito.agregarPelicula(pelicula2, lista)
carrito.agregarPelicula(pelicula3, lista)

console.log(carrito)

carrito.quitarPelicula(pelicula2, carrito)

console.log(carrito)

carrito.agregarPelicula(serie1, lista)

console.log(carrito)