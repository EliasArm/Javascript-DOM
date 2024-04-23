/*
    Modificar estilos CSS mediante clases
*/

const primeraCaja = document.querySelector('#contenedor1 .caja');
// .classList - Muestra las clases que tiene el elemento
console.log(primeraCaja.classList);

// classList.add() - Nos permite agregar clases a un elemento
const agregarClase = () => {
    primeraCaja.classList.add('activa');
};

//  classList.remove() - Nos permite revomer clases a un elemento
const eliminarClase = () => {
    primeraCaja.classList.remove('activa');
};

//  classList.toggle() - Nos permite alternar clases de un elemento
const toggleClase = () => {
    primeraCaja.classList.toggle('activa');
}

//  classList.contains() - Nos permite comprobar si el elemento contiene una clase
const comprobarClase = () => {
    const comprobarClase = primeraCaja.classList.contains('activa');
    if(comprobarClase){
        console.log('La primera caja tiene la clase "activa"');
    } else{
        console.log('La primera caja no tiene la clase "activa"');
    }
    
}

const totalClases = () => {
    console.log(`La primera caja tiene las siguientes clases:`);

    primeraCaja.classList.forEach((clase) => {
        console.log(clase)
    });
}