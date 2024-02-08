import mysql.connector

#conexao com o banco
db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="projeto"
    #uth_plugin='mysql_native_password'
)

#select no banco
cursor = db.cursor()
cursor.execute("SELECT * FROM POSTS")
result = cursor.fetchall()
#print(result) #vendo o resultado sem quebra de linha
#vendo os resultados com quebra de linha
for x in result:
    print(x)
