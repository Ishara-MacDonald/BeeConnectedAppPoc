<template>
  <div id="assignment-view">
    <h1>Our assignments</h1>
    <h2>No assignments right now.</h2>
  </div>
  <recommendations class="home-component"></recommendations>
</template>

<script>
import Recommendations from '../components/Recommendations.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Assignments',
  components: { Recommendations }
}
</script>

<style scoped>
#assignment-view {
  margin: 0 auto;
  padding-bottom: 60px;
  width: 90%;
  height: 200px;
  color: black;
  text-align: center;
}

h1 {
  font-weight: bolder;
  font-size: 50px;
  letter-spacing: 1px;
  padding: 30px 0px;
}

h2 {
  font-size: 30px;
  padding: 20px 0px;
  letter-spacing: 1.5px;
  font-weight: normal;
}
</style>
