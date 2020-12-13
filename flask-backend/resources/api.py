# Dependancies
from flask import request

# API ROUTES

# GET by ingredient
@recipe.route('/', methods=['GET'])
def getRecipes():
    

# retrieves recipes from 3rd party API with one ingredient query param
# returns (limit 20? 30?) to frontend in an array maybe?
# front end displays one at a time by calling on the stored array info
