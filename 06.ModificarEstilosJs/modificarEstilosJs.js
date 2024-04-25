/*
    Modificar estilos CSS mediante "inline styles"
    .style.propiedadDeCSS
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';


const primeraCaja = document.querySelector('#contenedor1 .caja');
let tamaño = 24;
const aumentarFuente = () => {
   primeraCaja.style.fontSize = `${tamaño + 1}px`;
   tamaño++;
};

const disminuirFuente = () => {
    primeraCaja.style.fontSize =`${tamaño - 1}px`;
    tamaño--;
};

const cajas = document.querySelectorAll('.contenedor .caja');
const aumentarFuenteCajas = () => {
    cajas.forEach((caja) => {
        caja.style.fontSize = '50px';
    }); 
    tamaño = 50;
};