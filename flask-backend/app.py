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

# # TEST CONNECTION: INSERT TEST USER
# user_data = {
#     'username': 'Test User',
#     'email': 'test@testy.com'
# }
# result = users.insert_one(user_data)
# print('Data from: {0}'.format(result.inserted_id))


# DEFAULT ROUTE
# The default URL ends in /
@app.route('/')
def index():
    return 'Welcome!'



##############
# TESTING ROUTES
##############

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
