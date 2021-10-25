from flask import Flask
import pymongo
import dns
import json
from bson import json_util
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
@app.route('/api/users/<userId>')
def getUserById(userId):
    return f"hello user {userId}"
    # user = User.object(id = {userId})
    # print(user.to_json())




# """
# @app.route('/api/users', methods=['POST']) #create a user
# def create_record():
#     record = json.loads(request.data)
#     user = User(
#             id = record['id'],
#             name = record['name'],
#             email = record['email'],
#             username = record['username'],
#             password = record['password'],
#             )
#     user.save()
#     return jsonify(user.to_json())
# """
# #get all chats
@app.route('/api/chat', methods=['GET'])
def getAllChat():
    all_chat = list(chatcollection.find({}))
    return json.dumps(all_chat, default=json_util.default)


# #get chat by char id
# @app.route('/api/chat/chatId', methods=['GET'])
# def getChatById():
#    return "work in progress"


# #create a chat room
# @app.route('/api/chat', methods=['POST'])
# def createChat():
#     return "work in progress"


# #create a message
# @app.route('/api/message', methods=['POST'])
# def createMessage():
#     return "work in progress"


#get all messages
@app.route('/api/message', methods=['GET'])
def getAllMessage():
    all_message = list(messagecollection.find({}))
    return json.dumps(all_message, default=json_util.default)


# #get message by message id
# @app.route('/api/message/messId', methods=['GET'])
# def getMessagebyId():
#     return "work in progress"


# print("\nTesting user input")

# test = User(
    # user_id = 0,
    # name = "test",
    # email = "test@test.com",
    # username = "testing",
    # password = "tester",
# )



# print("\nFetch test input")
# #user = User.objects(user_id = 0).first()
# print(user.to_json())

# CRUD
#collection.insert_one({})
#collection.insert_many({})
#collection.find({})


#chatcollection.insert_one({"_id": 2 , "name": "test1", "email" : "test1@test.com", "Username": "testa" , "Password": "123PW" })
#messagecollection.insert_one({"_id": 4, "name": "hello here"})

try:
    print(cluster.server_info())
except Exception:
    print("Unable to connect to the server.")