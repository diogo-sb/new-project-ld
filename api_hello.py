from flask import Flask,jsonify,abort, Response
import MySQLdb
import json
from flask import Flask, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)
#db = MySQLdb.connect("localhost", "root", "project123", "projeto")
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'project123'
app.config['MYSQL_DB'] = 'projeto'
mysql = MySQL(app)

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

