<template>
  <div>
    <h1>Macpeters: Digital Paintings</h1>
    <breadcrumbs/>

    <div class="page-description">
      <h2>Painting With Pixels</h2>
      <p>
        I've come at these in a variety of different ways.  In some cases, I started with a scanned pencil
        drawing which I coloured digitally.  In other cases, I started with a blank canvas, then drew and 
        coloured the picture from scratch.
      </p>

    </div>

    <digitalPaintingImages/>

    <blogList/>

  </div>
</template>

<script>
// images

// components
import digitalPaintingImages from '../../components/art/digitalPaintingImages.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'

export default {
  name: "Cartoons",
  components: { digitalPaintingImages, breadcrumbs, blogList },
  data() {
    return {
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art/digitalPainting', name: 'Digital Paintings' }
      ],
      blogFilter: 'art',
      chosenImage: null
    };
  },
  head () {
    return {
      title: "Macpeters Digital Paintings",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'digitalPaintingDescription', name: 'description', content: 'Digital Paintings drawn in Autodesk Sketchbook'},
        { hid: 'digitalPaintingAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Digital Paintings' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/cartoons/' },
        { hid: `og:description`, property: 'og:description', content: 'Digital Paintings drawn in Autodesk Sketchbook' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: '' }
      ]
    }
  }
};
</script>

<style scoped>

  div {
    text-align: center
  }

</style>
