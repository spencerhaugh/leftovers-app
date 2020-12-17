<template>
  <div class="home">
    <h1>HANGRY!</h1>
    <h2>When you need meal ideas, NOW.</h2>
      <!-- <div v-if="recipes.length > 0" class="recipe"> -->
      <div class="recipe">
        <!-- <Recipes v-bind:recipes="recipes" /> -->
      </div>
      <!-- <div v-else class="logo"> -->
      <div class="logo">
        <Logo  />
        <Random v-on:random-search="findRandom" />
        <Recipes v-bind:recipes="recipes" />
        <!-- <Ingredient v-on:new-search="findRecipes" />  Temporary removal of ingredient based API search -->
      </div>
    
    <p class="tagline">
      Matching hangry people with great meals since 2020!
    </p>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import Recipes from '@/components/Recipes.vue'
// import Ingredient from '@/components/Ingredient.vue'
import Random from '@/components/Random.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Recipes,
    // Ingredient,
    Random,
    },
    data() {
      return {
        recipes: [],
        favorites: [],
        show: true
      }
    },
    methods: {
      addFavorite(newFavorite) {
        const newFav = newFavorite
        this.favorites = [...this.favorites, newFav]
      },
      findRecipes(param) {
            console.log("Got to the findRecipes Function!")
            console.log("undefined? ", param.query)
            this.recipes = []

            const apiKey = process.env.VUE_APP_API_KEY
            const ingredient = param.query
            let searchURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}&number=10`
            axios.get(searchURL)
            .then(res => this.recipes = res.data)
            .catch(err => console.log(err));
        },
      findRandom() {
        console.log("Finding random...")
        this.recipes = []
        // UPDATED TO SINGLE RANDOM RECIPE API CALL. Leaving above function for future enhancement
        const apiKey = process.env.VUE_APP_API_KEY
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`)
            .then(res => this.recipes = res.data)
            .catch(err => console.log(err));
      }
    } 
}
</script>

<style scoped>
    h1 {
      margin-top: 3%;
      font-family: Dagsen_Inked, Helvetica, Arial;
      font-size: 5rem;
    }
    h2 {
      font-family: big_noodle_titling, Helvetica, Arial;
    }
    /* Font import tips researched from https://reactgo.com/add-fonts-vue-app/ */
</style>