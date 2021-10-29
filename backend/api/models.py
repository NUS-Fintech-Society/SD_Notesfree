from flask import Flask
import pymongo
from pymongo import MongoClient



cluster = MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")

db = cluster["admin"]
collection = db["messages"]


class Message(db.Document): 
    convo_id = db.IntField()
    author = db.IntField()
    content = db.StringField(required=True)
    def to_json(self): 
        return {
            "convo_id": self.convo_id, 
            "author": self.author, 
            "content": self.content
        }

