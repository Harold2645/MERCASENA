document.addEventListener('DOMContentLoaded', () => {
    let codigo = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let largoCaracteres = caracteres.length;
    for ( let i = 0; i < 8; i++ ) {
        codigo += caracteres.charAt(Math.floor(Math.random() * largoCaracteres));
    
    };

    const carrito = {
        codigo: codigo,
        cliente: {correo: '', nombre: '', movil: ''},
        productos: [],
        total: 0
       
    };

    const btns_carrito = document.querySelectorAll('.btn_carrito');

    btns_carrito.forEach(btn=> {
        const codigoUnidad = btn.id.split('_')[1];
        const cantidadProducto = document.getElementById(`cantidad_${codigoUnidad}`);
        const subtotalProducto = document.getElementById(`subtotal_${codigoUnidad}`);
        const precioProducto = parseFloat(document.getElementById(`precio_${codigoUnidad}`).value);
        const stockProducto = parseInt(document.getElementById(`stock_${codigoUnidad}`).value);
        btn.addEventListener('click', () => {
            let nombre = document.getElementById(`nombre_${codigoUnidad}`).innerText;
            let cantidad = parseInt(cantidadProducto.value);
            let subtotal = (cantidad * precioProducto);
            if (cantidad > 0) {
                let producto_existe = false;
                for (i=0; i<carrito.productos.length; i++){
                    if(carrito.productos[i].codigo == codigoUnidad){
                        let cantidadTotal = carrito.productos[i].cantidad + cantidad;
                        if (cantidadTotal > stockProducto){
                            alert("No hay mas unidades disponibles");
                        }else{
                            carrito.productos[i].cantidad += cantidad;
                            carrito.productos[i].subtotal += subtotal;
                            carrito.total += subtotal;
                        }
                        
                        producto_existe = true;
                        break;
                    };
                };

                if(!producto_existe){
                    if(cantidad > stockProducto){
                        alert("No hay mas unidades disponibles")
                    }else{
                        carrito.productos.push({
                            codigo: codigoUnidad,
                            nombre: nombre,
                            precio: precioProducto,
                            cantidad: cantidad,
                            subtotal: subtotal
                        });
                        carrito.total += subtotal;
                    }
                }
                cantidadProducto.value = 1;
                subtotalProducto.value = precioProducto;
                console.log(carrito)
            } else {
                alert("Debe seleccionar al menos una cantidad mayor a 0");
            }
        });
    });


    function ver_carrito(){
        const carritoPrincipal = document.getElementById('carrito');
        const carritoContenido = document.getElementById('carritoContenido');
        const totalCarrito = document.getElementById('totalCarrito');
        const boton = document.getElementById('boton')

        carritoPrincipal.style.display = 'block';
        carritoContenido.innerHTML = '';
        boton.innerHTML = '';

        if(!carrito.productos.length > 0){
            carritoContenido.innerHTML = "<p>Aún no has agregado productos a tu carrito</p>";
            
        }else{
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

            const botonesEliminar = document.querySelectorAll('.eliminar');
            botonesEliminar.forEach(boton => {
                const codigoUnidad = boton.id;
                boton.addEventListener('click', () => {
                    for (let i= 0; i < carrito.productos.length; i++) {
                        if(carrito.productos[i].codigo == codigoUnidad){
                            carrito.total -= carrito.productos[i].subtotal;
                            carrito.productos.splice(i, 1);
                            break;
                        };
                    };
                    ver_carrito(); 
                });
            });

            boton.innerHTML = `<button id="confirmar_carrito">Confirmar Compra</button>`;

            const btnConfirmar = document.querySelector('#confirmar_carrito');
            btnConfirmar.addEventListener('click', ()=>{
                const formulario = document.getElementById('forma_registro')
                formulario.style.display = 'block';
            });
        }; 
        totalCarrito.innerText = `Total: $${carrito.total}`;
    };

    const abrirCarrito = document.querySelector('#abrir_carrito');
    abrirCarrito.addEventListener('click', ()=>{
        ver_carrito();
    });

});
