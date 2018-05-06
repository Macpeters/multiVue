<template>
  <div>
    <div class="header-image"></div>
    <div class="nav-header">
    
      <a href="/" class="logo"><img :src=logo alt="Macpeters Creations" title="Macpeters Creations"></a>
    
      <a href="/dev" class="dropbtn">Development/Programming</a>
    
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
          <a href="/artAbout.html">About Me</a>
          <a href="https://macpetersart.wordpress.com/" target="blank">Blog</a>
        </div>
      </div>
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
    padding: 10px
  }
  ol li{
    display: inline;
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
  @media screen and (max-width: 450px){
    .nav-header img {
      padding-bottom: 15px;
    }
    .nav-header a{
      font-size: 18px;
    }
  }

  /* Dropdown Button */
  .nav-header .dropbtn {
    border-radius: 25px;
    background-color: #C17DDB;
    color: #fff;
    padding: 10px;
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

</style>
