<template>
  <div class="resume">
    <navBar />

    <div class="resume-header">
      <h1>Maryanne Peters a.k.a. Macpeters</h1>
      <div>www.macpeters.com</div>
      <breadcrumbs/>
      <span v-for="platform in socialMedia" :key='platform.id'>
        <a v-bind:href='platform.link' target="_blank"><img v-bind:src="platform.image" v-bind:alt="platform.title" v-bind:title="platform.title" /></a>
      </span>
    </div>
    <hr />

    <div class="resume-sub-header"> <strong>Highlights</strong></div>
    <br />
    <div class="bullet-list">
      <ul class="resume-content">
        <li>Fullstack web development: Ruby on Rails, Vue.js, knockout.js, Redis, Node, Angular.js</li>
        <li>Git, Bash, SSH, Command Line tools, AWS</li>
        <li>Agile Development, Creative Problem Solving, Organizational Effectiveness, Team Work</li>
        <li>Able to do Fast prototyping, and work with legacy code</li>
        <li>Motivated to learn and code constantly</li>
        <li>Up to date on changes to web standards</li>
      </ul>
    </div>

    <div class="resume-sub-header"> <strong>Work Experience</strong></div>
    <ul>
      <li>
        <div class="sub-title">Full Stack Developer<span class="title"> Info-tech Research Group - October 2015 - Present</span></div>
        <div class="bullet-list">
          <ul>
            <li>Maintaining legacy systems: updating code to follow best practices, adding features, fixing bugs</li>
            <li>IT innovation and product development: building new projects and components to interact with existing systems.</li>
            <li>Data Collection and Visualization: creating custom surveys to collect client data, maintaining data integrity, and producing web and pdf reports to visualize the data clearly.</li>
            <li>Agile Development: working in a quickly changing environment, pivoting when required.</li>
          </ul>
        </div>
      </li>
      <br />

      <li>
        <div class="sub-title">Front End Developer<span class="title"> Lazar Entertainment - April 2013 - October 2015</span></div>
        <div class="bullet-list">
          <ul>
            <li>Live Streaming: multistream, realtime, interactive video compiled for an audience (using flash), with an in depth dashboard</li>
            <li>Fullstack Development: HTML5, AngularJs, Rails, REDIS data storage, Faye eventserver, Wowza videoserver</li>
            <li>Documenting company code standards, practices</li>
            <li>Unit tests with Rspec, Jasmine/Karma</li>
            <li>Compiling embeddable interactive Geo-Data Maps using Mapbox, Tilemill, OpenJump, and Leaflet.js api</li>
          </ul>
        </div>
      </li>
      <br />

      <li>
        <div class="sub-title">Game Developer<span class="title"> Independant - April 2013 - Present</span></div>
        <div class="bullet-list">
         <ul>
            <li>Developing cross-platform games using GameMaker Studio, Unity3D, AS3</li>
            <li>Working with various teams, participating in game jams</li>
            <li>Freelance Web/App development</li>
          </ul>
        </div>
      </li>
      <br />

      <li>
        <div class="sub-title">Quality Assurance<span class="title"> Little Guy Games - November 2012 - January 2013</span></div>
        <div class="bullet-list">
          <ul>
            <li>Designed a comprehensive test plan</li>
            <li>Tested games in various states of completion for bugs, inconsistencies, and imbalances</li>
            <li>Logged bugs via Bugzilla</li>
            <li>Kept a crash log which included breakpoints and error codes from XCode</li>
          </ul>
        </div>
      </li>
      <br />

    </ul>

    <div class="resume-sub-header"><strong>Education</strong></div>
    <div class="sub-title">triOS, Video Game Design and Development Diploma Program, Toronto</div>
    <div class="bullet-list">
      <ul>
        <li>Awarded Highest Acedemic Achievement, Perfect Attendance</li>
        <li>Courses Included:
          <ul>
            <li>Video Game Analysis and Technical Design, Business, Math, and Physics</li>
            <li>Game Prototyping with AS3, HTML5, XNA, Unity3D, C++/DirectX</li>
            <li>Level Design, Game Audio, Modelling With Maya</li>
          </ul>
        </li>
      </ul>
    </div>
    <br />

    <contactBar/>
  </div>
</template>

<script>
  // Images
  import github from "../assets/social/github.png";
  import twitter from "../assets/social/twitter.png";
  import stackOverflow from "../assets/social/stackoverflow.png";
  // Components
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'
  import breadcrumbs from '../components/breadcrumbs.vue'
  export default {
    name: "devResume",
    components: { contactBar, navBar, breadcrumbs },
    data() {
      return {
        socialMedia: [
          {
            link: 'https://github.com/Macpeters',
            image: github,
            text: 'Github: Macpeters',
            title: 'github'
          },
          {
            link: 'http://stackoverflow.com/users/2111713/macpeters',
            image: stackOverflow,
            text: 'Stack Overflow: Macpeters',
            title: 'stackoverflow'
          }
        ],
        breadcrumbs: [
          { link: '/',  name: 'Home' },
          { link: '/dev', name: 'Dev' },
          { link: '/devResume', name: 'Resume' }
        ]
      };
    }
};
</script>


<style scoped>
  /* header */
  .resume {
    text-align: center;
  }
  .resume-header {
    font-weight: bold;
  }
  .resume-header img{
    width: 50px;
    height: 50px;
  }
  /* sections */
  ul {
    list-style: none;
  }
  .resume-sub-header {
    text-align: left;
    font-weight: bold;
  }
  .bullet-list ul {
    text-align: left;
    list-style: circle;
  }
  .bullet-list li{
    list-style: circle;
  }
  .title {
    font-weight: bold;
    padding-left: 10px;
  }
.sub-title{
  font-weight: bold;
  padding: 0.5em;
}
</style>