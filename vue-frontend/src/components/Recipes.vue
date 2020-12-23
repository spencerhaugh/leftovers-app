<template>
    <div class="recipe-option">
        <h3>How about some...</h3>
        <h2>{{ recipes.recipes[0].title }}</h2>
        <p>image goes here</p>
        <!-- Cannot get the v-html directive to display the raw HTML from the API as HTML... Working on a solution -->
        {{ recipes.recipes[0].summary }}
        <!-- {{ recipes.recipes[0].instructions }} -->
        <div class="details">
            <h5>Ready in {{ recipes.recipes[0].readyInMinutes }} minutes!</h5>
            <h5>Vegetarian: {{ recipes.recipes[0].vegetarian }}</h5>
            <h5>WW Smart Points: {{ recipes.recipes[0].weightWatcherSmartPoints }}</h5>
            <h5>Gluten Free: {{ recipes.recipes[0].glutenFree }}</h5>
            <!-- <a href="{{recipe.recipe[0].sourceUrl}}"><button class="recipe-link">Get the recipe</button></a> -->
        </div>
        <div class="selectors">
            <!-- FAVORITE/NEXT BUTTONS REMOVED TEMPORARILY  -->
            <!-- <button v-on:click="addFavorite" class='btn btn-success btn-lg'>YASS!</button> -->
            <!-- <button v-on:click="count +=1" class='btn btn-danger btn-lg'>YUCK!</button>  -->
        </div>
    </div>
</template>

<!-- APP FUNCTIONALITY -->
<!-- This component will display one recipe from the array returned by the Spoontacular API -->
<!-- This component will have two buttons: Like and Dislike -->
<!-- On click the Like Button will add the recipe to the Favs array for the user. It will also increment a value which will show the next recipe -->
<!-- On click the Dislike Button will only increment a value which will show the next recipe -->


<script>
let count = 0
// let apiSummary = this.recipes.recipes[0].summary
// let img = this.props.recipes.recipes[0].image
// let imgSrc = "<img src=" + `${img}` + "/>"
// Attempting and failing to get the img http address from the API to render above... working on this.

// This resource was very helpful in figuring out passing in the recipe array data from App.vue:
// https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/

export default {
    name: "Recipes",
    props: {
        recipes: {},
        // imageHtml: imgSrc
        // summary: this.recipes.recipes[0].summary
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
        width: 60%;
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
    @media (max-width: 580px) {
      .recipe-option {
            width: 90%;
        }
    }
</style>