<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> | 
      <router-link to="/signup">Signup</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
    name: "App"
}
</script>


<style>
@font-face {
      font-family: "Dagsen_Inked";
      src: local("Dagsen_Inked"),
      url(./fonts/Dagsen_Inked.otf) format("opentype")
    }
@font-face {
      font-family: "big_noodle_titling";
      src: local("big_noodle_titling"),
      url(./fonts/big_noodle_titling.ttf) format("truetype")
    }
    /* Font import tips researched from https://reactgo.com/add-fonts-vue-app/ */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
