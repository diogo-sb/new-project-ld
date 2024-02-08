from flask import Flask,jsonify,abort, Response
import MySQLdb
import json
from flask import Flask, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS



app = Flask(__name__)
#db = MySQLdb.connect("localhost", "root", "project123", "projeto")
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '159357'
app.config['MYSQL_DB'] = 'projeto'
mysql = MySQL(app)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/data', methods=['GET'])
def get_data():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM posts''')
    data = cur.fetchall()
    cur.close()

    formatted_data = []
    for i in data:
        formatted_data.append({
            'usuario': i[1],
            'id': i[0],
            'post': i[2],
            'dat': i[3].strftime('%a, %d %b %Y %H:%M:%S GMT')
        }) 

    return jsonify(formatted_data)

if __name__ == '__main__':
    app.run(debug=True)

