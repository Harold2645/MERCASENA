from conexion import *
from models.compras import compra
from models.clientes import cliente
from models.productos import producto
from routes.correo import *

@app.route('/registrarCompra', methods=['POST'])
def registrar_compra():
    carrito = request.get_json()
    productosi = []
    productosno = []
    total = 0

    if not cliente.consultar_cliente(carrito['cliente']['correo']):
        cliente.agregar_cliente(carrito['cliente'])
    for produc in carrito['productos']:
        cantidad = producto.consulta_cantidad(produc['codigo'])
        if cantidad[2] >= produc['cantidad']:
            resta = cantidad[2] - produc['cantidad']
            codigo = produc['codigo']
            info = [codigo, resta]
            producto.restar_cantidad(info)
            productosi.append(produc)
            total = total + produc['subtotal']
        else:
            productosno.append(produc)

    compra.agregar_compra(carrito['codigo'], carrito['cliente']['correo'], productosi, total)
    resul = compra.consulta_productos(carrito['codigo'])
    enviocorreo(resul)
    
    if productosno:
        return jsonify(productosno)
    

    return jsonify({'Respuesta': "Te llegara un Correo"})
    # return redirect (f"/envio/{carrito['codigo']}") 


    
@app.route('/envio/<codigo>')
def envio(codigo):
    resul = compra.consulta_productos(codigo)
    return render_template('correo.html', productos = resul)



