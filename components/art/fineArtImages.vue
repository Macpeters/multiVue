<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
  // Images
  import baphomet     from "../../assets/fineArt/macpeters_baphomet.png";
  import blackStar    from "../../assets/fineArt/macpeters_blackStar.jpg";
  import bliss        from "../../assets/fineArt/macpeters_bliss.png";
  import compassion from "../../assets/fineArt/macpeters_compassion.jpg";
  import cosmicDancer from "../../assets/fineArt/macpeters_cosmicDancer.png";
  import cosmicKitten from "../../assets/fineArt/macpeters_cosmicKitten.png";
  import cracking     from "../../assets/fineArt/macpeters_crackingUnderThePressure.png";
  import eagerness    from "../../assets/fineArt/macpeters_eagerness.png";
  import eyeOfStorm    from "../../assets/fineArt/macpeters_eyeOfStorm.png";
  import fascination  from "../../assets/fineArt/macpeters_fascination.png";
  import serenity     from "../../assets/fineArt/macpeters_serenity.png";
  import selfPortrait from "../../assets/fineArt/macpeters_selfPortrait.png";
  import shpongle     from "../../assets/fineArt/macpeters_shpongle.png";
  import stubborn     from "../../assets/fineArt/macpeters_stubbornResentment.png";

  // Thumbs
  import baphomet_thumb     from "../../assets/fineArt/thumbnails/macpeters_baphomet.png";
  import blackStar_thumb    from "../../assets/fineArt/thumbnails/macpeters_blackStar.png";
  import bliss_thumb        from "../../assets/fineArt/thumbnails/macpeters_bliss.png";
  import compassion_thumb from "../../assets/fineArt/thumbnails/macpeters_compassion.png";
  import cosmicDancer_thumb from "../../assets/fineArt/thumbnails/macpeters_cosmicDancer.png";
  import cosmicKitten_thumb from "../../assets/fineArt/thumbnails/macpeters_cosmicKitten.png";
  import cracking_thumb     from "../../assets/fineArt/thumbnails/macpeters_crackingUnderThePressure.png";
  import eagerness_thumb    from "../../assets/fineArt/thumbnails/macpeters_eagerness.png";
  import eyeOfStorm_thumb    from "../../assets/fineArt/thumbnails/macpeters_eyeOfStorm.jpg";
  import fascination_thumb  from "../../assets/fineArt/thumbnails/macpeters_fascination.png";
  import serenity_thumb     from "../../assets/fineArt/thumbnails/macpeters_serenity.png";
  import selfPortrait_thumb from "../../assets/fineArt/thumbnails/macpeters_selfPortrait.jpg";
  import shpongle_thumb     from "../../assets/fineArt/thumbnails/macpeters_shpongle.png";
  import stubborn_thumb     from "../../assets/fineArt/thumbnails/macpeters_stubbornResentment.png";
  // Components
  import imageList    from '../../components/art/imageList.vue'

  const base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "

  export default {
    name: "Art",
    components: { imageList},
    data() {
      return {
        images: [
          {
            image: compassion,
            thumb: compassion_thumb,
            title: "Compassion",
            subtitle: "30x30 UV Acrylic on canvas",
            description: "The Creator Spirit of Compassion, Wisdom, and Love, arms wrapped around the world",
            keywords: base_keywords + 'god, creative force, 4 elements, earth protector, 7 eyes'
          },
          {
            image: blackStar,
            thumb: blackStar_thumb,
            title: "Black Star",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Authentic human connection is a treasure worth the risk, worth the price, and worth the heartache.  You have to take that leap of faith, or wind up among the tortured souls who never managed to reach out.",
            keywords: base_keywords + 'leap of faith, wish upon a black star, hope, taking action, reaching out, running towards the light'
          },
          {
            image: cosmicDancer,
            thumb: cosmicDancer_thumb,
            title: "Cosmic Dancer",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Dancing just to feel the life and movement of the music of existence",
            keywords: base_keywords + 'feeling it, dancing, movement, soul, neon, lights, sparkle, glow, dance, universe, lasers, music, in the moment'
          },
           {
            image: serenity,
            thumb: serenity_thumb,
            title: "Serenity",
            subtitle: "30x30 UV Acrylic on canvas",
            description: "A tiny sea monster, relaxing in the ebb and flow of of soft bubbly water",
            keywords: base_keywords + 'serene, calm, floating, dragon, ocean, underwater, watery, dripping, bubbles, mythical, beast'
          },
          {
            image: selfPortrait,
            thumb: selfPortrait_thumb,
            title: "Self Portrait",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Self portrait, painted at COSM, 2018",
            keywords: base_keywords + 'self-portrait, mushrooms, squatting man, plants, paintbrushes, gargoyles, bubbles'
          },
          {
            image: cosmicKitten,
            thumb: cosmicKitten_thumb,
            title: "Cosmic Kitten",
            subtitle: "24x24 UV Acrylic on canvas",
            description: "Kitten enjoys the journey, the spectacle, the festival of creation through space and time",
            keywords: base_keywords + 'space, cosmos, kitten, cosmic, galaxies, universe, festival, edm, trippy, cat, kitten, space cat'
          },
          {
            image: eyeOfStorm,
            thumb: eyeOfStorm_thumb,
            title: "Be the Eye of Your Storm",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Stoic and calm, the frog sees the storm, is in the storm, but is not of the storm",
            keywords: base_keywords + 'frog, tornado, storm, stoic, composed, calm of the storm, eye of the storm, calm within'
          },
          {
            image: baphomet,
            thumb: baphomet_thumb,
            title: "Baphomet - Magic Mushroom Magician",
            subtitle: "24x24 UV Acrylic on canvas",
            description: "Floating above the golden city that sits on the edge of the Amethyst Mountains, young Baphomet pays no mind to the dance of mortals, for he is filled with the light of the Universe. This piece is what I'm referring to as 'living art', because I haven't varnished it, and I don't plan to until it sells.  I find if I have art around for a little while, I start noticing things I'd like to change, because I've learned new tricks since then.  If I don't varnish the piece, I feel I have the option of going back and updating old art, so it stays interesting to me.  Maybe I'll ruin it, next time I touch it.  Who knows?  If you like how it looks right now, contact me for purchasing.",
            keywords: base_keywords + 'baphomet, goat, magician, wonder, magick, magic mushroom, wizardry, horns, horned beast, universal power, universal wonder, inner power, galaxies, otherworldly, glass mushroom, amethyst crystal, seaside city, stone city'
          },
          {
            image: fascination,
            thumb: fascination_thumb,
            title: "Fascination",
            subtitle: "24x24 UV Acrylic on canvas",
            description: "Behold the biodiversity of this alien crystalline planet.  What wonders it might hold!",
            keywords: base_keywords + 'white squirrel, butterfly, bubbles, crystals, crystal mountain, cloud faces, long tail, furry animal, cute animal, leafy, water, calm water, flying, serpent, snake skin, sparkle, drops'
          },
          {
            image: cracking,
            thumb: cracking_thumb,
            title: "Cracking Under the Pressure",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Intense pressure and stress mean that you've outgrown your shell - when it cracks, you are free to grow a new one.  Check out Twerski on stress for a neat talk.",
            keywords: base_keywords + "crystal, cracked, pressure, anger, rage, breaking, growth, transformation, seething, fractured, reflection, crystals, bubbles, perspectives, shards, metatrons cube, sacred geometry, darkness, light"
          },
          {
            image: bliss,
            thumb: bliss_thumb,
            title: "Bliss",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "As a jellyfish, Bliss has no weight, and no resistance to the changing currents of the world. He enjoys every ripple to the fullest extent.",
            keywords: base_keywords + "monster, jellyfish, bliss, happiness, higher realms, joy, comfort, go with the flow, enjoyment, weightlessness, smiling, free, nirvana, heavenly"
          },
          {
            image: eagerness,
            thumb: eagerness_thumb,
            title: "Eagerness",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "Eagerness has his eye on a treat, and is in a hurry to get a taste of it.",
            keywords: base_keywords + "monster, feels monster, emotional, eager, wanting, longing, craving, drive, driving force, excitement, tentacles, eyeball, long tongue, long tail, stripes, pink and green"
          },
          {
            image: stubborn,
            thumb: stubborn_thumb,
            title: "Stubborn Resentment",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "He has had just about enough.  Careful you don't push him too far, as he's liable to lash out.",
            keywords: base_keywords + "monster, underwater, cavern, cave, stubborn, resentment, amusing, fishy, pearlescent, unhappy, bitter, hurt, grumpy, rocks, tunnel, wrinkles"
          },
          {
            image: shpongle,
            thumb: shpongle_thumb,
            title: "Dancing With the Universe AKA Shpongle: Codex 6",
            subtitle: "18x18 UV Acrylic on canvas",
            description: "You are the Universe enjoying a dance through one timeline from one perspective, and the Universe is watching your dance, and everyone else's, experiencing itself in every way",
            keywords: base_keywords + "shpongle, psytrance, goa, codex6, codex 6, album art, cover art, universe, watching itself, self observation, meta, self referencing, feather, feather pen, dancing, clay, clay bodies, veiny, space, stars, forever, earth, life, path of enlightenment, from the earth, logos, the word"
          }
        ],
        chosenImage: null,
      };
    }
  };
</script>

<style scoped></style>
