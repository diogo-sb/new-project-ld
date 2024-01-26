import mysql.connector

#conexao com o banco
db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="projeto"
)

#select no banco
cursor = db.cursor()
cursor.execute("SELECT * FROM POSTS")
result = cursor.fetchall()

#vendo os resultados
for x in result:
    print(x)
