from conexion import *
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

@app.route('/enviocorreo')
def enviocorreo(resultado):
    # usuario = 'mercasenacab@outlook.com' 
    # contrasena = 'SENAMerca2024' 

    usuario = 'mercasena40@gmail.com' 
    contrasena = 'zcxq ujcd eomq ykxo' 

    destinatario = resultado[0][7]

    cuerpo = f"""
        <html>
        <body>
            SENA CAB | MercaSENA

            <p>Muchas gracias {resultado[0][8]}, se ha registrado tu compra de:</p>
            
            <ul>
                {''.join(f'<li>{pro[0]} - {pro[1]} - ${pro[10]}</li>' for pro in resultado)}
            </ul>

            <p>Total compra: ${ resultado[0][5] } COP</p>

            <p>Muchas gracias por tu apoyo</p>
            <p>SENA - MercaSENA 2024</p>
        </body>
        </html>
        """

    mensaje = MIMEMultipart()
    mensaje['From'] = usuario
    mensaje['To'] = destinatario
    mensaje['Subject'] = "SENA MERCASENA - Compras"

    mensaje.attach(MIMEText(cuerpo, 'html'))

    # smtp = smtplib.SMTP("smtp-mail.outlook.com", port=587)
    smtp = smtplib.SMTP('smtp.gmail.com', 587)
    smtp.starttls()
    smtp.login(usuario, contrasena)
    smtp.sendmail(usuario, destinatario, mensaje.as_string())
    smtp.quit()