document.addEventListener('DOMContentLoaded', () => { 
    
    const cuerpo1 = document.getElementById('cuerpo1');
    const cuerpo2 = document.getElementById('cuerpo2');
    const btn_vermas = document.getElementById('ver_mas');
    const buscar = document.getElementById('buscar');


    buscar.addEventListener('keyup', async (etiqueta)=>{

        nombre = etiqueta.target.value || '';

        if(nombre.length > 0){
            
            const respuesta = await fetch('http://192.168.0.8:5080/buscarproducto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nombre),
                
            });
            const result = await respuesta.json();

            if(result !=  'No existe'){

                cuerpo2.innerHTML = '';

                if(cuerpo1.classList.contains('visible')){
                    cuerpo1.style.display = "none"
                    btn_vermas.style.display = "none"
                    
                    cuerpo2.style.display = "grid"
                }else{
                    cuerpo1.style.display = "grid"
                }

                
                result.forEach(producto => {
                    
                    cuerpo2.innerHTML += `
                    <div id="carta_${producto.codigo_unidad}" class="cartas2">
                            <h2 id="nombre_${producto.codigo_unidad}">${producto.nombre_producto}</h2>
                            <figure id="cont_img">
                                <img src="uploads/${producto.imagen_producto}" alt="${producto.nombre_producto}"  class="img_bd" id="img_${producto.codigo_unidad}">
                            </figure>

                            <div id="cont_info">
                                <p>Emprendedor: ${producto.emprendedor_unidad}</p>
                                <p>${producto.presentacion_producto} x <span>${producto.precio_producto}</span></p>
                            </div>

                            <input type="hidden" id="precio_${producto.codigo_unidad}" value="${producto.precio_producto}">
                            <input type="hidden" id="stock_${producto.codigo_unidad}" value="${producto.cantidad_disponible}">  

                            <div class="contenedor_cantidad">
                                <div class="cantidad">
                                    <button id="resta_${producto.codigo_unidad}" class="menos"><i class="lni lni-minus"></i></button>
                                    
                                    <input type="text" class="inputs" id="cantidad_${producto.codigo_unidad}" readonly value="1">
                                    <button id="suma_${producto.codigo_unidad}" class="mas"><i class="lni lni-plus"></i></button>
                                </div>

                                <div id="cont_subtotal">
                                    <i class="lni lni-dollar"></i>
                                    <input type="text" class="inputs_numeros" id="subtotal_${producto.codigo_unidad}"  readonly value="${producto.precio_producto}">
                                </div>

                            </div>
                            <button id="carrito_${producto.codigo_unidad}" class="btn_carrito">Agregar al Carrito</button>
                            
                    </div>
                        `;
                        
                });

            }else{
                cuerpo1.innerHTML = '<p>No hay producto disponible</p>';
                if(cuerpo1.classList.contains('visible')){
                    cuerpo2.style.display = "none"
                    btn_vermas.style.display = "none"
                    
                    cuerpo1.style.display = "grid"
                }else{
                    btn_vermas.style.display = "none"
                    
                    cuerpo1.style.display = "grid"
                }
            }
        }else{
            cuerpo2.innerHTML = '';

            if(cuerpo1.style.display = "none"){
                cuerpo1.style.display = "grid"
                btn_vermas.style.display = "block"

                cuerpo2.style.display = "none"
            }
        }

    });

});