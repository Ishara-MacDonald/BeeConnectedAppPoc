<template>
  <div id="home">
    <home-profile class="home-component"></home-profile>
    <added-value class="home-component"> </added-value>
    <network-excellence class="home-component"></network-excellence>
  </div>
</template>

<script>
import AddedValue from '../components/AddedValue.vue'
import HomeProfile from '../components/HomeProfile.vue'
import NetworkExcellence from '../components/NetworkExcellence.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: { HomeProfile, AddedValue, NetworkExcellence }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
#home{
  height:auto;
  width:100%;
}
.home-component{
  margin-bottom:200px;
}
.center{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.interval{
  height:3px;
  width:100%;
  background-color: rgb(203, 234, 247);
}
</style>
