/*
    elemento.innerHTML
    Nos permite cambiar el contenido de un elemento
*/
const primeraCaja = document.querySelector('.caja');
console.log(primeraCaja);
console.log(primeraCaja.innerHTML);
primeraCaja.innerHTML = '<b>Hola!</b>';

/*
    elemento.attribute
    Nos permite acceder y cambiar atributos del elemento .
*/
primeraCaja.id = 'nuevo-id';

/*
    elemento.setAttribute()
    Nos permite agregar o establecer el valor de un atributo del elemento
    - 1er parametro - el atributto a cambiar, agregar
    - 2do parametro - el nuevo valor del atributo
*/
primeraCaja.setAttribute('class', 'caja activa');

// Atributos personalizados, de usa la palabra "data-"
primeraCaja.setAttribute('data-id', '123-456-789');

/*
    elemento.style.property
    Nos permite cambiar los estilos css de un elemento
*/

// const contenedor2 = document.getElementById('contenedor2');
// console.log(contenedor2);
// const primeraCajaContenedor2 = contenedor2.querySelector('.caja');
// console.log(primeraCajaContenedor2);

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja')
console.log(contenedor2Caja1);
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase';

