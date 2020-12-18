<template>
    <div class="recipe-option">
        <h3>How about some...</h3>
        <h2>{{ recipes.recipes[0].title }}</h2>
        <p>image goes here</p>
        <!-- {{ recipe.recipe[0].image }} -->
        {{ recipes.recipes[0].summary }}
        <div class="details">
            <h5>Ready in {{ recipes.recipes[0].readyInMinutes }} minutes!</h5>
            <h5>Vegetarian: {{ recipes.recipes[0].vegetarian }}</h5>
            <h5>WW Smart Points: {{ recipes.recipes[0].weightWatcherSmartPoints }}</h5>
            <!-- <a href="{{recipe.recipe[0].sourceUrl}}"><button class="recipe-link">Get the recipe</button></a> -->
        </div>
        <div class="selectors">
            <!-- REMOVED TEMPORARILY  -->
            <!-- <button v-on:click="addFavorite" class='btn btn-success btn-lg'>YASS!</button> -->
            <!-- <button v-on:click="count +=1" class='btn btn-danger btn-lg'>YUCK!</button>  -->
        </div>
    </div>
</template>

<!-- This component will display one recipe from the array returned by the Spoontacular API -->
<!-- This component will have two buttons: Like and Dislike -->
<!-- On click the Like Button will add the recipe to the Favs array for the user. It will also increment a value which will show the next recipe -->
<!-- On click the Dislike Button will only increment a value which will show the next recipe -->


<script>
let count = 0
// This resource was very helpful in figuring out passing in the recipe array data from App.vue:
// https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/

export default {
    name: "Recipes",
    props: {
        recipes: {},
    },
    data() {
        return {
            favorites: []
        }
    },
    methods: {
      addFavorite() {
        const newFav = this.recipes[count]
        this.favorites = [...this.favorites, newFav]
        count +=1
      }
    }
    }
</script>



<style scoped>
    .recipe-option {
        width: 40%;
        background-color: cadetblue;
        color: cornsilk;
        margin: 1% auto;
        padding: 2%;
        border-radius: 10px;
    }
    .selectors {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .details {
        margin-top: 2%;
    }
    h3 {
        color: rgb(204, 37, 37)
    }
</style>