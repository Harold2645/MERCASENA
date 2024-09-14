document.addEventListener('DOMContentLoaded', function(){
    ventana()
    const nav = document.querySelector("#carrito");
    const abrir = document.getElementById("abrir");
    const cerrar = document.querySelector("#cerrar")
    const notscroll = document.querySelector('body')

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    if(nav.className = "visible"){
        notscroll.style.overflow = "hidden"
    }
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    nav.classList.add("remove")

    if(nav.className = "remove"){
        notscroll.style.overflow = "visible"
    }
})

function ventana (){
    let ventana_ancho = window.innerWidth;
    let ventana_alto = window.innerHeight;

    if (ventana_ancho >= 1024 && ventana_alto >= 768) {
        return 8
    }else if (ventana_ancho <= 1024 && ventana_alto <= 768) {
        return 4
    }

}

})