<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
  // Images
  import baphomet_uv      from "../../assets/fineArtUv/macpeters_baphomet_uv.png";
  import bliss_uv         from "../../assets/fineArtUv/macpeters_bliss_uv.png";
  import cosmicDancer_uv  from "../../assets/fineArtUv/macpeters_cosmicDancer_uv.png";
  import cosmicKitten_uv  from "../../assets/fineArtUv/macpeters_cosmicKitten_uv.png";
  import cracking_uv      from "../../assets/fineArtUv/macpeters_cracking_uv.png";
  import eagerness_uv     from "../../assets/fineArtUv/macpeters_eagerness_uv.png";
  import eyeOfStorm_uv    from "../../assets/fineArtUv/macpeters_eyeOfStorm_uv.png";
  import fascination_uv   from "../../assets/fineArtUv/macpeters_fascination_uv.png";
  import serenity_uv      from "../../assets/fineArtUv/macpeters_serenity_uv.png";
  import selfPortrait_uv  from "../../assets/fineArtUv/macpeters_selfPortrait_uv.png";
  import shpongle_uv      from "../../assets/fineArtUv/macpeters_shpongle_uv.png";
  import stubborn_uv      from "../../assets/fineArtUv/macpeters_stubbornResentment_uv.png";
  // Thumbs
  import baphomet_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_baphomet_uv.png";
  import bliss_uv_thumb         from "../../assets/fineArtUv/thumbnails/macpeters_bliss_uv.png";
  import cosmicDancer_uv_thumb  from "../../assets/fineArtUv/thumbnails/macpeters_cosmicDancer_uv.png";
  import cosmicKitten_uv_thumb  from "../../assets/fineArtUv/thumbnails/macpeters_cosmicKitten_uv.png";
  import cracking_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_cracking_uv.png";
  import eagerness_uv_thumb     from "../../assets/fineArtUv/thumbnails/macpeters_eagerness_uv.png";
  import eyeOfStorm_uv_thumb    from "../../assets/fineArtUv/thumbnails/macpeters_eyeOfStorm_uv.png";
  import fascination_uv_thumb   from "../../assets/fineArtUv/thumbnails/macpeters_fascination_uv.png";
  import serenity_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_serenity_uv.png";
  import selfPortrait_uv_thumb  from "../../assets/fineArtUv/thumbnails/macpeters_selfPortrait_uv.jpg";
  import shpongle_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_shpongle_uv.png";
  import stubborn_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_stubbornResentment_uv.png"; 
  // Components
  import imageList    from '../../components/art/imageList.vue'

  const base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "

  export default {
    name: "Art",
    components: { imageList },
    data() {
      return {
        images: [
          {
            image: cosmicDancer_uv,
            thumb: cosmicDancer_uv_thumb,
            title: "Cosmic Dancer",
            subtitle: "30x30 UV Acrylic on canvas",
            description:  "A tiny sea monster, relaxing in the ebb and flow of of soft bubbly water",
            keywords: base_keywords + 'serene, calm, floating, dragon, ocean, underwater, watery, dripping, bubbles, mythical, beast'
          },
          {
            image: serenity_uv,
            thumb: serenity_uv_thumb,
            title: "Serenity",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Dancing just to feel the life and movement of the music of existence",
            keywords: base_keywords + 'feeling it, dancing, movement, soul, neon, lights, sparkle, glow, dance, universe, lasers, music, in the moment'
          },
          {
            image: selfPortrait_uv,
            thumb: selfPortrait_uv_thumb,
            title: "Self Portrait",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Self Portrait painted at COSM, 2018",
            keywords: base_keywords + 'self-portrait, mushrooms, squatting man, plants, paintbrushes, gargoyles, bubbles'
          },
          {
            image: cosmicKitten_uv,
            thumb: cosmicKitten_uv_thumb,
            title: "Cosmic Kitten",
            subtitle: "24x24 UV Acrylic on canvas",
            description: "Kitten enjoys the journey, the spectacle, the festival of creation through space and time",
            keywords: base_keywords + 'space, cosmos, kitten, cosmic, galaxies, universe, festival, edm, trippy, cat, kitten, space cat'
          },
          {
            image: eyeOfStorm_uv,
            thumb: eyeOfStorm_uv_thumb,
            title: "Be the Eye of Your Storm",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Stoic and calm, the frog sees the storm, is in the storm, but is not of the storm",
            keywords: base_keywords + 'frog, tornado, storm, stoic, composed, calm of the storm, eye of the storm, calm within'
          },
          {
            image: shpongle_uv,
            thumb: shpongle_uv_thumb,
            title: "Dancing With the Universe AKA Shpongle: Codex 6",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "You are the Universe enjoying a dance through one timeline from one perspective, and the Universe is watching your dance, and everyone else's, experiencing itself in every way",
            keywords: base_keywords + "shpongle, psytrance, goa, codex6, codex 6, album art, cover art, universe, watching itself, self observation, meta, self referencing, feather, feather pen, dancing, clay, clay bodies, veiny, space, stars, forever, earth, life, path of enlightenment, from the earth, logos, the word"
          },
          {
            image: baphomet_uv,
            thumb: baphomet_uv_thumb,
            title: "Baphomet - Magic Mushroom Magician",
            subtitle: "24x24 UV Acrylic on canvas",
            description: "Floating above the golden city that sits on the edge of the Amethyst Mountains, young Baphomet pays no mind to the dance of mortals, for he is filled with the light of the Universe. This piece is what I'm referring to as 'living art', because I haven't varnished it, and I don't plan to until it sells.  I find if I have art around for a little while, I start noticing things I'd like to change, because I've learned new tricks since then.  If I don't varnish the piece, I feel I have the option of going back and updating old art, so it stays interesting to me.  Maybe I'll ruin it, next time I touch it.  Who knows?  If you like how it looks right now, contact me for purchasing.",
            keywords: base_keywords + 'baphomet, goat, magician, wonder, magick, magic mushroom, wizardry, horns, horned beast, universal power, universal wonder, inner power, galaxies, otherworldly, glass mushroom, amethyst crystal, seaside city, stone city'
          },
           {
            image: fascination_uv,
            thumb: fascination_uv_thumb,
            title: "Fascination",
            subtitle: "24x24 UV Acrylic on canvas",
            description: "Behold the biodiversity of this alien crystalline planet.  What wonders it might hold!",
            keywords: base_keywords + 'white squirrel, butterfly, bubbles, crystals, crystal mountain, cloud faces, long tail, furry animal, cute animal, leafy, water, calm water, flying, serpent, snake skin, sparkle, drops'
          },
          {
            image: cracking_uv,
            thumb: cracking_uv_thumb,
            title: "Cracking Under the Pressure",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Intense pressure and stress mean that you've outgrown your shell - when it cracks, you are free to grow a new one.  Check out Twerski on stress for a neat talk.",
            keywords: base_keywords + "crystal, cracked, pressure, anger, rage, breaking, growth, transformation, seething, fractured, reflection, crystals, bubbles, perspectives, shards, metatrons cube, sacred geometry, darkness, light"
          },
          {
            image: bliss_uv,
            thumb: bliss_uv_thumb,
            title: "Bliss",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "As a jellyfish, Bliss has no weight, and no resistance to the changing currents of the world. He enjoys every ripple to the fullest extent.",
            keywords: base_keywords + "monster, jellyfish, bliss, happiness, higher realms, joy, comfort, go with the flow, enjoyment, weightlessness, smiling, free, nirvana, heavenly"
          },
          {
            image: eagerness_uv,
            thumb: eagerness_uv_thumb,
            title: "Eagerness",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Eagerness has his eye on a treat, and is in a hurry to get a taste of it.",
            keywords: base_keywords + "monster, feels monster, emotional, eager, wanting, longing, craving, drive, driving force, excitement, tentacles, eyeball, long tongue, long tail, stripes, pink and green"
          },
          {
            image: stubborn_uv,
            thumb: stubborn_uv_thumb,
            title: "Stubborn Resentment",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "He has had just about enough.  Careful you don't push him too far, as he's liable to lash out.",
            keywords: base_keywords + "monster, underwater, cavern, cave, stubborn, resentment, amusing, fishy, pearlescent, unhappy, bitter, hurt, grumpy, rocks, tunnel, wrinkles"
          },
        ],
        chosenImage: null,
      };
    }
  };
</script>

<style scoped></style>
