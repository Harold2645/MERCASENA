from conexion import *
from models.productos import producto
from routes.compras import *

@app.route('/')
def index():
    productos = producto.consultar_productos()
    if not productos:
        mensaje = "!Por el momento, no hay productos disponibles!"
        return render_template('index.html', mensaje=mensaje)
    else:
        return render_template('index.html', productos=productos)
    
@app.route('/catego/<cate>')
def catego(cate):
    productos = producto.consultar_productos_busqueda_categoria(cate)
    if not productos:
        mensaje = "!Por el momento, no hay productos disponibles!"
        return render_template('index.html', mensaje=mensaje)
    else:
        return render_template('index.html', productos=productos)
    
@app.route("/uploads/<nombre>")
def uploads(nombre):
    return send_from_directory(app.config['CARPETAU'],nombre)
    

@app.route('/confirmacion')
def confirmacion():        
    return render_template('confirmacion.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port="4242")
