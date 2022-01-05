<template>
  <div v-show="visibleRec === index" class="recommendation"></div>
</template>

<script>
export default {
  name: 'Recommendation',
  props: ['visibleRec', 'index'],
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
