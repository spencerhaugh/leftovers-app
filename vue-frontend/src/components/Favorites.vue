<template>
    <div>
        <!-- <div v-bind:key="fav._id" v-for="fav in favorites">
            <h3>{{fav.title}}</h3> -->
        <!-- </div> -->
    
    </div>
</template>

<!-- This page will display all Liked recipes -->
<!-- Recipes will be pushed to an array by the user, and a for loop will display them all here with links to a show page -->
<!-- These will have a delete button to remove them from the array -->
<!-- -->

<script>
export default {
    name: "Favorites",
    props: ["favorites"]
}
</script>



<style scoped>

</style>