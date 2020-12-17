<template>
    <div>
        <h4>Need a meal idea??</h4>
        <button v-on:click="randomSearch" >Hit me!</button>
    </div>
</template>

<script>
export default {
  name: "Random",
  methods: {
      randomSearch() {
          console.log("Starting random search...")
          this.$emit('random-search')
      }
  }
};
</script>

<style scoped>
    div {
        background-color: cadetblue;
        color: cornsilk;
        padding: 2%;
        width: 60%;
        margin: 0 auto;
        border-radius: 10px;
        }
    button {
        padding: 10px;
        border: none;
        background-color: rgb(204, 37, 37);
        color: white;
        border-radius: 10px;
    }
</style>
