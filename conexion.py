from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
import mysql.connector
import os


app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(host='localhost', port='3306',  user='root', password='', database='mercasena')

app.config['CARPETAU'] = os.path.join('uploads')