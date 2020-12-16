<template>
    <div class="recipe-option">
        <h2>{{recipes[count].title}} PLACEHOLDER </h2>
        <button v-on:click="addFavorite" class='btn btn-primary btn-lg'>YASS</button>
        <button v-on:click="count +=1" class='btn btn-primary btn-lg'>YUCK</button>
        <!-- <img src={{recipe.image}} alt={{recipe.title}}> -->
    </div>
</template>

<!-- This component will display one recipe from the array returned by the Spoontacular API -->
<!-- This component will have two buttons: Like and Dislike -->
<!-- On click the Like Button will add the recipe to the Favs array for the user. It will also increment a value which will show the next recipe -->
<!-- On click the Dislike Button will only increment a value which will show the next recipe -->


<script>
let count = 0


export default {
    name: "Recipes",
    props: {
        recipes: Array
    },
    data() {
        // favorites: []
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
    }
</style>