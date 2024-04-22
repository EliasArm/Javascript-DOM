/*
    .querySelector()
    Nos devuelve el primer elemento que coincida con un selector estilo CSS.
    Nota: Devuelve un nodelist.
*/
console.log(' --- .querySelector() ---')
const contenedor = document.querySelector('#contenedor1');
console.log(contenedor);

const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja);

/*
    .querySelectorAll()
    Nos permite obtener una colección de elementos en base a un selector estilo CSS.
    Nota: Devuelve un nodelist.
*/
console.log(' --- querySelectorAll() --- ');
const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);

cajas.forEach((caja) => {
    console.log(caja);
});

/*
    .closest()
    Nos permite buscar de adentro hacia afuera en busca de un elemento.
*/
console.log(' --- .closest() --- ');
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);

const contenedorPrincipal = ultimaCaja.closest('.contenedor-principal');
console.log(contenedorPrincipal);

/*
    Podemos encadenar todos los metodos para obtener elementos
*/
console.log(' --- Metodos encadenados --- ');

// const contenedor2 = document.querySelector('#contenedor2');
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2);
cajaDeContenedor2 = contenedor2.querySelector('.caja');
console.log(cajaDeContenedor2);
