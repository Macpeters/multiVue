<template>
  <div class="art-gallery">
    <span v-for="image in images" :key='image.id'>
      <img v-bind:src="image.thumb" v-bind:alt="image.title" v-bind:title="image.title" class="thumbnail" @click='choose(image)' />
    </span>

    <div class="featured-image">
      <div class="left-column">
        <img v-bind:src="chosenImage.image" v-bind:alt="chosenImage.title" v-bind:title="chosenImage.title" />
      </div>
      <div class="right-column">
        <h3>{{chosenImage.title}}</h3>
        <h4>{{chosenImage.description}}</h4>
        <div class="keywords">Keywords: <span>{{chosenImage.keywords}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "imageList",
  components: { },
  data() {
    return {
      images: null,
      chosenImage: {
        image: null,
        title: "",
        description: "",
        keywords: null
      }
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
    clear: both;
  }

  /* Featured Image */
  .left-column {
    width: 50%;
    float: left
  }
  .right-column {
    width: 50%;
    float: right;
  }
  .featured-image {
    height: 500px;
  }
  .featured-image img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
  .image-title {
    clear: both;
  }
  .keywords {
    color: #bbb;
  }

  .thumbnail {
    width: 80px;
    height: 80px;
    margin: 5px;
    border-width: 1px;
    border-color: #aaa;
    border-style: solid;
    object-fit: cover;
    overflow: hidden;
  }
  .thumbnail:hover {
    border-color: #eee;
    opacity: 0.7;
  }

  @media screen and (max-width: 450px){
    .left-column {
      width: 100%;
    }

    .right-column {
      width: 100%;
    }
  }

</style>
