from conexion import *

class Clientes:
    def __init__(self, db):
        self.db = db
        self.cursor = db.cursor()

    def consultar_cliente(self, correo):
        sql = f"SELECT nombre_cliente FROM clientes WHERE correo_cliente = '{correo}';"
        self.cursor.execute(sql)
        resultados = self.cursor.fetchall()
        if not len(resultados) > 0:
            return False
        else:
            return True
        
    def agregar_cliente(self, cliente):
        ahora = datetime.now(pytz.timezone('America/Bogota'))
        sql = f"INSERT INTO clientes(correo_cliente, nombre_cliente, movil_cliente, fecha_registro) VALUES('{cliente['correo']}', '{cliente['nombre']}', '{cliente['movil']}', '{ahora}');"
        self.cursor.execute(sql)
        self.db.commit()

cliente = Clientes(db)