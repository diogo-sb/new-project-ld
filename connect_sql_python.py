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
<<<<<<< HEAD
result = cursor.fetchall()
#vendo os resultados
for x in result:
    print(x)
=======

myresult = cursor.fetchall()

for x in myresult:
  print(x)
>>>>>>> 6ccfa043702ce8d7b531cc6087684cbc8665c7f1
