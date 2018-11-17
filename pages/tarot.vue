<template>
  <div class="page-content">
    <div>
      <h1>Macpeters Tarot Decks</h1>
      <breadcrumbs/>
      <div class="sub-nav-bar">
        <span class="button sub-nav"><a href="#hidden-dreams">Hidden Dreams Tarot</a></span>
        <span class="button sub-nav"><a href="#cutie-pie">Cutie Pie Tarot</a></span>
      </div>
      <h2>The Hidden Dreams Tarot</h2>
      <h3>Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all.</h3>
      <p>
        <a href="http://www.makeplayingcards.com/sell/macpeters" class="button" target="_blank" title="Buy Hidden Dreams Tarot Deck Button">Buy Hidden Dreams Tarot Deck Now</a>
      </p>
    </div>


    <div id="hidden-dreams">
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
          <p>The Kickstarter project got off to a luke-warm start, so I'll be selling <a href="#tarot-deck-purchase">print-to-order copies</a> of
            both the deck and the book.  Original drawings and prints are also available.  <a href="mailto:peters.maryanne@gmail.com">Contact me</a>
            for more information.
          </p>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="left-column" id="tarot-deck-purchase">
        <p>
          Order your own copy of the Hidden Dreams Tarot Deck.  Discover the modern sybolic representations of many different
          cultures, all of which tell the story of the Tarot - the Fool's Journey, or the Hero's Journey.
        </p>
        <p>
          Wherever you are in your own journey, the Hidden Dreams Tarot can offer insight into your circumstances, and
          advice on how to proceed. If you are new to tarot, this deck is a great way to learn, because the imagery is
          modern and memorable.
        </p>
        <p>
          <a href="http://www.makeplayingcards.com/sell/macpeters" class="button" target="_blank" title="Buy Hidden Dreams Tarot Deck Button">Buy The Hidden Dreams Tarot Deck Now</a>
        </p>
      </div>
      <div class="right-column">
        <a href="http://www.makeplayingcards.com/sell/macpeters" target="_blank" title="Buy Hidden Dreams Tarot Deck Image">
          <img v-bind:src="hiddenDreamsCardSpread" alt="Hidden Dreams Tarot Deck Card Spread" title="Hidden Dreams Tarot Deck Card Spread"/>
        </a>
      </div>
    </div>

    <div class="columns">
      <div class="left-column">
        <a href="http://www.blurb.com/books/8697712-hidden-dreams-tarot" target="_blank" title="Hidden Dreams Tarot Guidebook Preview">
          <img v-bind:src="hiddenDreamsGuidebook" alt="Hidden Dreams Tarot Guidebook" title="Hidden Dreams Tarot Guidebook"/>
        </a>
      </div>
      <div class="right-column">
        <p>
          The Hidden Dreams Tarot Guidebook is available in softcover, hardcover, and pdf format.
        </p>
        <p>
          Along with descriptions of the cards and their meanings, the guidebook contains quick references to crystals, astrology,
          entheogens, runes, and more, beautifully illustrated.  This book can give you a quick look into different belief
          systems and how they associate with the tarot.
        </p>
        <p>
          Check out a  <a href="http://www.blurb.com/books/8697712-hidden-dreams-tarot" target="_blank" title="Hidden Dreams Tarot Guidebook Preview">Preview</a> now and order
          your copy today.
        </p>
        <p><a href="http://www.blurb.com/books/8697712-hidden-dreams-tarot" class="button" target="_blank" title="Buy Hidden Dreams Tarot Guidebook Button">Buy Hidden Dreams Guidebook Now</a></p>
      </div>
    </div>

    <div id="cutie-pie">
      <h2>The CutiePie Tarot</h2>
      <h3>Designed with inclusivity children in mind.</h3>
      <p>
        <a href="http://www.makeplayingcards.com/sell/macpeters" class="button" target="_blank" title="Buy CutiePie Tarot Deck Button">Buy CutiePie Tarot Deck Now</a>
      </p>
    </div>

    <div class="columns">
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/OK4yx7mOcJE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="left-column">
        <img v-bind:src="cutiePieTarot" alt="Cutie Pie Tarot" title="Cutie Pie Tarot"/>
      </div>
      <div class="right-column">
        <p>
          The Cutie Pie Tarot was a fun little extra I put together.  The idea was to distill the main meaning or message of each card
          into a basic interpretation, and have it personified by a cute human character.  Because the deck is made up of humans, I wanted
          the characters to represent a really diverse collection of people - age, race, ability, gender, gender expression.  I hope that
          everyone can see themselves in this deck.
        </p>
        <p>
          This is a family friendly tarot deck, which can be used to start children on the road to understanding what Tarot is all about.  It
          comes in a sturdy rigid box, with the cards sized more like standard playing cards so they're easier to handle, particularly for
          little hands.
        </p>
        <p>
          <a href="http://www.makeplayingcards.com/sell/macpeters" class="button" target="_blank" title="Buy CutiePie Tarot Deck Button">Buy The CutiePie Tarot Deck Now</a>
        </p>
      </div>
    </div>

    <signupForm/>
    <div>
      <a href="https://www.kickstarter.com/projects/macpeters/hidden-dreams-tarot" target="_blank" title="Hidden Dreams Tarot Kickstarter">
        <img v-bind:src="kickstarter" alt="Hidden Dreams Kickstarter" title="Hidden Dreams Kickstarter" class="kickstarter-image" />
      </a>
    </div>

     <blogList/>
  </div>

</template>

<script>
  // Images
  import logoImage from "../assets/logo.png";
  import kickstarter from "../assets/tarot/hiddenDreamsTarotKickstarter.png";
  import cutiePieTarot from "../assets/tarot/macpeters_cutiePieTarot.png"
  import hiddenDreamsDeck from "../assets/tarot/hiddenDreamsTarotDeck.png"
  import hiddenDreamsCardSpread from "../assets/tarot/hiddenDreamsTarotSpread.png"
  import hiddenDreamsGuidebook from "../assets/tarot/hiddenDreamsTarotGuidebook.png"
  // Components
  import signupForm from '../components/signupForm.vue'
  import breadcrumbs from '../components/breadcrumbs.vue'
  // Blog
  import blogList from '../components/blog.vue'

  export default {
  name: "Home",
  components: { signupForm, breadcrumbs, blogList },
  data() {
    return {
      logoImage: logoImage,
      kickstarter: kickstarter,
      cutiePieTarot: cutiePieTarot,
      hiddenDreamsDeck: hiddenDreamsDeck,
      hiddenDreamsGuidebook: hiddenDreamsGuidebook,
      hiddenDreamsCardSpread: hiddenDreamsCardSpread,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/tarot', name: 'Hidden Dreams Tarot' }
      ],
      blogFilter: 'tarot'
    };
  },
  head () {
    return {
      title: "Hidden Dreams Tarot by Mac Peters",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all in one cohesive cross-cultural experience'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Hidden Dreams and CutiePie Tarot by Mac Peters' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/' },
        { hid: `og:description`, property: 'og:description', content: 'Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all in one cohesive cross-cultural experience.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: hiddenDreamsGuidebook }
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
  .button {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    border-radius: 25px;
    padding: 10px;
    background-color: #FF6;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .sub-nav-bar {
    margin-top: 40px;
  }
  .sub-nav {
    background-color: #897DF4;
    margin: 20px;
  }
  .sub-nav a {
    color: white;
    text-decoration: none;
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
    max-height: 450px;
    width: 80%;
    height: auto;
    margin: 10px;
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
    clear: both;
    height: 450px;
    padding: 0;
    padding-top: 10px;
    display: block;
  }
  .columns img {
    height: auto;
  }
  .columns div {
    padding: 10px;
  }
  .columns a {
    text-decoration: none;
    font-weight: bold;
  }
  .kickstarter-image {
    width: 400px;
    height: auto;
    padding: 5px;
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
    .columns {
      height: 450px;
    }

    #tarot-history {
      height: 1100px;
    }
  }
</style>
