/*
    NOTA: Solo en el contenedor o elemento que propaga el evento 

    Bubbling (false, por defecto)
    En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.
    
    Capturing
    En capturing el elemento padre reacciona primero y despues el elemento hijo. 
*/

const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
    console.log('Hiciste click en el contenedor 1');
});

const caja = document.querySelector('.caja');
caja.addEventListener('click', (e) => {
    console.log('Hiciste click en la primera caja')
});