<template>
  <header>
    <div class="header">
      <a href="/" class="header-logo" title="Macpeters Creations Home">
        <img :src=logo alt="Macpeters Creations" title="Macpeters Creations" />
      </a>
      <div>
        <h1>Macpeters</h1>
        <h2>Developer and Artist</h2>
      </div>

    </div>
    <div class="nav-header">
      <div class="main-nav-row">
        <a href="/" class="logo dropbtn" title="Macpeters Creations Home">
          <img :src=logo alt="Macpeters Creations" title="Macpeters Creations">
        </a>

        <a href="/dev/webDev" title="Macpeters Web Development" class="dropbtn">Programming</a>

        <div class="dropdown">
          <label for="show-menu" class="show-menu dropbtn">
            Art
            <i class="arrow down"></i>
          </label>

          <input type="checkbox" id="show-menu" role="button">
          <div class="dropdown-content" id="dropdown-content">
            <a href="/art/fineArt" title="Paintings">Paintings</a>
            <a href="/art/drawings" title="Drawings">Drawings</a>
            <a href="/tarot" title="Hidden Dreams Tarot">Tarot</a>
            <hr />
            <a href="/art/aboutArtist" title="About Artist">About the Artist</a>
          </div>
        </div>
      </div>
      <br />
    </div>
  </header>
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
  ol li{
    display: inline-block;
  }

  fade-button {
    transition: opacity .35s ease-out;
  }

  .header {
    background-image: linear-gradient(to bottom right, aqua , blueviolet, hotpink, orange, yellow);
    color: #fff;
    text-shadow: #000 2px 2px 4px;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .header-logo img{
    padding: 10px;
    height: 100px;
  }
  .nav-header {
    height: 60px;
    background-color: #897DF4;
  }

  .dropbtn {
    padding: 5px;
    margin: 0 10px 10px 10px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    border-radius: 25px;
    -webkit-transition: background-color 2s; /* Safari */
    transition: background-color 2s;
    transition-duration: 2s;
  }

  .logo:hover {
    opacity: 0.7;
  }
  .logo img {
    padding-top: 10px;
    height: 40px;
    width: auto;
    opacity: 1.0;
  }


  /* Dropdown Button */
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
    top: 200px;
    right: 20px;
  }

  /* Arrow */
  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  @media screen and (max-width: 411px){
    .dropbtn {
      font-size: 18px;
      display: block;
    }
    .logo {
      width: 50%;
      padding: 0;
      margin-top: 10px;
    }
    .dropdown {
      margin-top: 25px;
    }

    .share-buttons a{
      margin: 0;
    }
    .nav-header {
      height: 190px;
    }
    .dropdown {
      width: 100%;
      margin-top: 0;
    }
  }
</style>
