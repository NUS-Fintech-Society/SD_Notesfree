import mongoengine as db

class User(db.Document):
    user_id = db.IntField()
    name = db.StringField()
    email = db.StringField()
    username = db.StringField()
    password = db.StringField()
    def to_json(self):
        return {
            "user_id" : self.user_id,
            "name": self.name,
            "email": self.email,
            "Username": self.username,
            "Password": self.password
            }

class Chat(db.Document):
    id = db.IntField()
    members = db.StringField()
    creator = db.StringField()
    deleted_by = db.StringField()
    def to_json(self):
        return {
            "id" : self.id,
            "members": self.members,
            "creator": self.creator,
            "deleted_by": self.deleted_by
            }

class Messages(db.Document):
    convo_id = db.IntField()
    author_id = db.IntField()
    content = db.StringField()
    def to_json(self):
        return {
            "convo_id" : self.convo_id,
            "author": self.author_id,
            "content": self.content,
            }