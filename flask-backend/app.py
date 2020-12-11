from flask import Flask, jsonify, g
import pymongo
from pymongo import MongoClient

# import models

DEBUG = True
PORT = 8000

app = Flask(__name__)




# MongoDB Connection route to users collection
client = MongoClient()
db = client["leftovers-app"]
users = db.users
print(users)



# DEFAULT ROUTE
# The default URL ends in /
@app.route('/')
def index():


    # # TEST CONNECTION: INSERT TEST USER
    # working and connected to DB
    # next step: receive form data from front-end and save to variable user_data as in below example
    user_data = {
    'username': 'Bens User',
    'email': 'newguy@testy.com'
    }
    result = users.insert_one(user_data)
    print('Data from: {0}'.format(result.inserted_id))


    return 'Welcome to leftovers app!'



# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)
