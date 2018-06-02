<template>
  <div>
    <div class="header-image"></div>
    <div class="nav-header">

      <div class="share-buttons">
        <!-- AddToAny BEGIN -->
        <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
          <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
          <a class="a2a_button_facebook"></a>
          <a class="a2a_button_twitter"></a>
          <a class="a2a_button_tumblr"></a>
          <a class="a2a_button_pinterest"></a>
        </div>
        <script async src="https://static.addtoany.com/menu/page.js"></script>
        <!-- AddToAny END -->
      </div>

      <div class="main-nav-row">
        <a href="/" class="logo"><img :src=logo alt="Macpeters Creations" title="Macpeters Creations"></a>
    
        <a href="/dev" class="dropbtn">Development/Programming</a>
        <a href="/blog" class="dropbtn">Blog</a>
    
        <div class="dropdown">
          <label for="show-menu" class="show-menu dropbtn">Art/Design</label>
          <input type="checkbox" id="show-menu" role="button">
          <div class="dropdown-content" id="dropdown-content">
            <a href="/art">Fine Art</a>
            <a href="/skateboards">Painted Skateboards</a>
            <a href="/murals">Murals/Aerosol</a>
            <a href="/artServices">Services</a>
            <a href="tarot">Hidden Dreams Tarot</a>
            <hr />
            <a href="/artShop">Shop</a>
            <a href="/aboutArtist">About Me</a>
            <a href="https://macpetersart.wordpress.com/" target="blank">Blog</a>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>

  
</template>

<script>

import logoImage from "../assets/logo.png";

export default {
  name: "imageList",
  components: { },
  data() {
    return {
      logo: logoImage
    };
  },
  build: {
    assetsPublicPath: "/",
    assetsSubDirectory: "assets"
  }
};
</script>


<style scoped>

  .header-image {
    height: 250px;
    background: url('../assets/header.png');
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  a {
    text-decoration: none !important;
    padding: 10px;
    margin: 10px;
  }
  ol li{
    display: inline-block;
  }
  /* Nav Bar */
  .nav-header {
    font-size: 18px;
    font-weight: bold;
    background-color: #897DF4;
    color: #ffffff;
    padding: 10px;
    height: 60px;
  }
  .nav-header img {
    height: 40px;
    padding-right: 25px;
    padding-top: 10px;
    width: auto;
  }
  .nav-header img:hover {
    opacity: .5;
  }
  .nav-header a {
    padding-left: 15px;
  }

  /* Dropdown Button */
  .nav-header .dropbtn {
    border-radius: 25px;
    background-color: #C17DDB;
    color: #fff;
    padding: 10px;
    margin: 10px;
  }
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    border-radius: 25px;
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown img {
    border-radius: 25px;
    width: 25px;
    height: auto;
  }
  /* Links inside the dropdown */
  .dropdown-content a {
    border-radius: 10px;
    color: black;
    padding: 8px 12px;
    text-decoration: none;
    display: block;
    font-size: 12px;
  }
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #ddd}
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropbtn:hover {
    background-color: #FFAB8A;
    color: #444;
  }

  /* Dropdown is a checkbox for mobile */
  #show-menu:checked ~ .dropdown-content {
    display: block;
    border-style:outset;
    border-width: thin;
    border-color: #000;
  }
  input[type=checkbox]{
    display: none;
  }

  .share-buttons{
    position: absolute;
    z-index: 10;
    top: 230px;
    right: 20px;
  }

  @media screen and (max-width: 612px){
    .main-nav-row a .dropdown .dropbtn {
      font-size: 18px;
      display: block;
      margin: 10px;
      clear: both;
    }
    .dropdown {
      margin-top: 25px;
    }
    .nav-header img {
      padding-bottom: 15px;
    }
    .share-buttons a{
      margin: 0;
    }
    .nav-header {
      height: 150px;
    }
  }

</style>
