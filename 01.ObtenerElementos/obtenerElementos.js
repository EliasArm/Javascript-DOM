/* 
    .getElementById
    Nos permite obtener un elemento en base a su atributo id
*/
const contenedor1= document.getElementById('contenedor1');
console.log(contenedor1);

/* 
    .children
    Nos permite obtener los elementos hijo
*/
console.log(contenedor1.children);

/*
    .parentElement
    Nos permite obtener el elemento padre de un elemento
*/
console.log(contenedor1.parentElement);

/*
    .getElementByTagName
    Nos permite obtener una colección de elementos en base a la etiqueta.
    Nota: Devuelve una colección HTML. Una colección no es un arreglo.
*/
const divs = document.getElementsByTagName('div');
console.log(divs);
console.log(`El documento tiene ${divs.length} divs`);

/*
    .getElementsByClassName
    Nos permite obtene una colección de elementos en base a su clase CSS.
    Nota: Devuelve una coleeción HTML.
*/
const cajas = document.getElementsByClassName('caja');
console.log(cajas);

