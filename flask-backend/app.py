from flask import Flask, jsonify, g
import pymongo
from pymongo import MongoClient
from flask_mongoengine import MongoEngine
from mongoengine import *


# import models

DEBUG = True
PORT = 8000

app = Flask(__name__)
##########
# DB Connection via MongoEngine (aka Express in express/Node)
db = MongoEngine(app)

# MongoDB Connection route to users collection
client = MongoClient()
db = client["leftovers-app"]
users = db.users

# # TEST CONNECTION: INSERT TEST USER
user_data = {
    'username': 'Another User',
    'email': 'again@testy.com'
}
result = users.insert_one(user_data)
print('Data from: {0}'.format(result.inserted_id))










# DEFAULT ROUTE
# The default URL ends in /
@app.route('/')
def index():
    return 'Welcome to leftovers app!'



# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)
