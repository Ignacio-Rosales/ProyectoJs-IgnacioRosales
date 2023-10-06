
class ListaDeTareas {
    constructor(){
        this.tareas = []
    }

    agregarTarea(tarea){
        this.tareas.push(tarea)
    }

    eliminarTarea(indice){
        if(indice >= 0 && indice < this.tareas.length){
            this.tareas.splice(indice, 1)
        }
    }

    editarTarea(indice, nuevaTarea){
        if(indice >= 0 && indice < this.tareas.length){
            this.tareas[indice] = nuevaTarea
        }
    } 


    mostrarTarea(){
        console.log("Lista de tareas:")
        this.tareas.forEach((tarea, indice) => {
            console.log(`${indice + 1}. ${tarea}`)
        })
    }

}


class Tarea {
    constructor(titulo, descripcion, fechaVencimiento){
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.fechaVencimiento = fechaVencimiento,
        this.completada = false
    }

    marcarComoCompletada(){
        this.completada = true
    }

    editarTarea(titulo, descripcion, fechaVencimiento){
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.fechaVencimiento = fechaVencimiento
    }

    obtenerDescripcion(){
        return `Título: ${this.titulo}\nDescripción: ${this.descripcion}\nFecha de Vencimiento: ${this.fechaVencimiento}\nCompletada: ${this.completada ? 'Sí' : 'No'}`
    }

}

const tarea1 = new Tarea("Comprar viveres", "Ir al supermercado y comprar arroz", "2023-10-15")
const tarea2 = new Tarea("Comprar carne", "Ir al supermercado y comprar carne", "2023-10-15")
const tarea3 = new Tarea("Comprar lacteos", "Ir al supermercado y comprar leche", "2023-10-15")
tarea1.editarTarea("Comprar viveres", "Ir al supermercado y comprar fideos", "2023-10-15")
tarea1.marcarComoCompletada()


console.log(tarea1.obtenerDescripcion())


const lista = new ListaDeTareas()

lista.agregarTarea(tarea1.titulo)
lista.agregarTarea(tarea2.titulo)   

lista.mostrarTarea()

lista.editarTarea(0, tarea3.titulo)
lista.mostrarTarea()

lista.eliminarTarea(1)
lista.mostrarTarea()


























// alert("Algoritmo de verificar edad para entrar a una discoteca")


// function agregarLista(edad){
//     listaEdades.push(edad)
//     console.log(listaEdades)
// }

// const listaEdades = []
// agregarLista()

// let edad = parseInt(prompt("Ingrese su edad: "))


// while(edad != 0 && edad < 100 && edad !== "" && edad !== null){

//     if (edad < 18 ) {

//         alert("Usted no puede ingresar")

//     }else if( edad >= 18  && edad <= 21) {

//         alert("Usted puede ingresar a la discoteca pero no puede comprar bebidas alcoholicas")

//     }else{ 
//         alert("Usted puede ingresar a la discoteca y puede comprar bebidas alcoholicas")
//     }

//     edad = parseInt(prompt("Siguiente edad en la fila: "))

   
// }








