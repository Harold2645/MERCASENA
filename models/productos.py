from conexion import *

class Productos:
    def __init__(self, db):
        self.db = db
        self.cursor = db.cursor()

    def consultar_productos(self):
            sql = f"SELECT productos.codigo_unidad, nombre_producto, emprendedor_unidad, precio_producto, presentacion_producto, cantidad_disponible, imagen_producto FROM productos INNER JOIN emprendedores ON productos.codigo_unidad = emprendedores.codigo_unidad WHERE cantidad_disponible > 0 ORDER BY nombre_producto;"

            self.cursor.execute(sql)
            resultados = self.cursor.fetchall()
            nombres_columnas = [column[0] for column in self.cursor.description]

            if not len(resultados) > 0:
                return False
            else:
                return [dict(zip(nombres_columnas, resultado)) for resultado in resultados]
            
    def consultar_productos_busqueda(self, nombre):
            sql = f"SELECT productos.codigo_unidad, nombre_producto, emprendedor_unidad, precio_producto, presentacion_producto, cantidad_disponible, imagen_producto FROM productos INNER JOIN emprendedores ON productos.codigo_unidad = emprendedores.codigo_unidad WHERE cantidad_disponible > 0 AND productos.nombre_producto LIKE '%{nombre}%'  ORDER BY nombre_producto;"

            self.cursor.execute(sql)
            resultados = self.cursor.fetchall()
            nombres_columnas = [column[0] for column in self.cursor.description]

            if not len(resultados) > 0:
                return False
            else:
                return [dict(zip(nombres_columnas, resultado)) for resultado in resultados]
            
    def consulta_cantidad(self, cantidad):
        sql = f"SELECT codigo_unidad, nombre_producto, cantidad_disponible FROM productos WHERE codigo_unidad = '{cantidad}'"
        self.cursor.execute(sql)
        res = self.cursor.fetchone()
        return res
    
    def restar_cantidad(self, codigo):
        sql = f"UPDATE productos SET cantidad_disponible = {codigo[1]} WHERE codigo_unidad = '{codigo[0]}'"
        self.cursor.execute(sql)
        self.db.commit()

producto = Productos(db)