const eliminarCaja = () => {

    //  Para eliminar elementos primero identificamos al elemento padre
    const contenedorPadre = document.getElementById('contenedor1');

    //  Referencia del elemento a eliminar
    const cajaEliminar = contenedorPadre.querySelector('.caja');

    if(cajaEliminar){
        // Eliminar elemento hijo - .removeChild()
        contenedorPadre.removeChild(cajaEliminar);
    } else {
        console.log('No hay cajas para elminar');
    }
}

const eliminarCaja2 = () => {
    const contenedorPadre = document.getElementById('contenedor2');
    const cajaEliminar = document.querySelector('#contenedor2 .caja');
    if(cajaEliminar){
        contenedorPadre.removeChild(cajaEliminar);
    } else {
        console.log('No hay cajas para elminar');
    }
}

const eliminarContenedor = () => {
    const contenedorPadre = document.querySelector('.contenedor-principal');
    const contenedorEliminar = document.getElementById('contenedor2');
    if(contenedorEliminar){
        contenedorPadre.removeChild(contenedorEliminar);
    } else {
        console.log('No hay contenedores a eliminar');
    }
} 