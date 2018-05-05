<template>
  <div>
    <navBar />
    <h1>Hello world!</h1>
  </div>
  
</template>

<script>
  import navBar from '../components/navBar.vue'
  export default {
  name: "Home",
  components: { navBar },
  data() {
    return {
      images: [
        {
          title: "",
          subtitle: "",
          description: "",
          keywords: ""
        }
      ],
      chosenImage: null
    };
  },
  build: {
    assetsPublicPath: "/",
    assetsSubDirectory: "assets/fineArt"
  }
};
</script>
