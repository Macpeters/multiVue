<template>
  <div>
    <table>
      <tr><td><h2>Education</h2></td><td></td></tr>
      <span v-for="edu in education" :key='edu.id'>
        <tr class="item"><td>{{edu.year}}</td><td><span class="title">{{edu.title}}</span>, <a target="_blank" v-bind:href="edu.link">{{edu.linkTitle}}</a>, {{edu.location}}</td></tr>
      </span>

      <!-- Solo -->
      <tr><td><h2>Solo Exhibitions</h2></td><td></td></tr>
      <span v-for="solo in soloExhibitions" :key='solo.id'>
        <tr class="item"><td>{{solo.year}}</td><td><span class="title">{{solo.title}}</span>, {{solo.location}}</td></tr>
      </span>

      <!-- Group -->
      <tr><td><h2>Group Exhibitions</h2></td><td></td></tr>
      <span v-for="grp in groupExhibitions" :key='grp.id'>
        <tr class="item"><td>{{grp.year}}</td><td><span class="title">{{grp.title}}</span>, {{grp.location}}</td></tr>
      </span>

      <!-- Collaborations -->
      <tr><td><h2>Select Collaborations</h2></td><td></td></tr>
      <span v-for="collab in collaborations" :key='collab.id'>
        <tr class="item"><td>{{collab.year}}</td><td><span class="title">{{collab.title}}</span>, {{collab.location}}</td></tr>
      </span>

      <!-- Commissions -->
      <tr><td><h2>Select Commissions</h2></td><td></td></tr>
      <span v-for="commis in commissions" :key='commis.id'>
        <tr class="item"> <td>{{commis.year}}</td> <td><span class="title">{{commis.title}}</span>, {{commis.location}}</td> </tr>
      </span>

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
            title: 'VAM Exhibition',
            location: 'Evergreen Brick Works, Toronto'
          },
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
          },
          {
            year: '2015',
            title: 'Psyberspace: Acid Reign Productions (ARP)',
            location: 'Velvet Underground, Toronto'
          },
          {
            year: '2015',
            title: 'Body Light: House of Dust',
            location: 'Bassline Bar, Toronto'
          },
          {
            year: '2012',
            title: 'Art On Display',
            location: 'Greenroom, Toronto'
          },
          {
            year: '2011',
            title: 'Art On Display',
            location: 'Glass Art Studio, Toronto'
          },
          {
            year: '2011',
            title: 'SpeakerBox Vision',
            location: 'Abyssinia Bar, Toronto'
          },
          {
            year: '2011',
            title: 'Xmas Group Exhibition',
            location: 'Ben Navaee Gallery, Toronto'
          }
        ],
        soloExhibitions: [
          {
            year: '2014',
            title: 'T Dot Love 7: Future Perfect Synergy',
            location: 'Bassline Bar, Toronto'
          }
        ],
        collaborations: [
          {
            year: '2018',
            title: 'Demolition Art Party',
            location: 'Secret Toronto Location, (in collaboration with members of ADAPT Art Collective)'
          },
          {
            year: '2016',
            title: 'Soul Movement: Glow in the Dark Ecstatic Dance',
            location: 'Temple 23, Toronto, (in Collaboration with Ryan Generaux)'
          },
          {
            year: '2014',
            title: 'Forest Path',
            location: 'Mixed media backdrop painting, (in Collaboration with Ryan Generaux)'
          },
          {
            year: '2012',
            title: 'Candyland Themed Party Deco: Conscious Light',
            location: 'Zion Lounge, Toronto, (in Collaboration with Ryan Generaux)'
          },
          {
            year: '2011',
            title: 'Psychedelic Blacklight AP: Conscious Light',
            location: 'Zion Lounge, Toronto, (in Collaboration with Ryan Generaux)'
          }
        ],
        commissions: [
          {
            year: '2018',
            title: 'Kdubs Glass',
            location: 'painting for sticker design'
          },
          {
            year: '2018',
            title: 'Bradley (@2100glasskid)',
            location: 'logo design'
          },
          {
            year: '2017',
            title: 'Pasta Eating Mushroom',
            location: 'spraypaint mural at Pastamancers, London, Ontario'
          },
          {
            year: '2017',
            title: 'Octobuddy',
            location: 'spraypaint mural at Fulton Fitness, St. Catharines, Ontario'
          },
          {
            year: '2017',
            title: 'Chameleon',
            location: 'spraypaint mural at Alleyway of Dreams, Toronto, Ontario'
          },
          {
            year: '2017',
            title: 'Bee',
            location: 'spraypaint mural at Alleyway of Dreams, Toronto, Ontario'
          },
          {
            year: '2013',
            title: 'Mining Game',
            location: 'art assets for game (characters, gems, scenery, pickups)'
          },
          {
            year: '2011',
            title: 'Conscious Light Banner',
            location: 'painting'
          },
          {
            year: '2010',
            title: 'Pot Leaf Butterfly',
            location: 'painting'
          },
          {
            year: '2009',
            title: 'Sarah',
            location: 'portrait'
          },
          {
            year: '2008',
            title: "Joejo's Grandmother",
            location: 'portrait'
          },
          {
            year: '2008',
            title: "Logan",
            location: 'portrait'
          }
        ]
      };
    }
};
</script>


<style scoped>
.item {
  display: block;
}
</style>
