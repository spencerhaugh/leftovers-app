<template>
    <div class='ingredient'>
        <h4>Enter a main ingredient, get meal suggestions</h4>
        <!-- <h5>Enter a main ingredient, get suggestions</h5> -->
        <form>
            <input type="text" placeholder="What have you got?">
            <input type="submit"></form>
    </div>
</template>

<script>
export default {
    name: "Ingredient"
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