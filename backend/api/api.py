from flask import Flask, request, jsonify
from pymongo import MongoClient, mongo_client
import json 
from bson import json_util
import pymongo
from flask_cors import CORS, cross_origin
import logging

#cluster = pymongo.MongoClient("mongodb+srv://user1:12345@cluster1.jyylb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

cluster = pymongo.MongoClient("mongodb+srv://user1:12345@cluster1.jyylb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", serverSelectionTimeoutMS=5000 )
#cluster = pymongo.MongoClient("mongodb+srv://user1:<password>@cluster1.jyylb.mongodb.net/test")
#cluster = MongoClient("mongodb+srv://user1:12345@cluster1.jyylb.mongodb.net/test")
#cluster = MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")

db = cluster["test"]
usercollection = db["user"]
chatcollection = db["chat"]
msgcollection = db["messages"]

app = Flask(__name__)
cors = CORS(app)
logging.getLogger('flask_cors').level = logging.DEBUG

@app.route('/', methods=['GET'])
def home():
    text = "<h1>NUSFintech Society Notes</h1><p>Under Development</p>"
    return text

#get all users
@app.route('/api/users', methods=['GET'])
def getAllUser():
    all_user = list(usercollection.find({}))
    if all_user:
        return json.dumps(all_user, default=json_util.default)
    else:
        return "No user exist"

#get user by user id
@app.route('/api/users/<userId>', methods=['GET'])
def getUserById(userId):
    targetUser = list(usercollection.find({'_id' : int(userId)}))
    if targetUser:
        return json.dumps(targetUser, default=json_util.default)
    else: 
        return "User does not exist"
    
#create a new user
@app.route('/api/users', methods=['POST']) 
def create_user():
    message = request.json
    print('Hello', message, request)
    newUserId = message['_id']
    newName = message['name']
    newEmail = message['email']
    newUsername = message['username']
    newPassword = message['password']
    try:
        usercollection.insert_one({
            "_id" : newUserId,
            "name": newName,
            "email": newEmail,
            "username": newUsername,            
            "password": newPassword
            })
        return "True"
    except Exception as e:
        print("An exception occured ::", e)
        return "False"

#get all chats
@app.route('/api/chat', methods=['GET'])
def getAllChat():
    all_chat = list(chatcollection.find({}))
    if all_chat:
        return json.dumps(all_chat, default=json_util.default)
    else: 
        return "No chat exist"

#get chat by chat id
@app.route('/api/chat/<chatId>', methods=['GET'])
def getChatById(chatId):
    targetChat = list(chatcollection.find({'_id' : int(chatId)}))
    return json.dumps(targetChat, default=json_util.default)

#create a chat room
@app.route('/api/chat', methods=['POST'])
def create_chat_room():
    chat = request.json
    print('Hello', chat, request)
    newRoomId = chat['_id']
    newMembers = chat['members']
    newCreator = chat['creator']
    newDeleteBy = chat['delete_by']
    try:
        chatcollection.insert_one({
            "_id" : newRoomId,
            "members": newMembers,
            "creator": newCreator,            
            "delete_by": newDeleteBy
            })
        return "True"
    except Exception as e:
        print("An exception occured ::", e)
        return "False"

@app.route('/api/message', methods=["GET"])
def getAllMessage():
    all_msg = list(msgcollection.find({}))
    if all_msg:
        return json.dumps(all_msg, default=json_util.default)
    else: 
        return "No Message exist"


@app.route('/api/message', methods=["POST"])
def post_message():
    request_payload = request.json
    print("Hello", request_payload, request)
    try:
        msgcollection.insert_one({
            "convo_id": request_payload["convo_id"], 
            "author": request_payload["author"], 
            "content": request_payload["content"]
            })
        return "True"
    except Exception as e:
        print("An exception occured ::", e)
        return "False"

@app.route('/api/<convo_id>', methods=["GET"])
def get_all(convo_id):                                  
    all = list(msgcollection.find({"convo_id": int(convo_id)}))
    return json.dumps(all, default=json_util.default)

@app.route('/api/message/<messId>', methods=["GET"])
def get_message_by_id(messId): 
    message = msgcollection.find_one({"_id": int(messId)}) 
    if message: 
        return json.dumps(message, default=json_util.default)
    else: 
        return 'Message does not exist'

try:
    print(cluster.server_info())
except Exception:
    print("Unable to connect to the server.")

if __name__ == "__main__": 
    app.run(debug=True, port=5000, host="127.0.0.1")
