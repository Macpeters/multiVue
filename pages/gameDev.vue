<template>
  <div>
    <navBar />
    <h1>Macpeters: Indie Game Development</h1>
    <breadcrumbs/>
    <h2>web and mobile games</h2>
    <hr />
    <div class="page-description">
      <h3>Hobby Game Developer</h3>
      <p>
        If I get the dev bug on my own time, I mess around in GameMaker Studio 2 on games that may not be all 
        that fun to play, but they're pretty fun to build.  I create simple vector sprites using Inkscape to 
        represent game objects and states.  I have 2 games on the go at the moment - a simulation game where 
        single celled organisms compete for resources - the difficulty is adjustable by the user.  The other 
        game is a strategy skating game.  In both, most of the work is done by the computer, with basic 
        artificial intelligence.
      </p>
      <h3>Collaborate with Me!</h3>
      <p>
        While I have worked in the past with Unity3d, flash, XNA, and DirectX, these days I generally stick with GMS2.
        I tend to build prototypes, then lose interest once the interesting mechanics are in place.
        If you're more into level design, graphics, or UX, and would like to collaborate, get in touch with me.
        GMS2 is github friendly, and all my repos are public.  
      </p>
      <hr />
    </div>

    <div id="games">
      <h2>Indie Games</h2>
      <h3>Prototype games made with GameMaker.</h3>
      <ul>
        <li><iframe src="//itch.io/embed/218716?dark=true&linkback=true" width="552" height="167" frameborder="0"></iframe></li>
        <li><iframe src="//itch.io/embed/25715?dark=true&linkback=true" width="552" height="167" frameborder="0"></iframe></li>
        <li><iframe src="//itch.io/embed/25111?dark=true&linkback=true" width="552" height="167" frameborder="0"></iframe></li>
      </ul>
    </div>

    <div id="demo">
      <h2>Game Demo Reel</h2>
      <h3>Prototype games made while I was in school - mostly using Flash/AS3, XNA, Unity3d</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1Za-n3DstI0?enablejsapi=1&origin=https://macpeters-vue.netlify.com/dev/" frameborder="0" allowfullscreen></iframe>
    </div>

    <blogList/>

    <contactBar/>
  </div>
  
</template>

<script>
  // Images
  import logoImage from "../assets/logo.png";
  import github from "../assets/social/github.png";
  // Components
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'
  import breadcrumbs from '../components/breadcrumbs.vue'
  // Blog
  import blogList from '../components/blog.vue'

  export default {
  name: "Dev",
  components: { navBar, contactBar, breadcrumbs, blogList },
  data() {
    return {
      githubImage: github,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/gameDev', name: 'Game Development' }
      ],
      blogFilter: 'technology',
    };
  },
  head () {
    return {
      title: "Macpeters - Web and Game Development",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'gameDevDescription', name: 'description', content: 'Indie game developmment on the side'},
        { hid: 'gameDevAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters - Game Development' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/gameDev/' },
        { hid: `og:description`, property: 'og:description', content: 'Indie game developmment' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: logoImage }
      ]
    }
  }
};
</script>


<style scoped>

  div {
    text-align: center
  }

  ul li {
    list-style: none;
  }

</style>