<template>
  <div>

  <div class="contact">
    <hr />
    <span class="left-column">
      All artwork copyright Mac Peters <br/>
      2018<br/>
      All rights reserved
    </span>
    <span class="right-column" v-for="button in socialButtons" :key='button.id'>
      <a v-bind:href="button.url" v-bind:title="button.title" v-bind:alt="button.title" target="_blank"><img v-bind:src="button.image" class="social-button" /></a>
    </span>
  </div>

  </div>
</template>

<script>
  // Images
  import email from "../assets/social/email.png";
  import facebook from "../assets/social/facebook.png";
  import instagram from "../assets/social/instagram.png";
  import linkedIn from "../assets/social/linkedin.png"; 
  import twitter from "../assets/social/twitter.png";

  export default {
    name: "contactBar",
    components: { },
    data() {
      return {
        socialButtons: [
          {
            title: 'Email',
            image: email,
            url: 'mailto:peters.maryanne@gmail.com'
          },
          {
            title: 'Facebook',
            image: facebook,
            url: 'https://www.facebook.com/macpetersArt/'
          },
          {
            title: 'Instagram',
            image: instagram,
            url: 'https://www.instagram.com/macpetersart/?hl=en'
          },
          {
            title: 'LinkedIn',
            image: linkedIn,
            url: 'https://www.linkedin.com/in/maryanne-mac-peters-56ab9b38?trk=hp-identity-name'
          },
          {
            title: 'Twitter',
            image: twitter,
            url: 'https://twitter.com/MaryannePeters'
          },
        ]
      };
    },
    build: {
      assetsPublicPath: "/",
      assetsSubDirectory: "assets"
    }
};
</script>


<style scoped>

  .contact {
    text-align: center;
    background-color: #ddd;
    clear: both;
    padding-left: 20%;  
  }

  .left-column {
    float: left;
  }

  .right-column {
    float: left;
  }

  .social-button {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 25px;
  }

</style>
