<template>
  <div>
    <span>
      <a href="/">Home</a> |
      <a href="/art">Art</a> |
      <a href="/skateboards">Skateboards</a>
    </span>
  </div>
</template>

<script>


export default {
  name: "imageList",
  props: ['options'],
  components: { },
  data(options) {
    return {
    };
  },
  build: {
    assetsPublicPath: "/",
    assetsSubDirectory: "assets"
  }
};
</script>


<style scoped>
  body {
    font-family: Arial, Helvetica, sans-serif;
  }

</style>
