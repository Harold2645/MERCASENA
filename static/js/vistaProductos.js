document.addEventListener('DOMContentLoaded', () => {

    const productos = document.querySelectorAll('.cartas');
    const btnVermas = document.getElementById('ver_mas');
    const btnVermenos = document.getElementById('ver_menos');
    console.log(productos);

    for (let i = 0; i < 8; i++) {
        document.getElementById(productos[i].id).style.display='block';
    };

    btnVermas.addEventListener('click', ()=>{
        for (let i = 0; i < productos.length; i++) {
            document.getElementById(productos[i].id).style.display='block';
        };

        btnVermas.style.display = 'none';
        btnVermenos.style.display = 'block';
    });

    btnVermenos.addEventListener('click', ()=>{
        for (let i = 8; i < productos.length ; i++) {
            document.getElementById(productos[i].id).style.display='none';
        };

        btnVermenos.style.display = 'none';
        btnVermas.style.display = 'block';
    });

});