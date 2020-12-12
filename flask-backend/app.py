from flask import Flask, jsonify, g
import pymongo
from pymongo import MongoClient
from flask_cors import CORS

# import models

DEBUG = True
PORT = 8000

app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


# MongoDB Connection route to users collection
client = MongoClient()
db = client["leftovers-app"]
users = db.users
# print(users)



# DEFAULT ROUTE
# The default URL ends in /
@app.route('/', methods=['POST'])
def index():

    # TEST CONNECTION: INSERT TEST USER ON ROUTE "/" POST
    # working and connected to DB
    # next step: receive form data from front-end and save payload to variable user_data
    user_data = {
    'username': 'Bens User',
    'email': 'newguy@testy.com',
    'password': '12345'
    }
    result = users.insert_one(user_data)
    print('Data from: {0}'.format(result.inserted_id))


    return 'Welcome to leftovers app!'

# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)
