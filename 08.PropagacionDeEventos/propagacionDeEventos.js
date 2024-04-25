const contenedor = document.getElementById('contenedor1');
// console.log(contenedor1);
contenedor.addEventListener('click', (e) => {
    console.log('Hiciste click en el contenedor');
});

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    e.stopPropagation(); //  Detener la propagacion de eventos
    console.log('Hiciste click en la primera caja');
});