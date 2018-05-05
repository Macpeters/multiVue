<template>
  <div :options="images" class="art-gallery">
    <span v-for="image in images" :key='image.id'>
      <img v-bind:src="image.image" class="thumbnail" @click='choose(image)' />
    </span>

    <div v-if="chosenImage" class="featured-image">
      <img v-bind:src="chosenImage.image" v-bind:alt="chosenImage.title" v-bind:title="chosenImage.title" />
      <h3>{{chosenImage.title}}</h3>
      <h4>{{chosenImage.description}}</h4>
      <div class="keywords">Keywords: <span>{{chosenImage.keywords}}</span></div>
    </div>

  </div>
</template>

<script>

const base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "

export default {
  name: "imageList",
  props: ['options'],
  components: { },
  data(options) {
    return {
      images: null,
      imageArray: options,
      chosenImage: null
    };
  },
  methods: {
    choose(img) {
      this.chosenImage = img;
    }
  },
  beforeMount(){
    this.images = this.$parent.images
    this.choose(this.images[0])
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

  .art-gallery {
    padding: 20px;
  }

  /* Featured Image */
  .featured-image img {
    max-height: 500px;
    width: auto;
  }
  .image-title {
    clear: both;
  }
  .keywords {
    color: #bbb;
  }

  .thumbnail {
    width: 100px;
    height: 100px;
    padding: 5px;
    border-width: 1px;
    border-color: #fff;
    border-style: solid;
    object-fit: cover;
    overflow: hidden;
  }

</style>
