
const boton1 = document.getElementById('boton1');
primeraCaja = document.querySelector('.caja');

boton1.addEventListener('click', (e) => {
    // console.log(e);
    // primeraCaja.setAttribute('class', 'caja activa');
    primeraCaja.classList.toggle('activa');
});


const boton2 = document.getElementById('boton2');
ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');

boton2.addEventListener('click', (e) => {
    // console.log(e);
    ultimaCaja.classList.add('activa');
});

const terceraCaja = document.querySelector('#contenedor1 .caja:last-child');
terceraCaja.addEventListener('click', (e) => {
    console.log(e);
});

/*
    Agregando el evento a multiples elementos
    Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
    Nota: Esta no es la forma mas optima, en la proxima clase veremos la mejor forma.
*/

const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);
cajas.forEach((caja, i) => {
    caja.addEventListener('click', (e) => {
        console.log(`Hiciste click en la caja ${i+1}: ${e.target.innerHTML}`);
    });
});