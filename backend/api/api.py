#from _typeshed import FileDescriptor
from flask import Flask, jsonify, request
from flask_pymongo import pymongo
from models import *
import mongoengine as db
from pymongo import MongoClient

app = Flask(__name__)
database_name = "nusfintechnotesfree"
DB_URI = "mongodb+srv://haoyi:nusfintech2122@nusfintechnotesfree.ilz2y.mongodb.net/nusfintechnotesfree?retryWrites=true&w=majority"
db.connect(host = DB_URI)
cluster = MongoClient(DB_URI)
collections = db["User"]


@app.route('/', methods=['GET'])
def home():
    return "<h1>NUSFintech Society Notes</h1><p>Under Development</p>"

#get all users
@app.route('/api/users', methods=['GET'])
def getAllUser():
    users = db.bios.find()
    resp = users
    return resp


#get user by user id
@app.route('/api/users/<userId>', methods=['GET'])
def getUserById(userId):
    user = User.object(id = {userId})
    print(user.to_json())




"""
@app.route('/api/users', methods=['POST']) #create a user
def create_record():
    record = json.loads(request.data)
    user = User(
            id = record['id'],
            name = record['name'],
            email = record['email'],
            username = record['username'],
            password = record['password'],
            )
    user.save()
    return jsonify(user.to_json())
"""
#get all chats
@app.route('/api/chat', methods=['GET'])
def getAllChats():
    return "work in progress"


#get chat by char id
@app.route('/api/chat/chatId', methods=['GET'])
def getChatById():
   return "work in progress"


#create a chat room
@app.route('/api/chat', methods=['POST'])
def createChat():
    return "work in progress"


#create a message
@app.route('/api/message', methods=['POST'])
def createMessage():
    return "work in progress"


#get all messages
@app.route('/api/message', methods=['GET'])
def getAllMessage():
    return "work in progress"


#get message by message id
@app.route('/api/message/messId', methods=['GET'])
def getMessagebyId():
    return "work in progress"


print("\nTesting user input")

test = User(
    user_id = 0,
    name = "test",
    email = "test@test.com",
    username = "testing",
    password = "tester",
)



print("\nFetch test input")
#user = User.objects(user_id = 0).first()
print(user.to_json())


if __name__ == '__main__':
    app.run(debug=True)