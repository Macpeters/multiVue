<template>
  <article>
    <h1>A Look Back - 2018</h1>
    <section>
      It's December 31, 2018, and it seems like a great time to take a look back at the past year, and 
      see what I've been up to, maybe think about what I'd like to do or experience in the coming year.  Take
      a look at my Instagram for more pics: 
      <a href="https://www.instagram.com/macpetersart/" target="_blank">https://www.instagram.com/macpetersart/</a>
    </section>

    <section>
      <h2>New Ventures</h2>
      <ul>
        <li>
          <h3>Digital Paintings</h3>
            I've broken free of the physical world and taken my drawings into pixel land - it took a bit of getting 
            used to, but I've really begun to enjoy digital drawing/painting - for the colours, the cleanliness, and
            the ability to use layers and opacity. Almost all my drawings this year have been digital - from quick sketches
            to full fledged paintings.
        </li>
        <li>
          <h3><a href="/art/drawings" title="Drawings">Drawings</a></h3>
            It is said that 80% of the learning you do in a drawing happens in the first 20% of that drawing, and that
            to draw better, you should spend more time drawing quick sketches, rather than focussing the majority of your
            time on details.  To that end, I have been trying to focus my learning energy on quick sketches - cartoons, really.
            My attention has been on colour, tone, composition, and form - all the fundamentals.  I really think it's 
            been working for me, so I have every intention of continuing to do this.  
        </li>
        <li>
          <h3>Animation</h3>
            As part of my work in cartoons and quick sketches, I've been trying my hand at a little bit of animation.  I haven't
            taken any classes, and I really have no idea what I'm doing, but it's still pretty fun. 
            <a href="https://www.youtube.com/watch?v=giQZ5PrCKCM">Watch a quick video on Youtube</a> 
            Even if I never become a great animator, the very act of trying to animate is giving me a fresh perspective on 
            movement, which can hopefully make all my future art more dynamic and alive. 
        </li>
               
        <li>
          <h3>Live painting - <a href="https://www.facebook.com/events/578013875884326/">Art for Heart</a></h3>
            I have done a bit of live painting, on the street or in a part, but this was the first time I painted in front
            of an audience.  It was both thrilling and nerve wracking.  We all had a limited amount of time to paint whatever
            we wanted.  I found the biggest challenge was the fact that I usually add layers on top of dry paint, but there wasn't
            enough time to let the paint dry.
        </li>
        <li>
          <h3>Visionary Art Intensive</h3>
            I took this workshop at <a href="https://www.cosm.org/" target="_blank">COSM</a> - led by 
            <a href="https://www.alexgrey.com/" target="_blank">Alex Grey</a> 
            and <a href="https://www.allysongrey.com/" target="_blank">Allyson Grey</a>. They are strong leaders in the Visionary Art
            community, having met them, it's easy to see why.  They work tirelessy, and their vision is inspirational - which
            is why COSM has become a sort of Mecca for visionary artists around the world.  Every year I've taken a workshop there, 
            I've painted with some of the most amazing people I've ever met.  With Alex and Allyson at the helm, and giving
            personal feedback - there's really nothing I've come across that can compare with that kind of experience. 
        </li>
      </ul>
    </section>

    <div>
      <img v-bind:src="twistedHorns" id="cartoon" alt="Twisted Horns Cat by Macpeters" title="Twisted Horns Cat by Macpeters" />
      <div class="caption">One of 31 cats drawn during the month of October - each one fitting a #drawtober prompt.</div>
    </div>

    <section>
      <h2>Projects</h2>
       <ul>
        <li>
          <h3><a href="/tarot#hidden-dreams" title="tarot deck">Hidden Dreams Tarot</a></h3>
            I started my own interpretation of the major arcana tarot deck years ago, when self-publishing was less of an option.  This year I finally 
            took this project over the finish line. 
        </li>

        <li>
          <h3><a href="/tarot#cutie-pie">Cutie Pie Tarot</a></h3>
            In the midst of finishing up the Hidden Dreams Tarot, and practicing cartoons, I thought it might be a fun little extra
            to whip up a cartoon version of the deck - something cute, kid friendly, inclusive, and accessible.  
        </li>
      </ul>
    </section>

    <div>
      <img v-bind:src="eye" id="painting" alt="Eye painted by Macpeters at Art For Heart" title="Eye painted by Macpeters at Art For Heart" />
      <div class="caption">Eye was painted live before an audience at Art for Heart, and auctioned off to help fund an Art Therapy Centre</div>
    </div>
    

    <section>
      <h2><a href="/art/fineArt" title="Paintings">Paintings</a></h2>
      <ul>
        <li>Baphomet</li>
        <li>Self Portrait</li>
        <li>Be the Eye of the Storm</li>
         <li>Caught in the Music</li>
         <li>Eye (at Art for Heart)</li>
         <li>Golden Rabbit (skateboard deck)</li>
         <li>Hockey Bees (mural)</li>
         <li>Cosmic Kitten</li>
      </ul>
    </section>

    <section>
      <div class="previous"><a href="/blogPosts/aLookBack2017">Recap 2017</a></div>
      <div class="next"><a href="/blogPosts/aLookBack2019">Recap 2019</a></div>
    </section>
  </article>
</template>

<script>
  import eye  from "../../assets/blogs/macpeters_artForHeart.jpg";
  import twistedHorns  from "../../assets/cartoons/macpeters_twistedHorns.png";

  export default {
     data() {
      return {
        eye: eye,
        twistedHorns: twistedHorns
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

  .caption {
    font-size: 12px;
    color: #444;
  }

  #painting {
    width: 50%;
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
