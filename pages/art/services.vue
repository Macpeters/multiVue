<template>
  <div>
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
        <uvTapestries/>
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
    </div>

    <blogList/>

  </div>
</template>

<script>
  // Images
  import deco from "../../assets/services/macpeters_uv_deco.png";
  import crafts from "../../assets/services/macpeters_uv_crafts.png";
  // Components
  import uvTapestries from '../../components/art/uvTapestries.vue'
  import breadcrumbs from '../../components/breadcrumbs.vue'
  // Blog
  import blogList from '../../components/blog.vue'

  export default {
  name: "ArtServices",
  components: { uvTapestries, breadcrumbs, blogList },
  data() {
    return {
      deco: deco,
      crafts: crafts,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art', name: 'Art Services' }
      ],
      blogFilter: 'blacklight'
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