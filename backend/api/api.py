from flask import Flask
from flask import request
import pymongo
from pymongo import MongoClient
import json 
import bson
from bson import json_util
# from models import Message

cluster = MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")

db = cluster["admin"]
collection = db["messages"]

app = Flask(__name__)

@app.route('/api/message', methods=["POST"])
def post_message():
    request_payload = request.json
    collection.insert_one({"convo_id": request_payload["convo_id"], "author": request_payload["author"], "content": request_payload["content"]})
    return 'Message sent'

@app.route('/api/message', methods=["GET"])
def get_all():
    request_payload = request.json
    all = list(collection.find({"convo_id": request_payload["convo_id"]}))
    return json.dumps(all, default=json_util.default)


@app.route('/api/message/messId', methods=["GET"])
def get_message_by_id(): 
    request_payload = request.json
    message = collection.find_one({"_id": bson.ObjectId(request_payload["_id"])}) 
    if message: 
        return json.dumps(message, default=json_util.default)
    else: 
        return 'Message does not exist'

if __name__ == "__main__": 
    app.run(debug=True, port=5000, host="127.0.0.1")