from flask import Flask
import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://haoyi:nusfintech2122@nusfintechnotesfree.ilz2y.mongodb.net/nusfintechnotesfree?retryWrites=true&w=majority")
db = cluster["nusfintechnotesfree"]
collection = db["user"]

post = {"_id" : 0, "name" : "test"}
collection.insert_one(post)