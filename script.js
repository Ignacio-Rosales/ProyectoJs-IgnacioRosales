
alert("Algoritmo de verificar edad para entrar a una discoteca")


let edad = parseInt(prompt("Ingrese su edad: "))


while(edad != 0 && edad < 100 && edad !== "" && edad !== null){

    if (edad < 18 ) {

        alert("Usted no puede ingresar")

    }else if( edad >= 18  && edad <= 21) {

        alert("Usted puede ingresar a la discoteca pero no puede comprar bebidas alcoholicas")

    }else{ 
        alert("Usted puede ingresar a la discoteca y puede comprar bebidas alcoholicas")
    }

    edad = parseInt(prompt("Siguiente edad en la fila: "))

   
}







