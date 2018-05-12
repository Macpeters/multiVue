<template>
  <div>
    <table>
      <tr><td></td><td><h2>Education</h2></td></tr>
      <span v-for="edu in education" :key='edu.id'>
        <tr><td>{{edu.year}}</td><td><span class="title">{{edu.title}}</span>, <a target="_blank" v-bind:href="edu.link">{{edu.linkTitle}}</a>, {{edu.location}}</td></tr>
      </span>

      <!-- Solo -->
      <tr><td></td><td><h2>Solo Exhibitions</h2></td></tr>
      <tr><td>2014</td><td><span class="title">T Dot Love 7: Future Perfect Synergy</span>, Bassline Bar, Toronto</td></tr>

      <!-- Group -->
    </table>

  </div>
</template>

<script>
  export default {
    name: "artHistory",
    components: { },
    data() {
      return {
        education: [
          {
            year: '2017',
            title: 'Visionary Art Workshop with Randal Roberts and Morgan Mandalla',
            link: 'http://cosm.org/',
            linkTitle: 'Cosm',
            location: 'Wappingers Falls, N.Y.'
          },
          {
            year: '2016',
            title: 'Skate Graphics &amp; Grafitti Workshop with Chris Dyer',
            link: 'http://cosm.org/',
            linkTitle: 'Cosm',
            location: 'Wappingers Falls, N.Y.'
          },
          {
            year: '2015',
            title: 'Visionary Art Intensive with Allyson and Alex Grey',
            link: 'https://www.eomega.org/',
            linkTitle: 'Cosm',
            location: 'Rhinebeck, N.Y.'
          }
        ],
        groupExhibitions: [
          {
            year: '2018',
            title: 'Cultivate',
            location: 'the Freedom Factory, Toronto'
          },
          {
            year: '2017',
            title: 'Dirty Talk _ Art Show 011',
            location: 'Smiling Buddha, Toronto'
          },
          {
            year: '2017',
            title: 'Dirty Talk _ Art Show 010',
            location: 'Round Venue, Toronto'
          },
          {
            year: '2017',
            title: 'Freedom Factory Opening Group Show',
            location: 'the Freedom Factory, Toronto'
          },
          {
            year: '2017',
            title: 'Different Strokes',
            location: 'Artusiasm, Toronto'
          },
          {
            year: '2017',
            title: 'TAAP2 Summer Pop-up Party',
            location: 'CSI Annex'
          },
          {
            year: '2016',
            title: 'A World at Peace',
            location: 'Queen Gallery, Toronto'
          },
          {
            year: '2015',
            title: 'RAW: Natural Born Artists',
            location: 'Mod Club, Toronto'
          }
        ]
      };
    }
};
</script>


<style scoped>

</style>
