<template>
  <div id="home">
    <home-profile></home-profile>
    <div class="interval"></div>
    <added-value> </added-value>
  </div>
</template>

<script>
import AddedValue from '../components/AddedValue.vue'
import HomeProfile from '../components/HomeProfile.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: { HomeProfile, AddedValue }
}
</script>

<style>
#home{
  height:auto;
  width:100%;
}
.center{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.interval{
  height:20px;
  width:100%;
  background-color: rgb(205, 223, 235);
}
</style>
