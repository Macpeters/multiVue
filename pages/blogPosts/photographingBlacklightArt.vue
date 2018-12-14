<template>
  <div>
    <h1>4 Tips for Photographing Blacklight Art</h1>
    <h2>Tips for Sharp Low-light photography</h2>
    <h3>August 17, 2017</h3>
    <div class="post">
      <p>
        I started making blacklight art back in 2011 – and it took me a little while to figure out how to
        photograph it, so I thought I’d share what I’ve learned.  Part of the problem was the camera I was using,
        which was a little outdated. The quality was lower, but also, the features I needed to control were harder
        to access. These days, there is a ton of easily accessible hardware that can make it easier.
      </p>
      <h3>How to Get those Sharp Photographs</h3>
      <ol>
        <li>Use a <span class="emphasize">wide aperture and a high ISO</span>, if you have that option.  Your exact settings will vary depending
          on the space you are in, and how much UV light is available.  I like my camera set at around 1/30, f8, 6400 at home.
          If you are working from a phone camera, your settings might have an option that will give you a similar effect.
        </li>
        <li><span class="emphasize">Avoid Shaking</span>: While this might be a fun effect to play with for light painting, when you're
          trying to take a photo under UV lights, <span class="emphasize">any movement at all will show in the photo.</span>  If you have an
          SLR/DSLR camera, or if your camera has any weight to it, you'll benefit from using a tripod.
        </li>
        <span><img v-bind:src="blacklightPhotographs" alt="Monochromatic animals for 'Colour Collective' weekly challenge" title="Monochromatic animals for 'Colour Collective' weekly challenge" /></span>
        <li>Choose the right camera to use.  I use a DSLR for photographing my art at home, but a big camera
          and tripod might not be ideal in all situations.  For events where you might need to be more mobile,
          <span class="emphasize">it might be preferable to use a smaller, lightweight camera.</span>  Some cameras work better in low light situations.
          <a href="https://gizmodo.com/5725085/canons-best-hd-camcorders-kill-unnecessary-pixels-to-shoot-more-incredible-video">Canon video cameras</a>
          are a good example.
          Another is the <a href="https://www.theverge.com/2016/10/27/13425282/google-pixel-camera-auto-hdr-low-light-feature">Google Pixel</a>
        </li>
        <li>Check out what other people do for more ideas: <a href="https://www.diyphotography.net/having-fun-with-black-light-photography/">DIY Photography</a> demonstrates one setup you can try.
        You might also want to see what's been done with <a href="http://photoextremist.com/ultraviolet-induced-visible-fluorescence-photography-tutorial">UVIF (Ultraviolet-Induced Visible Fluorescence)</a> for taking UV
        photos of nature - flowers and other plants.</li>
      </ol>
    </div>

  </div>
</template>

<script>
  import blacklightPhotographs from "../../assets/blogs/macpeters_blacklightPhotographs.png";

  export default {
    name: "photographingBlaclightArt",
    components: { },
    data() {
      return {
        blacklightPhotographs: blacklightPhotographs
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
    font-size: 1.1em;
  }
  img {
    padding-left: 20%;
  }
</style>
