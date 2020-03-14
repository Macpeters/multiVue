<template>
  <header>
    <div class="header">
      <a href="/" class="header-logo" title="Macpeters Creations Home" />

      <div class="header-text">
        <h1>Macpeters</h1>
        <h2>Developer and Artist</h2>
      </div>

    </div>
    <div class="nav-header">
      <div class="main-nav-row">
        <span class="dropbtn"><a href="/dev/webDev" class="dropbtn" title="Macpeters Web Development" >Programming</a></span>

        <div class="dropdown">
          <label for="show-menu" class="show-menu dropbtn">
            <span>Art<i class="arrow down"></i></span>
          </label>

          <input type="checkbox" id="show-menu" role="button">
          <div class="dropdown-content" id="dropdown-content">
            <a href="/art/fineArt" title="Paintings">Fine Art Paintings</a>
            <a href="/art/skateboards" title="Paintings">Skateboard Decks</a>
            <a href="/art/murals" title="Paintings">Murals</a>
            <a href="/art/drawings" title="Drawings">Drawings</a>
            <a href="/tarot" title="Hidden Dreams Tarot">Tarot</a>
            <hr />
            <a href="/art/aboutArtist" title="About Artist">About the Artist</a>
          </div>
        </div>

        <span class="dropbtn"><a href="/blog" class="dropbtn" title="Macpeters Blog">Blog</a></span>
      </div>
      <br />
    </div>
  </header>
</template>

<script>
  import logoImage from "../assets/logo.png";

  export default {
    name: 'imageList',
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
    padding-top: 10px;
    display: flex;
    height: 100px;
    justify-content: space-around;
    font-size: 1.2em;
    letter-spacing: .1rem;
  }

  .header-logo {
    background: url('../assets/logo.png') center no-repeat;
    background-size: contain;
    width: 20%;
    margin-bottom: 15px;
  }

  .header-text {
    width: 50%;
  }

  .main-nav-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-header {
    height: 60px;
    background-color: #897DF4;
  }

  .dropbtn {
    padding: 10px 40px;
    margin: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    border-radius: 25px;
    -webkit-transition: background-color 2s; /* Safari */
    transition: background-color 2s;
    transition: color 2s;
    transition-duration: 1s;
    cursor: pointer;
  }
  .dropbtn:hover {
    background-color: #FFAB8A;
    color: #444;
  }

  /* Dropdown Button */
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    display: inline-block;
    height: 100%;
  }
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    width: 30%;
    margin-top: 5px;
    border-radius: 25px;
    display: none;
    position: absolute;
    background-color: #897DF4;
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
    color: white;
    padding: 8px 12px;
    text-decoration: none;
    display: block;
    font-size: 16px;
    font-weight: 600;
    transition: background-color 2s;
    transition: color 2s;
  }
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #FFAB8A;
    color: #444;
  }
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
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

  /* Arrow */
  i {
    border: solid #555;
    border-width: 0 3px 3px 0;
    display: inline-block;
    margin-left: 2px;
    padding: 3px;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  @media screen and (max-width: 800px){
    .dropbtn {
      padding: 5px 20px;
    }
    .header-text {
      font-size: .8em;
      width: 80%;
    }
  }

  @media screen and (max-width: 600px){
    .dropbtn {
      padding: 5px 5px;
    }
  }

  @media screen and (max-width: 411px){

    .dropbtn {
      padding: 2px 6px;
      font-size: 18px;
      display: block;
    }
    .show-menu {
      min-width: 90px;
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
      height: 60px;
    }
    .dropdown {
      width: 100%;
      margin-top: 0;
    }
  }
</style>
