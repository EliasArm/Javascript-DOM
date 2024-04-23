const agregarCaja = () => {
    //  1. Creamos el elemento 
    //  .createElement() - Recibe como parametro una cadena de texto con la etiqueta que queremos crear
    const nuevaCaja = document.createElement('div');
    
    //  2. Agregamos texto y atributos
    nuevaCaja.innerText = 'Nueva caja';
    nuevaCaja.setAttribute('class', 'caja activa');
    
    //  3. Identificamos el elemento padre donde se agregara el nuevo elemento
    const contenedor1 = document.getElementById('contenedor1');

    //  4. Agregamos el elemento al DOM
    //  .appendChild() - Agrega un elemento al final
    contenedor1.appendChild(nuevaCaja);

    console.log(contenedor1);
    console.log(nuevaCaja);
}

/** 
 *  .insertAdjacentElement() - Nos permite agregar un elemento
 *  Valores: 
 *      - afterbegin - como primer elemento
 *      -beforebegin - antes del elemento padre
 *      -beforeend - como ultimo elemento 
 *      -afterend - despues del elemento padre
*/

const agregarCaja2 = () => {
    const nuevaCaja = document.createElement('div');
    nuevaCaja.innerHTML = '<b>Nueva caja</b>';
    nuevaCaja.setAttribute('class', 'caja activa');
    const contenedor1 = document.getElementById('contenedor1');
    contenedor1.insertAdjacentElement('afterbegin', nuevaCaja);
}

// .replaceWith() - Nos permite reemplazar el elemento por otro
const cajaReemplazar = () => {
    const nuevaCaja = document.createElement('div');
    nuevaCaja.innerHTML = '<h5>Caja</h5>';
    nuevaCaja.setAttribute('class', 'caja activa');
    const caja = document.querySelector('#contenedor1 .caja');
    caja.replaceWith(nuevaCaja);
}