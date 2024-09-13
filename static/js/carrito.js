document.addEventListener('DOMContentLoaded', () => {
    const carrito = {};

    const productos = document.querySelectorAll('.cartas');

    productos.forEach(producto => {
        const codigoUnidad = producto.querySelector('.inputs_numeros').id.split('_')[1];
        const inputCantidad = document.getElementById(`cantida_${codigoUnidad}`);
        const inputSubtotal = document.getElementById(`subtotal_${codigoUnidad}`);
        const btnCarrito = document.getElementById(`carrito_${codigoUnidad}`);

        btnCarrito.addEventListener('click', () => {
            let cantidad = parseInt(inputCantidad.value);
            if (cantidad > 0) {
                carrito[codigoUnidad] = {
                    nombre: document.getElementById(`nombre_${codigoUnidad}`).innerText,
                    cantidad: cantidad,
                    subtotal: parseFloat(inputSubtotal.value)
                };
                actualizarCarrito();
            } else {
                alert("Debe seleccionar al menos una cantidad mayor a 0");
            }
        });
    });

    function actualizarCarrito() {
        const carritoDiv = document.getElementById('carritoContenido');
        const totalDiv = document.getElementById('totalCarrito');
        carritoDiv.innerHTML = ''; 

        let total = 0;

        Object.keys(carrito).forEach(codigo => {
            const item = carrito[codigo];
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('carrito-item');
            itemDiv.innerHTML = `
                <p>${item.nombre}</p>
                <p>Cantidad: ${item.cantidad}</p>
                <p>Subtotal: $${item.subtotal}</p>
                <button class="eliminar" data-codigo="${codigo}">Eliminar</button>
            `;
            carritoDiv.appendChild(itemDiv);

            total += item.subtotal;
        });

        totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;

        const botonesEliminar = document.querySelectorAll('.eliminar');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const codigoEliminar = e.target.getAttribute('data-codigo');
                delete carrito[codigoEliminar];
                actualizarCarrito(); 
            });
        });
    }
});
