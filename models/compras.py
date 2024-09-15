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
    
    
        


compra = Compras(db)