<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Ingredient />
    <p>
      Matching hangry people with great meals since 2020!
    </p>
  </div>
</template>

<script>
import Ingredient from '@/components/Ingredient'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Ingredient
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-top: 1%;
}
</style>
