from flask import Flask, render_template, request, jsonify, send_from_directory,redirect
from flask_cors import CORS
import mysql.connector
import os
from datetime import datetime
import pytz


app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(host='localhost', port='3306',  user='root', password='', database='mercasena')
#db = mysql.connector.connect(host='localhost', port='3306',  user='arcano_operador', password='7Uxn)v5)wt26Op_f', database='mercasena')


app.config['CARPETAU'] = os.path.join('uploads')