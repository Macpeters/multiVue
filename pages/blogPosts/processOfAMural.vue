<template>
  <div>
    <navBar />

    <h1>The Process Behind the Hockey Bees Mural</h1>
    <h2>From Inception to Completion: My Mural Process</h2>
    <h3>July 6, 2018</h3>
    <div class="post">
      <p>
        As part of the Niagara International Mural Festival, I was asked to do a mural under the
        pedestrian bridge leading to the St. Catherines <a href="http://www.meridiancentre.com/">Meridian Center</a>. 
        The arena is a new sports and entertainment complex that is the home of the Niagara Ice Dogs, and has played
        host to a variety of sports and music events, such as the Tragically Hip, Elton John, and the Harlem Globetrotters.
      </p>
      <p>
        <span class="emphasize">The theme of the mural festival this year is insects, in order to raise awareness about the 
        <a href="https://www.nytimes.com/2018/05/26/opinion/sunday/insects-bugs-naturalists-scientists.html">disappearance of flying
        insects</a> </span> which are crucial to the survival of all life on earth. While there has been some recent recognition
        about the decline of bee populations, the rest of the insect world is also in sharp decline. Though small, their contribution
        to life is enormous.
      </p>

      <h4>Considering the Space</h4>
      <p>
        I wanted to incorporate the space itself in some way, so I played around with bugs playing hockey, 
        making music, drinking some of the <a href="https://wineriesofniagaraonthelake.com/our-wineries/">Niagara Region's famouse wine</a>. 
        It felt important to pay homage to the area. 
        <h4>3 Reasons to Consider the Location when Designing a Mural</h4> 
        <ul>
          <li><span class="emphasize">It's Public Art: intended for public viewing.</span>  This gives weight to the public perspective</li>
          <li><span class="emphasize">I want people to enjoy the art, and own it.</span>  Having the art recognize the space it's in, and the importance of that place
            can make it easier for people to accept it theirs, and hopefully take pride in it as part of their town.
          </li>
          <li><span class="emphasize">Considering the location is a great source of inspiration.</span>  I would never have thought to paint bugs 
            playing hockey, or a moth playing a saxophone.  That image only exists because of the space I was given 
            to paint it in.
          </li>
        </ul>
      </p>

      <span><img v-bind:src="hockeyBeesProgress" alt="From early sketches to the final mural" title="From early sketches to the final mural" /></span>

      <h4>Working with the Space</h4>
      <p>
        I could have taken measurements, but with stairs and railings in the way, there seemed an easier way to work with
        the actual dimensions of the space.  I <span class="emphasize">took a panoramic photo of the wall, imported that into my ipad, and just drew 
        right on top.</span>  This allowed me to adjust the opacity of my drawing so I could cut away the stairs, and ensure my 
        design would fit nicely.  I played around with how many characters I could fit in without things looking too cluttered,
        and worked them into a setting.
      </p>

      <p>
        A number of design elements came in sporatically, as I worked.  The hockey playing bugs were the last things I painted
        in that section - <span class="emphasize">those bugs only became bees after a number of passers-by referred to them as bees.</span>  
        Before that, they were intended to be just generic green bugs.   I ran out of the colours I was using for the sky behind the bees - rather
        than continue with an inexact match, I opted to have a different area of sky which was blue - the dandelion seeds were 
        added late - to continue the flow of the musical notes, add interest to the sky, and create a sense of calm breezyness. 
        Being from Toronto, <span class="emphasize">one of the things I love about visiting St. Catharine's is the calm, relaxing atmosphere.</span>
      </p>

      <p>If you look closely at the grapes and flower petals, especially compared with the original wall, with all the tags on it,
        you will see that <span class="emphasize">I made some use of the lines that were already there.</span> Those tags, reportedly created by some out of town
        traveller (sorry, I can't read it), were painted on top of a previous mural (the electric pizza and palm trees).  It is the 
        nature of grafitti and street art to be transitory, and also historical.  I had already decided to leave as much of the pizza mural 
        as remained.  When my first coat of red went on the flower, and I saw how the lines shone through, it seemed right to leave in that 
        bit of history, allowing those lines to determine the shadows of the flower petals.
      </p>
    </div>

  <contactBar/>
  </div>
</template>

<script>
  import hockeyBeesProgress from "../../assets/blogs/macpeters_hockeyBeesProgress.png";

  import navBar from '../../components/navBar.vue'
  import contactBar from '../../components/contactBar.vue'

  export default {
    name: "ProcessBehindHockeyBees",
    components: { navBar, contactBar },
    data() {
      return {
        hockeyBeesProgress: hockeyBeesProgress
      };
    }
};
</script>

<style scoped>
  .post {
    padding: 10px;
    width: 80%;
    line-height: 2em;
  }
  .emphasize {
    font-weight: bold;
  }
  img {
    padding-left: 5%;
    width: 90%;
  }
</style>
