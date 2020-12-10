from flask import Flask, jsonify, g
import pymongo
from pymongo import MongoClient
from mongoengine import *


# import models

DEBUG = True
PORT = 8000

app = Flask(__name__)

# MongoDB Connection
client = MongoClient()
db = client.leftovers
users = db.users

# TEST CONNECTION: INSERT TEST USER
user_data = {
    'username': 'Test User',
    'email': 'test@testy.com'
}
result = users.insert_one(user_data)
print('Data from: {0}'.format(result.inserted_id))


# Mongo Atlas Connection (replaces localhost connection above)
# client = MongoClient("mongodb+srv://spencer:Lokust123!@cluster0.aenra.mongodb.net/leftovers-app?retryWrites=true&w=majority")
# db = client["leftovers-app"]

# Insert data to mongoDB
# collection.insert_one({})

# These 2 @app's connect the app to the database, before will open the connection, and after will close it
@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = models.DATABASE
    g.db.connect()


@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response


# The default URL ends in /
@app.route('/')
def index():
    return 'Welcome!'

# Example: Return json (need to import jsonify on line 1 above) 
@app.route('/json')
def dog():
    return jsonify(name="Virus", age=12)
# Example: Return variable/dynamic data(express was :id) with < carrots > go to /sayhi/spencer
@app.route('/sayhi/<username>')
def hello(username):
    return "Hello, {}".format(username)

# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)
