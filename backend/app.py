from flask import Flask, jsonify
from pymongo import MongoClient


DEBUG = True
PORT = 8000

app = Flask(__name__)
client = MongoClient()


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
