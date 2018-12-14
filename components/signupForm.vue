<template>
  <div class="signup-form">
    <!-- Begin MailChimp Signup Form -->
    <div id="mc_embed_signup" class="bottom-signup">
      <form  class="subscriber validate" action="https://macpeters.us17.list-manage.com/subscribe/post?u=33c28c0895c09bd15c5448d9d&amp;id=1c61deb0d8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
  	      <div><label for="mce-EMAIL">Subscribe for updates on the Hidden Dreams Tarot and other projects</label></div>
  	      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_33c28c0895c09bd15c5448d9d_1c61deb0d8" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
      </form>
    </div>
    <br />
    <!--End mc_embed_signup-->
  </div>
</template>

<script>
  export default {
  name: "signupForm",
  components: { },
  data() {
    return {

    }
  }
};
</script>


<style scoped>
  .signup-form{
    font-size: 24px;  
    clear: both;
    height: 165px;
  } 
  .email{
    max-width: 80%;
    height: 24px;
    width: 400px;
    margin: 10px;
  }

  #mc-embedded-subscribe {
    height: 50px;
    width: 100px;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    
  }
  #mc_embed_signup_scroll {
    font-size: 20px;
    height: 100px;
    padding: 20px;
  }
  .bottom-signup {
    margin-top: 60px;
    background-color: beige;
    height: 155px;
  }

   @media screen and (max-width: 612px){
    .signup-form {
      font-size: 16px;
      display: block;
      height: 200px;
      margin: 5px;
      background-color: #eef;
    }
   }
</style>