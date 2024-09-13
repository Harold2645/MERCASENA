document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelectorAll('.cartas');

    productos.forEach(producto => {
        const codigoUnidad = producto.querySelector('.inputs_numeros').id.split('_')[1];
        console.log(codigoUnidad)
        const inputCantidad = document.getElementById(`cantida_${codigoUnidad}`);
        const maxCantidad = document.getElementById(`cantidad_${codigoUnidad}`);
        const inputSubtotal = document.getElementById(`subtotal_${codigoUnidad}`);
        const btnSuma = document.getElementById(`suma_${codigoUnidad}`);
        const btnResta = document.getElementById(`resta_${codigoUnidad}`);
        const precio = parseFloat(document.getElementById(`precio_${codigoUnidad}`).value);

        btnSuma.addEventListener('click', () => {
            let cantidad = parseInt(inputCantidad.value);
            let maximacantidad = parseInt(maxCantidad.value);
            console.log(cantidad)
            console.log(maximacantidad)
            if(cantidad >= maximacantidad){
                alert("No hay mas unidades disponibles")
            }else{
                cantidad++;
                inputCantidad.value = cantidad;
                inputSubtotal.value = (cantidad * precio);
            }
        });

        btnResta.addEventListener('click', () => {
            let cantidad = parseInt(inputCantidad.value);
            if (cantidad > 0) {
                cantidad--;
                inputCantidad.value = cantidad;
                inputSubtotal.value = (cantidad * precio);
            }
        });
    });
});
