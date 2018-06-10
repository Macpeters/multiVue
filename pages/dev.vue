<template>
  <div>
    <navBar />
    <h1>Macpeters: Web and Indie Game Development</h1>
    <breadcrumbs/>
    <h2>builder of websites, surveys, data visualizations, web and mobile games</h2>
    <hr />
    <div class="page-description">
      <h3>Professional Web Developer</h3>
      <h4><a href="/devResume">Resume</a></h4>
      <p>
        These days most of my coding is web development - working with mostly ruby on rails and javascript at 
        Infotech Research Group.  I love collaborating, and working on a dev team is great for that. We have
        recently chosen Vue.js as a framework since our content is becoming more dynamic.  I'm still getting to
        know it, but the learning curve isn't too steep.  This site is a multipage vue app, served by Netlify, 
        using npm and nuxt.
      </p>
      <h3>Hobby Game Developer</h3>
      <p>
        If I get the dev bug on my own time, I mess around in GameMaker Studio on games that may not be all 
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

  export default {
  name: "Dev",
  components: { navBar, contactBar, breadcrumbs },
  data() {
    return {
      githubImage: github,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/dev', name: 'Dev' }
      ]
    };
  },
  head () {
    return {
      title: "Macpeters - Web and Game Development",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'devDescription', name: 'description', content: 'Web Development using rails, vue, javascript, indie game developmment on the side'},
        { hid: 'devAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters - Web and Game Development' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/dev/' },
        { hid: `og:description`, property: 'og:description', content: 'Web Development using rails, vue, javascript, indie game developmment on the side' },
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