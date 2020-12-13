<template>
    <div class='ingredient'>
        <h4>I Need Some Meal Ideas! I've Got Some: </h4>
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