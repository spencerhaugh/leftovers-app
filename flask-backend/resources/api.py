# Dependancies
from flask import request, Blueprint

# API ROUTES

recipe = 

# GET by ingredient

# https://api.spoonacular.com/recipes/findByIngredients?ingredients=apple&number=30
# Example url returns 30 apple based recipes

@recipe.route('/recipes/<ingredient>', methods=['GET'])
def getRecipes():
    return 

# retrieves recipes from 3rd party API with one ingredient query param
# returns (limit 30 in the api query example url above) to frontend in an array maybe?
# front end displays one at a time by calling on the stored array info
