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
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    /* transform: rotate(0.9deg); lol too funny */
  }

  .fadeOpacity-enter-active, .fadeOpacity-leave-active {
    transition: opacity .35s ease-out;
  }
  .fadeOpacity-enter, .fadeOpacity-leave-active {
    opacity: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  .container {
    text-align: center;
    padding: 20px;
  }

  .content {
    font-size: 18px;
    padding: 10px;
    margin: 1 20px;
  }

  .header-purple-bg {
    background-color: #897DF4;
  }
</style>
