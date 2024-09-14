document.addEventListener('DOMContentLoaded', () => {
    const carrito = {
        cliente: {correo: '', nombre: '', movil: ''},
        productos: [],
        total: 0
       
    };

    const btns_carrito = document.querySelectorAll('.btn_carrito');

    btns_carrito.forEach(btn=> {
        btn.addEventListener('click', () => {
            const codigoUnidad = btn.id.split('_')[1];
            let nombre = document.getElementById(`nombre_${codigoUnidad}`).innerText
            let cantidad = parseInt(document.getElementById(`cantidad_${codigoUnidad}`).value)
            let subtotal = parseInt(document.getElementById(`subtotal_${codigoUnidad}`).value)
            if (cantidad > 0) {
                let producto_existe = false;
                carrito.productos.forEach(producto => {
                    if(producto.codigo == codigoUnidad){
                        producto.cantidad += cantidad;
                        producto.subtotal += subtotal;
                        carrito.total += subtotal;
                        producto_existe = true;
                    };
                });
                if(!producto_existe){
                    carrito.productos.push({
                        codigo: codigoUnidad,
                        nombre: nombre,
                        cantidad: cantidad,
                        subtotal: subtotal
                    });
                    carrito.total += subtotal;
                }
                document.getElementById(`cantidad_${codigoUnidad}`).value = 0;
                document.getElementById(`subtotal_${codigoUnidad}`).value = 0;
                console.log(carrito)
                ver_carrito()
            } else {
                alert("Debe seleccionar al menos una cantidad mayor a 0");
            }
        });
    });

    function ver_carrito(){
        const carritoPrincipal = document.getElementById('carrito');
        const carritoContenido = document.getElementById('carritoContenido');
        const totalCarrito = document.getElementById('totalCarrito');

        carritoPrincipal.style.display = 'block';

        carritoContenido.innerHTML = '';

        carrito.productos.forEach(producto => {
           
            carritoContenido.innerHTML += `
                <div class="item">
                    <p>${producto.nombre}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Subtotal: $${producto.subtotal}</p>
                    <button class="eliminar" id="${producto.codigo}">Eliminar</button>
                </div>
                `;
        });

        totalCarrito.innerHTML = `<h3>Total: $${carrito.total}</h3>`;

        const botonesEliminar = document.querySelectorAll('.eliminar');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', () => {
                const codigoUnidad = boton.id;
                for (let i= 0; i < carrito.productos.length; i++) {
                    if(carrito.productos[i].codigo == codigoUnidad){
                        carrito.total -= carrito.productos[i].subtotal;
                        carrito.productos.splice(i, 1);
                        break;
                    }
                }
                ver_carrito(); 
            });
        });
    }
    
});
