from conexion import *
from models.productos import producto

@app.route('/')
def index():
    productos = producto.consultar_productos()
    if not productos:
        mensaje = "!Por el momento, no hay productos disponibles!"
        return render_template('index.html', mensaje=mensaje)
    else:
        return render_template('index.html', productos=productos)
    
@app.route("/uploads/<nombre>")
def uploads(nombre):
    return send_from_directory(app.config['CARPETAU'],nombre)
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
