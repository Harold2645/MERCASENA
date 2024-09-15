// document.addEventListener('DOMContentLoaded', () => { 
    
//     const cuerpo1 = document.getElementById('cuerpo1');
//     const cuerpo2 = document.getElementById('cuerpo2');
//     const cuerpo3 = document.getElementById('cuerpo3');
//     const btn_vermas = document.getElementById('vermas');
//     const btn_vermenos = document.getElementById('vermenos');
//     const buscar = document.getElementById('buscar');


//     buscar.addEventListener('keyup', async (etiqueta)=>{

//         nombre = etiqueta.target.value || '';

//         if(nombre.length > 0){
            
//             const respuesta = await fetch('http://192.168.1.110:5080/buscarproducto', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(nombre),
                
//             });
//             const result = await respuesta.json();

//             if(result !=  'No existe'){

//                 cuerpo1.innerHTML = '';

//                 if(cuerpo2.classList.contains('visible')){
//                     cuerpo2.classList.remove('visible');
//                     cuerpo2.classList.add('oculto');
//                     btn_vermas.style.display = "none"

//                     if(cuerpo3.classList.contains('visible')){
//                         cuerpo3.classList.remove('visible');
//                         cuerpo3.classList.add('oculto');
//                         btn_vermenos.style.display = "none"
//                     }else{
//                         btn_vermenos.style.display = "none"
//                     }
                    
//                     cuerpo1.classList.remove('oculto');
//                     cuerpo1.classList.add('visible');
//                 }else{
//                     btn_vermas.style.display = "none"

//                     if(cuerpo3.classList.contains('visible')){
//                         cuerpo3.classList.remove('visible');
//                         cuerpo3.classList.add('oculto');
//                         btn_vermenos.style.display = "none"
//                     }else{
//                         btn_vermenos.style.display = "none"
//                     }
                    
//                     cuerpo1.classList.remove('oculto');
//                     cuerpo1.classList.add('visible');
//                 }

                
//                 result.forEach(producto => {
                    
//                     cuerpo1.innerHTML += `
//                         <div class="item">
//                             <p>${producto.nombre_producto}</p>
//                             <p>Emprendedor: ${producto.emprendedor_unidad}</p>
//                             <img width="200" src="uploads/${producto.imagen_producto}" alt="${producto.nombre_producto}">
//                             <p>${producto.presentacion_producto} x ${producto.precio_producto}</p>
//                             <input type="hidden" id="precio_${producto.codigo_unidad}" value="${producto.precio_producto}">
//                             <input type="hidden" id="stock_${producto.codigo_unidad}" value="${producto.cantidad_disponible}">  

//                             <div class="contenedor_cantidad">
//                                 <div class="cantidad">
//                                     <button id="resta_${producto.codigo_unidad}">-</button>
//                                     <input type="text" class="inputs_numeros" id="cantidad_${producto.codigo_unidad}" readonly value="0">
//                                     <button id="suma_${producto.codigo_unidad}">+</button>
//                                 </div>
//                                 $
//                                 <input type="text" class="inputs_numeros" id="subtotal_${producto.codigo_unidad}"  readonly value="0" >
//                             </div>
//                             <button id="carrito_${producto.codigo_unidad}" class="btn_carrito">Agregar al Carrito</button>
                            
//                         </div>
//                         `;
//                 });

//             }else{
//                 cuerpo1.innerHTML = '<p>No hay producto disponible</p>';
//                 if(cuerpo2.classList.contains('visible')){
//                     cuerpo2.classList.remove('visible');
//                     cuerpo2.classList.add('oculto');
//                     btn_vermas.style.display = "none"
    
//                     if(cuerpo3.classList.contains('visible')){
//                         cuerpo3.classList.remove('visible');
//                         cuerpo3.classList.add('oculto');
//                         btn_vermenos.style.display = "none"

//                     }else{
//                         btn_vermenos.style.display = "none"
//                     }
                    
//                     cuerpo1.classList.remove('oculto');
//                     cuerpo1.classList.add('visible');
//                 }else{
//                     btn_vermas.style.display = "none"
    
//                     if(cuerpo3.classList.contains('visible')){
//                         cuerpo3.classList.remove('visible');
//                         cuerpo3.classList.add('oculto');
//                         btn_vermenos.style.display = "none"

//                     }else{
//                         btn_vermenos.style.display = "none"
//                     }
                    
//                     cuerpo1.classList.remove('oculto');
//                     cuerpo1.classList.add('visible');
//                 }
//             }
//         }else{
//             cuerpo1.innerHTML = '';

//             if(cuerpo2.classList.contains('oculto')){
//                 cuerpo2.classList.remove('oculto');
//                 cuerpo2.classList.add('visible');
//                 btn_vermas.style.display = "block"

                
//                 cuerpo1.classList.remove('visible');
//                 cuerpo1.classList.add('oculto');
//             }
//         }

//     });

//     document.getElementById('vermas').addEventListener('click', ()=>{

//         if(cuerpo2.classList.contains('visible')){
//             cuerpo2.classList.remove('visible');
//             cuerpo2.classList.add('oculto');
//             btn_vermas.style.display = "none"
            
//             cuerpo3.classList.remove('oculto');
//             cuerpo3.classList.add('visible');
//             btn_vermenos.style.display = "block"
//         }
//     });
//     document.getElementById('vermenos').addEventListener('click', ()=>{

//         if(cuerpo3.classList.contains('visible')){
//             cuerpo3.classList.remove('visible');
//             cuerpo3.classList.add('oculto');
//             btn_vermenos.style.display = "none"
            
//             cuerpo2.classList.remove('oculto');
//             cuerpo2.classList.add('visible');
//             btn_vermas.style.display = "block"
//         }
//     })


// });