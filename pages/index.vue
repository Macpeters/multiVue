<template>
  <div>
    <navBar />
    <h1>Hello world!</h1>

    <contactBar/>
  </div>
  
</template>

<script>
  // Components
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'

  export default {
  name: "Home",
  components: { navBar, contactBar },
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


<style scoped>

  div {
    text-align: center
  }

</style>