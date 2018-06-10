<template>
  <div>
    <navBar />
    
    <h1>Macpeters: Art Services</h1>
    
    <breadcrumbs/>

    <div class="shop-buttons">
      <span class="first-row">
        <span class="btn"><a href="#livePainting" title="Live Painting">Live Painting</a></span>
        <span class="btn"><a href="#deco" title="Blacklight Deco">Blacklight Deco</a></span>
      </span>
      <span class="second-row">
        <span class="btn"><a href="#tapestries" title="UV Tapestry Rentals">UV Tapestry Rental</a></span>
        <span class="btn"><a href="#toys" title="Blacklight Party Crafting">Blacklight Party Crafting</a></span>
      </span>
    </div>

    <div class="art-gallery">
      <!-- Live Painting -->
      <div>
        <h2 id="livePainting">Live Painting</h2>
        <div class="page-description">
          <p> Give your guests the opportunity to see art in action.  I will produce a painting at your event, 
              on any theme of your choosing.  I have painted at drum circles, outdoor festivals, and 
              charity events such as Art For Heart at Workman Arts.  People enjoy seeing the process and
              watching art come to life.  Paintings can be done slowly over a weekend, or timeboxed to 
              20 or 60 minutes.</p>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IlvqReXgE-I" frameborder="0" allow="autoplay; encrypted-media" gesture="media" allowfullscreen></iframe>
          <hr />
        </div>
      </div>
      
      <!-- Deco -->
      <div>
        <h2 id="deco">UV/Blacklight Deco</h2>
        <div class="page-description">
          <p>Make your event magical with blacklight reactive deco.  Kids and Adults alike can enjoy
            the beauty and magic of glowing blacklight decor.  It's great for birthdays, sweet sixteens,
            and weddings.</p>    
        </div>
        <div class="featured-image">
          <img v-bind:src="deco" alt="Macpeters Blacklight Deco" title="Macpeters Blacklight Deco" />
          <hr />
        </div>
      </div>
      
      <!-- Tapestries -->
      <div>
        <h2 id="tapestries">UV/Blacklight Reactive Tapestry Rentals</h2>
        <div class="page-description">
          <p> These are painted on loose canvas, and can be rolled up and brought to outdoor festivals, blacklight events, and park outings. 
            The pieces are of varying sizes, and can be arranged according to the space.  Each painting is fitted with grommets for easy hanging.
            These are positive, friendly, conscious artworks that have graced the walls of electronic parties and events in Toronto, for Squid Lid 
            at Zion Lounge, Soul Movement at Temple 23, Acid Reign Productions at the Velvet Underground, TdotLove at Bassline Bar, and House of 
            Dust's 'Body Light' event.  Psytrance, Dubstep, and Drum and Bass events are more memorable and photo worthy when they are beautified 
            with these glowing colours.</p>
        </div>
        <imageList/>
        <hr />
      </div>

      <!-- Crafting -->
      <div>
        <h2 id="toys">Blacklight Party Crafting</h2>
        <div class="page-description">
          <p> A great way to make your event memorable is to give your guests the opportunity to create something themselves to take home as a souvenir.  
              Using low cost materials, a number of fun crafts and artworks can be made under the magical glow of UV light.  I can provide materials, instruction, 
              and encouragement to help your guests enjoy themselves on any occasion.  Kid-friendly materials such as pipecleaners and string make these activities 
              great for all ages. </p>
        </div>
        <div class="featured-image">
          <img v-bind:src="crafts" alt="Macpeters Blacklight Crafting" title="Macpeters Blacklight Crafting" />
        </div>
      </div>
 
      <contactBar/>
    </div>

  </div>
</template>

<script>
  // Images
  import deco from "../assets/services/macpeters_uv_deco.png";
  import crafts from "../assets/services/macpeters_uv_crafts.png";
  // Tapestries
  import alienLotus from "../assets/services/macpeters_alienLotus.png";
  import dreamscape from "../assets/services/macpeters_dreamscape.png";
  import dubfx from "../assets/services/macpeters_dubfx.png";
  import fishpond from "../assets/services/macpeters_fishpond.png";
  import mushroomDude from "../assets/services/macpeters_mushroomDude.png";
  import neonJungle from "../assets/services/macpeters_neonJungle.jpg";
  import noWorries from "../assets/services/macpeters_NoWorries.png";
  import potleafButterfly from "../assets/services/macpeters_potleafButterfly.png";
  import reflectingFrog from "../assets/services/macpeters_reflectingFrog.png";
  import spiderAnt from "../assets/services/macpeters_spiderant.png";
  import treeOfLife from "../assets/services/macpeters_treeOfLife.png";
  import unicornSplash from "../assets/services/macpeters_unicornSplash.png";
  // Thumbnails
  import alienLotusThumb from "../assets/services/thumbnails/macpeters_alienLotus.png";
  import dreamscapeThumb from "../assets/services/thumbnails/macpeters_dreamscape.png";
  import dubfxThumb from "../assets/services/thumbnails/macpeters_dubfx.png";
  import fishpondThumb from "../assets/services/thumbnails/macpeters_fishpond.png";
  import mushroomDudeThumb from "../assets/services/thumbnails/macpeters_mushroomDude.png";
  import neonJungleThumb from "../assets/services/thumbnails/macpeters_neonJungle.jpg";
  import noWorriesThumb from "../assets/services/thumbnails/macpeters_NoWorries.png";
  import potleafButterflyThumb from "../assets/services/thumbnails/macpeters_potleafButterfly.png";
  import reflectingFrogThumb from "../assets/services/thumbnails/macpeters_reflectingFrog.png";
  import spiderAntThumb from "../assets/services/thumbnails/macpeters_spiderant.png";
  import treeOfLifeThumb from "../assets/services/thumbnails/macpeters_treeOfLife.png";
  import unicornSplashThumb from "../assets/services/thumbnails/macpeters_unicornSplash.png";
  // Components
  import imageList from '../components/imageList.vue'
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'
  import breadcrumbs from '../components/breadcrumbs.vue'

  const base_keywords = "uv, blacklight reactive, psychedelic, tapestry, uv deco, blacklight party deco, blacklight art, ";
  export default {
  name: "ArtServices",
  components: { navBar, contactBar, imageList, breadcrumbs },
  data() {
    return {
      deco: deco,
      crafts: crafts,
      images: [
        {
          image: alienLotus,
          thumb: alienLotusThumb,
          title: "Alien Lotus",
          description: "Two beings share a moment of connection above a lotus flower as the universe swirls around them",
          keywords: "alien, lotus flower, eye contact, connection, swirls"
        },
        {
          image: dreamscape,
          thumb: dreamscapeThumb,
          title: "Dreamscape",
          description: "Six minds are connected around a flower of life with a shared consciousness",
          keywords: "universal consciousness, source, all connected, shared ideas, community, universal connection, univeral awareness"
        },
        {
          image: dubfx,
          thumb: dubfxThumb,
          title: "DubFX",
          description: "2X2 feet - I'm a big fan of his music - spreading love and good vibes with strength and authenticity, and mad vocal skills.",
          keywords: "dubfx, music, beatbox, soul"
        },
        {
          image: fishpond,
          thumb: fishpondThumb,
          title: "Fishpond",
          description: "Just looking at this piece can evoke the calm feel of sitting next to a pond on a sunny afternoon listening to the water lapping against the banks.",
          keywords: "fish, frog, pond, nature, water, symmetry, sacred geometry, flower of life, cattail"
        },
        {
          image: mushroomDude,
          thumb: mushroomDudeThumb,
          title: "Mushroom Dude",
          description: "2X2 feet - The spirit of the mushroom, guiding you on your journey, reminds you to take the time to care for yourself.",
          keywords: "mushroom, journey, spirit guide, teacher, magic mushroom, psilocybin, cubensis, waterfall, taking care of yourself, self care"
        },
        {
          image: neonJungle,
          thumb: neonJungleThumb,
          title: "Neon Jungle",
          description: "This piece is extra large - 9X12 feet",
          keywords: "forest spirit, frogs, pond, sacred geometry, starry sky, jungle, forest, plant guardian"
        },
        {
          image: noWorries,
          thumb: noWorriesThumb,
          title: "No Worries",
          description: "The spirit of the mushroom will share your mind for a time.",
          keywords: "magic mushroom, worry free, mushroom guide, teacher, shared mind, friendly, spirit, consciousness"
        },
        {
          image: potleafButterfly,
          thumb: potleafButterflyThumb,
          title: "Potleaf Butterfly",
          description: "Sorry, This piece in not available. This was a commision for a glass blower with a head shop.",
          keywords: "pot, marijuana, high art, high times, dooby, sativa, indica, butterfly, wings"
        },
        {
          image: reflectingFrog,
          thumb: reflectingFrogThumb,
          title: "Reflecting Frog",
          description: "The Frog is one of my power animals.  It lives in two worlds yet belongs to neither.",
          keywords: "juicy, frog, dripping, wet mouth, hypnotism, hypnotoad, reflection, symmetry"
        },
        {
          image: spiderAnt,
          thumb: spiderAntThumb,
          title: "Spider Ant",
          description: "Sorry, this piece is not available.  It was stolen off the wall at the Green Room (Poor Alex Theatre).",
          keywords: "ant, spider, web, heart, mushrooms, insecticide, love"
        },
        {
          image: treeOfLife,
          thumb: treeOfLifeThumb,
          title: "Tree of Life",
          description: "The white paint on the trunk of the Tree of Life only shows under blacklight, so this one is like having 2 different paintings.  Sorry, this tapestry has been sold and is no longer available.",
          keywords: "tree of life, life tree, world tree"
        },
        {
          image: unicornSplash,
          thumb: unicornSplashThumb,
          title: "Unicorn Splash",
          description: "The wheel of Unicorn Fortunes turns.  Feel the rainbow, see the magic",
          keywords: "unicorn, rainbow, grass, butterfly, starry night, sunbeam, splash, water"
        }
      ],
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art', name: 'Art Services' }
      ],
      chosenImage: null
    };
  },
  head () {
    return {
      title: "Macpeters Live Art and Commission Services",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artservicesDescription', name: 'description', content: 'Artistic Services offered by Mac Peters include Live Painting, Murals and Wall Art, Tapestry Rentals, and UV/Blacklight Crafting'},
        { hid: 'artservicesAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Live Art and Commission Services' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/artservices/' },
        { hid: `og:description`, property: 'og:description', content: 'Artistic Services offered by Mac Peters include Live Painting, Murals and Wall Art, Tapestry Rentals, and UV/Blacklight Crafting' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: deco }
      ]
    }
  }
};
</script>


<style scoped>
  p {
    padding: 10px;
  }
  div {
    text-align: center
  }

  /* nav */
  .shop-buttons {
    padding: 10px;
  }
  .btn {
    border-radius: 25px;
    padding: 10px;
    margin-left: 5px;
    background-color: #ccc;
  }
  .btn a {
    text-decoration: none;
    color: #000
  }

  /* images */
  .featured-image {
    max-height: 500px;
  }
  .featured-image img {
    max-width: 100%; 
    height: auto;
  }

  @media screen and (max-width: 450px){
    .first-row {
      display: block;
      margin-bottom: 25px;
    }
  }
</style>