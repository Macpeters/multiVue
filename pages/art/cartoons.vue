<template>
  <div>
    <h1>Macpeters: Cartoons and Comics</h1>
    <breadcrumbs/>
    <artNav/>

    <article>
      <h2>Creativity and Drawing Fundamentals</h2>
      
      <article>
        <div class="blurb">
          <p>
            I've started drawing a lot of cartoons - quick sketches are awesome practice, and I think there's
            a lot of value in exploring the absurdities of the animated world.  Realism is overshadowed by
            expression, which helps push the boundaries of creativity.  Boiling an idea down to its
            simplist expression is deceptively difficult - there are fewer lines, but those lines have to
            be on point.  So cartooning gives me a lighter, more humourous medium within which I can work
            on fundamental drawing skills while breaking down creative barriers.
          </p>
        </div>
        <img v-bind:src="sneakingUp" alt="Sneaking Up"/>
      </article>
      
      <article>
        <div class="blurb">
          <p>
            I take part in a lot of drawing challenges in order to keep practicing, and draw things I 
            normally wouldn't think to.  One of my favourite challenges was a mixture of #catober and
            #drawtober in 2018.  31 prompts in the #drawtober list I applied to cats in some way.  I enjoyed
            that so much, I decided to keep adding to my collection of cats, using different themes.  The
            second theme I chose was easter.  
          </p>
          <p>
            Part of my inspiration for this came from a little game I've 
            been playing called 
            <a href="https://hitgrab.com/game/mousehunt/">Mousehunt</a> by 
            <a href="https://hitgrab.com/">Hitgrab</a>.  It's a collection based passive game with a large variety of
            areas, themes, and mini games, and there is a distinct collection of mice to go with each.  The 
            sheer variety of mice is incredible - from adorable and beautiful to hideous or ridiculous.   So
            I will strive to create a diverse collection of cats, one new theme at a time.  Check out my
            <a href="/art/cattoons" title="Cattoons">Mythical Cattoons</a>
          </p>
        </div>
        
        <img v-bind:src="halloween" alt="Halloween Cattoons" />
      </article>
    </article>


    <blogList/>
    <teePublicAd/>
  </div>
</template>

<script>
// images
import sneakingUp    from "../../assets/cartoons/macpeters_sneakingUp.png";
import halloween  from "../../assets/cartoons/cats/macpeters_series_01_halloween.png";

// components
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'
import teePublicAd from "../../components/ads/teePublic.vue"
import artNav from '../../components/art/artNav.vue'

export default {
  name: "Cartoons",
  components: { artNav, breadcrumbs, blogList, teePublicAd },
  data() {
    return {
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art/cartoons', name: 'Cartoons' }
      ],
      navLinks: [
        { url: '/art/cattoons', title: 'Cattoons', id: 'cattoons' },
        { url: '/art/alphabets', title: 'Alphabets', id: 'alphabets' }
      ],
      blogFilter: 'art',
      sneakingUp: sneakingUp,
      halloween: halloween
    };
  },
  head () {
    return {
      title: "Macpeters Cartoons and Comics",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'comicDescription', name: 'description', content: 'Whimsical, dry humour cartoons using minimal colours'},
        { hid: 'comicAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Cartoons and Comics' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/cartoons/' },
        { hid: `og:description`, property: 'og:description', content: 'Whimsical, dry humour cartoons using minimal colours' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: '' }
      ]
    }
  }
};
</script>

<style scoped>

  article {
    text-align: center;
    margin: 10px;
  }
  .blurb {
    padding: 10px;
    width: 50%;
    float: left;
  }

  p {
    padding: 0 0 10px 0;
  }

  img {
    width: 50%;
    float: left;
  }

 @media screen and (max-width: 697px){
    .blurb {
      width: 90%;
      display: block;
    }
    img {
      width: 90%;
      display: block;
    }
  }
</style>
