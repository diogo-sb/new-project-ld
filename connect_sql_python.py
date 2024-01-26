import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="project123",
    database="projeto"
    #uth_plugin='mysql_native_password'
)
cursor = db.cursor()
cursor.execute("SELECT * FROM POSTS")

myresult = cursor.fetchall()

for x in myresult:
  print(x)