from conexion import *
from models.compras import compra
from models.clientes import cliente
from models.productos import producto

@app.route('/registrarCompra', methods=['POST'])
def registrar_compra():
    carrito = request.get_json()
    print(carrito)
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
        else:
            productosno.append(produc)
    if productosno:
        return jsonify(productosno)
    
    return jsonify({'Respuesta': "Te llegara un Correo"})


    
    # compra.agregar_compra(carrito['codigo'], carrito['cliente']['correo'], carrito['productos'], carrito['total'])
    # return "Sirvio"





    # return redirect (f"/enviocorreo/{carrito['codigo']}") 