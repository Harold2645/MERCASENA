from conexion import *
import random

class Compras:
    def __init__(self, db):
        self.db = db
        self.cursor = db.cursor()

    def agregar_compra(self, codigo, cliente, productos, total):
        ahora = datetime.now(pytz.timezone('America/Bogota'))
        for producto in productos:
            sql = f"INSERT INTO compras(codigo_carrito, correo_cliente, codigo_producto, cantidad, precio, total_carrito, fecha_registro) VALUES ('{codigo}', '{cliente}', '{producto['codigo']}', {producto['cantidad']}, {producto['precio']}, {total}, '{ahora}');"
            self.cursor.execute(sql)
            self.db.commit()
    
    def consulta_productos(self, codigo):
        sql = f"SELECT productos.nombre_producto, compras.cantidad, productos.precio_producto, productos.unidad_medida, compras.precio, compras.total_carrito, compras.fecha_registro, clientes.correo_cliente, clientes.nombre_cliente, clientes.movil_cliente, (compras.cantidad*compras.precio) as subtotal  FROM productos INNER JOIN compras ON compras.codigo_producto = productos.codigo_unidad INNER JOIN clientes ON clientes.correo_cliente = compras.correo_cliente WHERE compras.codigo_carrito = '{codigo}';"
        self.cursor.execute(sql)
        res = self.cursor.fetchall()
        return res
        


compra = Compras(db)