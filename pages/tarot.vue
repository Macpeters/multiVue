<template>
  <div class="page-content">
    <navBar />

    <div>
      <h1>The Hidden Dreams Tarot</h1>
      <breadcrumbs/>
      <h3>A synthesis of symbolism and lore.</h3>
      <h4>Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all.</h4>
    </div>
    

    <div>
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/fwCA5DEUbd8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
    </div>
    <div id="inspiration" class="columns">
      <h4>The Inspiration Behind Hidden Dreams Tarot</h4>
      <div>
        <div class="left-column">
          <img v-bind:src="hiddenDreamsDeck" alt="Hidden Dreams Tarot Deck" title="Hidden Dreams Tarot Deck" />
        </div>
        <div class="right-column page-description">
          <p>The Hidden Dreams Tarot was designed with the intention of having the imagery speak the symbolism and meaning in a more obvious, modern way.
            In the process, I discovered a lot of clear associations with things outside of Tarot.
            Egyptian, Hebrew, Celtic, Nordic, and Greek mythology all began to factor in, along with numerology, astrology, and colours.
            Over the course of a year, I took notes on all of these associations, and clarified their mappings.
          </p>
          <p>The Kickstarter project got off to a luke-warm start, so I figure I'll be selling print-to-order copies of
            both the deck and the book.  Original drawings and prints are also available.  Contact me for more 
            information.  I'll have a store set up shortly.
          </p>
        </div>
      </div>
    </div>
    
    <div>
      <iframe id="data-blurb-bookshare-8697712" data-bindattr-228="228"
		      height="100%" data-bindattr-229="229" width="100%" data-bindattr-230="230"
		      src="http://www.blurb.com/bookshare/app/index.html?bookId=8697712" data-bindattr-231="231"
		      frameborder=0 allowfullscreen=''onload='this.focus()' scrolling='no'>
		  </iframe>
    </div>

    <signupForm/>
    <hr />
    <div>
      <a href="https://www.kickstarter.com/projects/macpeters/hidden-dreams-tarot">
        <img v-bind:src="kickstarterLaunch" alt="Hidden Dreams Kickstarter Now Live" title="Hidden Dreams Kickstarter Now Live" />
      </a>
    </div>

    <hr />
    <br />
    <contactBar/>
  </div>
  
</template>

<script>
  // Images
  import logoImage from "../assets/logo.png";
  import kickstarterLaunch from "../assets/tarot/hiddenDreamsTarotKickstarter.png";
  import cutiePieTarot from "../assets/tarot/macpeters_cutiePieTarot.png"
  import hiddenDreamsDeck from "../assets/tarot/hiddenDreamsTarotDeck.png"
  import starCard from "../assets/tarot/hiddenDreamsTarot_starCards.png"
  // Components
  import navBar from '../components/navBar.vue'
  import signupForm from '../components/signupForm.vue'
  import contactBar from '../components/contactBar.vue'
  import breadcrumbs from '../components/breadcrumbs.vue'

  export default {
  name: "Home",
  components: { navBar, contactBar, signupForm, breadcrumbs },
  data() {
    return {
      logoImage: logoImage,
      kickstarterLaunch: kickstarterLaunch,
      cutiePieTarot: cutiePieTarot,
      hiddenDreamsDeck: hiddenDreamsDeck,
      starCard: starCard,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/tarot', name: 'Hidden Dreams Tarot' }
      ]
    };
  },
  head () {
    return {
      title: "Hidden Dreams Tarot",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Hidden Dreams Tarot' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/' },
        { hid: `og:description`, property: 'og:description', content: 'Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: logoImage }
      ],link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
};
</script>

<style scoped>
  .page-content {
    text-align: center;
  }
  h1 {
    font-size: 27px;
    font-weight: bolder;
    padding: 10px;
  }
  .tarot-sub-nav {
    height: 40px;
    padding: 10px;
    text-align: center;
  }
  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .tarot-sub-nav a {
    border-radius: 25px;
    background-color: #eef;
    padding: 5px;
    text-decoration: none;
    margin: 10px;
  }
  img {
    width: 80%;
    height: auto;
  }

  /* All Info Sections */
  .left-column {
    width: 45%;
    float: left
  }
  .right-column {
    width: 45%;
    float: right;
  }
  .columns {
    height: 500px;
    padding: 0;
    padding-top: 10px;
    display: block;
  }
  .columns div {
    padding: 10px;
  }
  .columns img {
    max-width: 90%;
    max-height: 480px;;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 612px){
    .left-column {
      width: 100%;
      clear: both;
    }

    .right-column {
      width: 100%;
      clear: both;
    }

    .bottom-signup{
      height: 300px;
    }
    .columns image {
      height: 500px;
    }  
    #tarot-history {
      height: 1100px;
    }
  }
</style>