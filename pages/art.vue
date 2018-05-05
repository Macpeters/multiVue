<template>
  <div>
    <h1>Macpeters: Fine Art</h1>
    <h2>Visionary Psychedelic Blacklight Paintings</h2>

    <div class="page-description">
      I often work with a mixture of airbrush and brush paint, and I'll start with base (not blacklight/uv reactive) colours, moving onto neon once I have the basic structure in place.
      Orbs and crystals are an ongoing theme for me these days.
      <p>I've been working on <a href="./art/cartoons.html">cartoons</a>, recently, if you are interested in checking them out.</p>
    </div>

    <imageList/>

  </div>
</template>

<script>
import baphomet from "../assets/fineArt/macpeters_baphomet.png";
import fascination from "../assets/fineArt/macpeters_fascination.png";
import imageList from '../components/imageList.vue'

const base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "

export default {
  name: "Art",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: baphomet,
          title: "Baphomet - Magic Mushroom Magician",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Floating above the golden city that sits on the edge of the Amethyst Mountains, young Baphomet pays no mind to the dance of mortals, for he is filled with the light of the Universe. This piece is what I'm referring to as 'living art', because I haven't varnished it, and I don't plan to until it sells.  I find if I have art around for a little while, I start noticing things I'd like to change, because I've learned new tricks since then.  If I don't varnish the piece, I feel I have the option of going back and updating old art, so it stays interesting to me.  Maybe I'll ruin it, next time I touch it.  Who knows?  If you like how it looks right now, contact me for purchasing.",
          keywords: base_keywords + 'baphomet, goat, magician, wonder, magick, magic mushroom, wizardry, horns, horned beast, universal power, universal wonder, inner power, galaxies, otherworldly, glass mushroom, amethyst crystal, seaside city, stone city'
        },
        {
          image: fascination,
          title: "Fascination",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Behold the biodiversity of this alien crystaline planet.  What wonders it might hold!",
          keywords: base_keywords + 'white squirrel, butterfly, bubbles, crystals, crystal mountain, cloud faces, long tail, furry animal, cute animal, leafy, water, calm water, flying, serpent, snake skin, sparkle, drops'
        }
      ],
      chosenImage: null
    };
  },
  build: {
    assetsPublicPath: "/",
    assetsSubDirectory: "assets"
  }
};
</script>

<style scoped>

</style>
