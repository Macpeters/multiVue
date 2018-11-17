<template>
  <div>
    <navbar/>
    <nuxt/>
    <contactBar/>
  </div>
</template>

<script>
import navbar from '~/components/navBar.vue'
import contactBar from '../components/contactBar.vue'

export default {
  components: { navbar, contactBar }
}
</script>

<style>

</style>
