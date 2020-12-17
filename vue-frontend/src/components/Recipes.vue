<template>
    <div class="recipe-option">
        <h2>{{ recipes[0].title }}</h2>
        <p>Recipe Image here</p>
        <!-- {{ image }} -->
        <p>Recipe details here</p>
        <p> Also needed:</p>
        <!-- <p {{ recipes[0].missedIngredients[0].original }}></p> -->
        <!-- <h2>{{recipes[count].title}} PLACEHOLDER </h2> -->
        <div class="selectors">
            <button v-on:click="addFavorite" class='btn btn-success btn-lg'>YASS!</button>
            <button v-on:click="count +=1" class='btn btn-danger btn-lg'>YUCK!</button> 
        </div>
        <!-- <img src={{recipe.image}} alt={{recipe.title}}> -->
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
        recipes: Array,
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
</style>