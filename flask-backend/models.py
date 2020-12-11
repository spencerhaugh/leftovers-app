from mongoengine import *

class User(Document):
    username = StringField(required=True)
    email = StringField(required=True)
    recipes = ListField()





