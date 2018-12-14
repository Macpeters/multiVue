<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
  // Tapestries
  import alienLotus       from "../../assets/services/macpeters_alienLotus.png";
  import dreamscape       from "../../assets/services/macpeters_dreamscape.png";
  import dubfx            from "../../assets/services/macpeters_dubfx.png";
  import fishpond         from "../../assets/services/macpeters_fishpond.png";
  import mushroomDude     from "../../assets/services/macpeters_mushroomDude.png";
  import neonJungle       from "../../assets/services/macpeters_neonJungle.jpg";
  import noWorries        from "../../assets/services/macpeters_NoWorries.png";
  import potleafButterfly from "../../assets/services/macpeters_potleafButterfly.png";
  import reflectingFrog   from "../../assets/services/macpeters_reflectingFrog.png";
  import spiderAnt        from "../../assets/services/macpeters_spiderant.png";
  import treeOfLife       from "../../assets/services/macpeters_treeOfLife.png";
  import unicornSplash    from "../../assets/services/macpeters_unicornSplash.png";
  // Thumbnails
  import alienLotusThumb        from "../../assets/services/thumbnails/macpeters_alienLotus.png";
  import dreamscapeThumb        from "../../assets/services/thumbnails/macpeters_dreamscape.png";
  import dubfxThumb             from "../../assets/services/thumbnails/macpeters_dubfx.png";
  import fishpondThumb          from "../../assets/services/thumbnails/macpeters_fishpond.png";
  import mushroomDudeThumb      from "../../assets/services/thumbnails/macpeters_mushroomDude.png";
  import neonJungleThumb        from "../../assets/services/thumbnails/macpeters_neonJungle.jpg";
  import noWorriesThumb         from "../../assets/services/thumbnails/macpeters_NoWorries.png";
  import potleafButterflyThumb  from "../../assets/services/thumbnails/macpeters_potleafButterfly.png";
  import reflectingFrogThumb    from "../../assets/services/thumbnails/macpeters_reflectingFrog.png";
  import spiderAntThumb         from "../../assets/services/thumbnails/macpeters_spiderant.png";
  import treeOfLifeThumb        from "../../assets/services/thumbnails/macpeters_treeOfLife.png";
  import unicornSplashThumb     from "../../assets/services/thumbnails/macpeters_unicornSplash.png";
  // Components
  import imageList    from '../../components/art/imageList.vue'

  const base_keywords = "uv, blacklight reactive, psychedelic, tapestry, uv deco, blacklight party deco, blacklight art, ";
  export default {
  name: "ArtServices",
  components: { imageList },
  data() {
    return {
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
      chosenImage: null,
    };
  }
};
</script>


<style scoped>
</style>