document.addEventListener('DOMContentLoaded', () => { 

    document.addEventListener('keyup', async (etiqueta)=>{

        nombre = etiqueta.target.value
        console.log(nombre)

        const respuesta = await fetch('http://192.168.0.8:5080/buscarproducto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nombre),
            
        });
        const result = await respuesta.json();
        console.log("Respuesta:", result)


    })


});