<template>
  <article>
    <h1>Tee Public</h1>
    <h2>A Review</h2>
    <h3>April 26, 2019</h3>
    <div class="post">
      <h4>TLDR</h4>
      <p>
        Surprisingly, not that bad. I like the shirts I got, the company was quick to fix a package lost in shipping, and they 
        seem to be the most sustainable Print-on-Demand organization.
      <p>

      <h4>Product Quality</h4>
      <p>
        I've ordered from a few different t-shirt sites, with varying degrees of quality.  From one site, the fabric
        was so thick it was uncomfortable, and I never wanted to wear the shirt.  From another site, the fabric was really
        thin - it's super comfortable, but looks drab.  I only wear it to sleep in or hang around the house.  With Tee Public,
        the shirt was thick enough to be opaque, but with lots of give.  
      </p>
      <p>  
        One of the 2 prints I ordered looked weird once I was wearing it,
        but it's where I put it, so that's on me.  The prints both look great, and the shirts are super comfortable, and fit 
        nicely.  The materials they use are listed clearly on the site, so you know what you're getting (not everyone cares, 
        but I have allergies, so I have to avoid polyester, acrylic, rayon, and lyrca)
      </p>

      <h4>Service</h4>
      <p>
        I ordered a couple shirts at the same time as my friend ordering one.  He got his in a few weeks, and I was still
        waiting around a month after the tracking stopped.  DHL doesn't track once the package leaves the US, so there 
        was no information about what happened after that.  I sent a message to Tee Public, asking what happens if I never
        get the package.  They replied quickly, and let me know a new package was on the way.  It arrived in a few weeks, in a
        fun plastic wrap.  No giant boxes full of packing peanuts or bubble wrap, no extra layers, just the one wrapper.  
      </p>

      <span><img v-bind:src="teePublic" alt="Tee Public chart illustrating sustainability practices" /></span>
      <h4>Sustainability</h4>
      <p>
        There are a number of different sites that support artists in the same general way (Red Bubble, Cafe Press,
        Society 6), but Tee Public has stood out to me in this area.  
        <a href="http://www.wrapcompliance.org/" target="_blank">WRAP</a> and 
        <a href="https://www.fairtradecertified.org/" target="_blank">Fair Trade</a> certified
        global (more local) factories are a big deal for a print-on-demand company.  The minimal packaging helps 
        environmentally (although I'd rather it wasn't plastic)
      </p>
       
      <h4>Conclusion</h4>
      <p>
        The only problem I've had with Tee Public was actually with the shipping company they use, DHL.  Packages
        get lost, and I'm sure there are mis-prints (there would be with any org like this), but my experience with 
        their products and service has been great, and I love their more sustainable practices.  
      </p>
    </div>
  </article>
</template>

<script>
  import teePublic from "../../assets/blogs/macpeters_teePublic.png";

  export default {
    name: "teePublic",
    components: { },
    data() {
      return {
        teePublic: teePublic
      };
    }
};
</script>

<style scoped>

  article {
    padding-left: 5%;
    width: 90%;
    line-height: 1.5em;
  }
  .post {
    padding-top: 20px;
  }
  .emphasize {
    font-weight: bold;
  }
  img {
    height: 300px;
  }
  p {
    padding-bottom: 10px;
  }
</style>
