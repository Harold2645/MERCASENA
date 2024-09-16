document.addEventListener('DOMContentLoaded', () => {

    let nver = 0
    let ventana_ancho = window.innerWidth;
    let ventana_alto = window.innerHeight;

    if (ventana_ancho <= 393 && ventana_alto <=873){
        nver = 4
    }else if (ventana_ancho <= 1024 && ventana_alto <= 768 && ventana_ancho >= 873 && ventana_alto >=393){
        nver = 6
    }else{
        nver = 8
    }

    const productos = document.querySelectorAll('.cartas');
    const btnVermas = document.getElementById('ver_mas');
    const btnVermenos = document.getElementById('ver_menos');

    console.log(nver);

    if(productos.length <= nver){
        for (let i = 0; i < productos.length; i++) {
            document.getElementById(productos[i].id).style.display='flex';
        };

        btnVermas.style.display = 'none';
    }else{
        for (let i = 0; i < nver; i++) {
            document.getElementById(productos[i].id).style.display='flex';
        };
    }

    btnVermas.addEventListener('click', ()=>{
        for (let i = nver; i < productos.length; i++) {
            document.getElementById(productos[i].id).style.display='flex';
        }; 

        btnVermas.style.display = 'none';
        btnVermenos.style.display = 'block';
    });

    btnVermenos.addEventListener('click', ()=>{
        for (let i = nver; i < productos.length ; i++) {
            document.getElementById(productos[i].id).style.display='none';
        };

        btnVermenos.style.display = 'none';
        btnVermas.style.display = 'flex';
    });

});
