from flask import Flask, request, jsonify
import pymongo
import dns
import json
from bson import json_util , ObjectId
#import models

cluster = pymongo.MongoClient("mongodb+srv://haoyi:nusfintech2122@nusfintechnotesfree.clo57.mongodb.net/NUSFintechNotesfree?retryWrites=true&w=majority", serverSelectionTimeoutMS=5000 )

db = cluster["notesfree"]
usercollection = db["user"]
chatcollection = db["chat"]
messagecollection = db["message"]

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    text = "<h1>NUSFintech Society Notes</h1><p>Under Development</p>"
    return text

#get all users
@app.route('/api/users', methods=['GET'])
def getAllUser():
    all_user = list(usercollection.find({}))
    return json.dumps(all_user, default=json_util.default)


#get user by user id
@app.route('/api/users/<userId>', methods=['GET'])
def getUserById(userId):
    targetUser = list(usercollection.find({'_id' : int(userId)}))
    return json.dumps(targetUser, default=json_util.default)
    

#create a new user
@app.route('/api/adduser', methods=['POST']) 
def create_user():
    message = request.json
    newUserId = message['_id']
    newName = message['name']
    newEmail = message['email']
    newUsername = message['username']
    newPassword = message['password']
    usercollection.insert_one({
        "_id" : newUserId,
        "name": newName,
        "email": newEmail,
        "Username": newUsername,            
        "Password": newPassword
        })
    return jsonify({
        "_id" : newUserId,
        "name": newName,
        "email": newEmail,
        "Username": newUsername,            
        "Password": newPassword
        })

#get all chats
@app.route('/api/chat', methods=['GET'])
def getAllChat():
    all_chat = list(chatcollection.find({}))
    return json.dumps(all_chat, default=json_util.default)

#get chat by chat id
@app.route('/api/chat/<chatId>', methods=['GET'])
def getChatById(chatId):
    targetChat = list(chatcollection.find({'_id' : int(chatId)}))
    return json.dumps(targetChat, default=json_util.default)

#create a chat room
@app.route('/api/chat', methods=['POST'])
def create_chat_room():
    chat = request.json
    newRoomId = chat['_id']
    newMembers = chat['members']
    newCreator = chat['creator']
    newDeleteBy = chat['deleted_by']
    chatcollection.insert_one({
        "_id" : newRoomId,
        "members": newMembers,
        "creator": newCreator,            
        "delete_by": newDeleteBy
        })
    return jsonify({
        "status": "sucess",
        "_id" : newRoomId,
        "members": newMembers,
        "creator": newCreator,            
        "delete_by": newDeleteBy
        })

#create a message
@app.route('/api/message', methods=['POST'])
def create_message():
    message = request.json
    newConvoId = message['_id']
    newAuthor = message['members']
    newContent = message['creator']
    chatcollection.insert_one({
        "_id" : newConvoId,
        "author": newAuthor,
        "content": newContent            
        })
    return jsonify({
        "_id" : newConvoId,
        "author": newAuthor,
        "content": newContent            
        })

#get all messages
@app.route('/api/message', methods=['GET'])
def getAllMessage():
    all_message = list(messagecollection.find({}))
    return json.dumps(all_message, default=json_util.default)

#get message by message id
@app.route('/api/message/<messId>', methods=['GET'])
def getMessagebyId(messId):
    targetMessage = list(messagecollection.find({'_id' : int(messId)}))
    return json.dumps(targetMessage, default=json_util.default)


# CRUD
#collection.insert_one({})
#collection.insert_many({})
#collection.find({})

try:
    print(cluster.server_info())
except Exception:
    print("Unable to connect to the server.")