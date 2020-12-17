<template>
    <div class='ingredient'>
        <h4>Enter a main ingredient, get meal suggestions</h4>
        <form @submit.prevent="newSearch">
            <input type="text" v-model="query" name="param" placeholder="What have you got?">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>

// This resource was very helpful in figuring out passing in the recipe array data from App.vue:
// https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/

export default {
    name: "Ingredient",
    data() {
        return {
            query: ''
        }
    },
    methods: {
        newSearch() {
            console.log("FINDING RECIPES!!", this.query)
            const newQuery = {
                query: this.query
                }
            console.log(newQuery.query)
            // Send data to parent component
            this.$emit('new-search', newQuery)

            this.query = '';
        }
    }
}
</script>

<style scoped>
    div {
        background-color: cadetblue;
        color: cornsilk;
        padding: 2%;
        width: 60%;
        margin: 0 auto;
        }
    input :first-of-type{
        width: 400px;
    }
</style>