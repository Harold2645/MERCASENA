from conexion import *
from models.compras import compra
from models.clientes import cliente

@app.route('/registrarCompra', methods=['POST'])
def registrar_compra():
    carrito = request.get_json()
    if not cliente.consultar_cliente(carrito['cliente']['correo']):
        cliente.agregar_cliente(carrito['cliente'])
    compra.agregar_compra(carrito['codigo'], carrito['cliente']['correo'], carrito['productos'], carrito['total'])
    return "si sirve"