document.addEventListener('DOMContentLoaded', () => {

    cantidad()

});

function cantidad(){
    const productosVisibles = document.querySelectorAll('.visible .cartas'); 

    productosVisibles.forEach(producto => {
        const codigoUnidad = producto.querySelector('.inputs_numeros').id.split('_')[1];
        const inputCantidad = document.getElementById(`cantidad_${codigoUnidad}`);
        const maxCantidad = document.getElementById(`stock_${codigoUnidad}`);
        const inputSubtotal = document.getElementById(`subtotal_${codigoUnidad}`);
        const btnSuma = document.getElementById(`suma_${codigoUnidad}`);
        const btnResta = document.getElementById(`resta_${codigoUnidad}`);
        const precio = parseFloat(document.getElementById(`precio_${codigoUnidad}`).value);

        btnSuma.addEventListener('click', () => {
            let cantidad = parseInt(inputCantidad.value);
            let maximaCantidad = parseInt(maxCantidad.value);

            if (cantidad >= maximaCantidad) {
                alert("No hay más unidades disponibles");
            } else {
                cantidad++; 
                inputCantidad.value = cantidad;
                inputSubtotal.value = (cantidad * precio);
            }
        });

        btnResta.addEventListener('click', () => {
            let cantidad = parseInt(inputCantidad.value);
            if (cantidad > 1) {
                cantidad--; 
                inputCantidad.value = cantidad;
                inputSubtotal.value = (cantidad * precio); 
            }
        });
    });
}