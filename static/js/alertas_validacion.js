document.addEventListener('DOMContentLoaded', function () {
    const botonesAgregar = document.querySelectorAll('.btn_carrito');

    botonesAgregar.forEach(function (boton) {
        boton.addEventListener('click', function (event) {
            const productoId = boton.id.split('_')[1]; 
 
            Swal.fire({
                title: '¡Producto agregado!',
                text: "El producto ha sido agregado al carrito con éxito.",
                icon: 'success',
                confirmButtonText: 'Aceptar',
                customClass: {
                    confirmButton: 'mi-boton-confirmar' 
                },
                buttonsStyling: false 
            });
      
        });
    });
});
