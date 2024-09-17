document.addEventListener('DOMContentLoaded', ()=>{
    const cartaProductos = document.querySelectorAll('.cartas');
    const buscar = document.getElementById('buscar');
    const btnVermas = document.getElementById('ver_mas');
    const btnVermenos = document.getElementById('ver_menos');
    const errorProucto = document.getElementById('error_producto');
    let productos = [];
    let nver = 0;

    function resolucion(){
        let ventana_ancho = window.innerWidth;
        let ventana_alto = window.innerHeight;
        
        if (ventana_ancho <= 393 && ventana_alto <=873){
            nver = 4;
        }else if (ventana_ancho <= 1024 && ventana_alto <= 768 && ventana_ancho >= 873 && ventana_alto >=393){
            nver = 6;
        }else{
            nver = 8;
        };
    };

    function mostrarProductos(){
        if(cartaProductos.length <= nver){
            for (let i = 0; i < cartaProductos.length; i++) {
                document.getElementById(cartaProductos[i].id).style.display='flex';
            };
            btnVermas.style.display = 'none';
        }else{
            btnVermas.style.display = 'block';
            for (let i = 0; i < nver; i++) {
                document.getElementById(cartaProductos[i].id).style.display='flex';
            };
        };
    
    };

    resolucion();
    mostrarProductos();


    btnVermas.addEventListener('click', ()=>{
        for (let i = nver; i < cartaProductos.length; i++) {
            document.getElementById(cartaProductos[i].id).style.display='flex';
        }; 

        btnVermas.style.display = 'none';
        btnVermenos.style.display = 'flex';
    });

    btnVermenos.addEventListener('click', ()=>{
        for (let i = nver; i < cartaProductos.length ; i++) {
            document.getElementById(cartaProductos[i].id).style.display='none';
        };

        btnVermenos.style.display = 'none';
        btnVermas.style.display = 'flex';
    });

    cartaProductos.forEach(carta => {
        let codigoUnidad = carta.id.split('_')[1]
        let nombreProducto = document.getElementById(`nombre_${codigoUnidad}`).textContent.toLocaleLowerCase();
        productos.push({
            codigo: codigoUnidad,
            nombre: nombreProducto
        });
    });


    function buscarProducto(palabra){
        if(palabra != ''){

            let productoExiste = false;

            btnVermas.style.display='none';
            btnVermenos.style.display='none';
            errorProucto.style.display='none';

            cartaProductos.forEach(carta => {
                document.getElementById(carta.id).style.display='none';
            });

            productos.forEach(producto => {
                let nombreRecortado = producto.nombre.slice(0, palabra.length);
                if (nombreRecortado == palabra){
                    document.getElementById(`carta_${producto.codigo}`).style.display='flex';
                    productoExiste = true;
                }
            });

            if(!productoExiste){
                errorProucto.style.display='block';
            }

            
        }else{
            errorProucto.style.display='none';

            cartaProductos.forEach(carta => {
                document.getElementById(carta.id).style.display='none';
            });

            mostrarProductos();
        };
    };
    

    buscar.addEventListener('keyup', ()=>{
        let producto = buscar.value.toLocaleLowerCase().trim();
        buscarProducto(producto);
    });
});

/* <h2 id="error_producto" style="display: none;">No se ha encontrado el producto especificado</h2> */
