<template>
  <article>
    <h1>A Look Back - 2017</h1>
    <section>
      The end of the year is a great time to take stock of accomplishments and experiences worth remembering. Here's 
      a quick recap of 2017.
      Follow me on Instagram for more pics: 
      <a href="https://www.instagram.com/macpetersart/" target="_blank">https://www.instagram.com/macpetersart/</a>
    </section>

    <section>
      <h2>New Ventures</h2>
      <ul>
        <li>
          <h3>Public Shows</h3>
            From the Freedom Factory, to Artusiasm, Dirty Talk, and Kensington Market's Pedestrian Sunday, I spent a lot 
            of time showing art this year.  I tried to have something happening every month to keep it going strong.  I met
            a lot of other artists, and had some great conversations.
        </li>
         <li>
          <h3>Prints</h3>
            I finally got around to getting some art printed up - I have some giclee prints, stickers, buttons, and magnets. This
            went hand-in-hand with all the public showings - many people aren't out to buy new original art at one of those
            tradeshow style events, but they'll take a button or a print.  It also makes for a more interesting, lightweight display.
        </li>
        <li>
          <h3>Daily Drawing</h3>
            When I first started to draw, I drew all the time.  Somewhere along the way, I must have lost interest.  Not drawing
            has been hurting my art in every way, so I resolved to get back to drawing.  The goal was to draw every day, and while
            I didn't manage that, exactly, I got pretty close.  
        </li>
        <li>
          <h3>Art As Prayer</h3>
            I took this workshop at <a href="https://www.cosm.org/" target="_blank">COSM</a> - led by 
            <a href="https://www.allofthisisforyou.com/sb.html" target="_blank">Randal Roberts</a> 
            and <a href="https://www.morganmandala.com/" target="_blank">Morgan Mandalla</a>.  They are both super awesome, 
            down to earth people, and in the gentlest way possible, they pushed me.  That workshop was a struggle 
            that forced me to grow a lot - both as an artist, and as a person.  
        </li>
      </ul>
    </section>

    <section>
      <h2>Projects</h2>
       <ul>
        <li>
          <h3>Feels Monsters</h3> 
            I started the first one early in the year - a series of 30X30 paintings with one monster being 
            the personification of a specific emotional state.   They are meant to be bright, and cute, but also
            super relateable.  This year I did 3 Feels Monsters: Eagerness, Bliss, and Stubborn Resentment.
        </li>
        <li>
          <h3>Digital Vectors</h3>
            I started digifying some of my sketches, turning them into vector art.  I've done a bit of vector art before, 
            but not from a sketch.  I discovered that the small and free but still very powerful <a href="https://inkscape.org/" target="_blank">Inkscape</a> has the ability 
            to trace a bitmap image, which is fantastic.  
        </li>
      </ul>
    </section>

    <span><img v-bind:src="eagerness" alt="Eagerness by Macpeters" title="Eagerness by Macpeters" /></span>

    <section>
      <h2><a href="/art/fineArt" title="Paintings">Paintings</a></h2>
      <ul>
        <li>Mushroom Dude</li>
        <li>Eagerness</li>
        <li>Bliss</li>
        <li>Stubborn Resentment</li>
        <li>Shpongle - Dancing with the Universe</li>
        <li>Cracking Under the Pressure</li>
        <li>Masked Fear</li>
        <li>Mischief</li>
        <li>Magic Mushroom (mural)</li>
        <li>Super Friends (skateboard deck)</li>
        <li>Gratitude</li>
        <li>Octo-buddy (mural)</li>
        <li>Star Bird</li>
        <li>Love Bird</li>
        <li>Monsterball</li>
        <li>Fascination</li>
      </ul>
    </section>

    <section>
      <div class="previous"><a href="/blogPosts/aLookBack2016">Recap 2016</a></div>
      <div class="next"><a href="/blogPosts/aLookBack2018">Recap 2018</a></div>
    </section>
  </article>
</template>

<script>
  import eagerness  from "../../assets/fineArt/macpeters_eagerness.png";

  export default {
     data() {
      return {
        eagerness: eagerness
      };
    }
  };
</script>

<style scoped>
  section {
    text-align: left;
    padding: 10px;
  }

  li {
    list-style: none;
    padding: 5px;
  }

  img {
    width: 40%;
  }

  .previous {
    float: left;
    display: inline-block;
  }
  .next {
    float: right;
    display: inline-block;
  }
</style>
