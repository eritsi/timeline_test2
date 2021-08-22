<template>
    <v-app>
    <v-app-bar color="#208ea3" dark app class='title'>
      <v-toolbar-title justify='center'>eritsi's Timeline</v-toolbar-title>
      <!-- アイコンがないのでしばらく割愛
      <v-img 
           src='./../images/icon.png'
           max-height="50"
           max-width="50"
           contain
        >
      </v-img>
      -->
      <v-spacer></v-spacer>
      <!-- portfolio, bookshelf がないのでしばらく割愛
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://fkubota.github.io/portfolio/' v-bind="attrs" v-on="on">
                  <v-icon>mdi-account</v-icon>
              </v-btn>
          </template>
          <span>portfolio</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://fkubota.github.io/bookshelf/' v-bind="attrs" v-on="on">
                  <v-icon>mdi-bookshelf</v-icon>
              </v-btn>
          </template>
          <span>bookshelf</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://twitter.com/fkubota_' v-bind="attrs" v-on="on">
                  <v-icon>mdi-twitter</v-icon>
              </v-btn>
          </template>
          <span>twitter</span>
      </v-tooltip>
      -->
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://github.com/eritsi' v-bind="attrs" v-on="on">
                  <v-icon>mdi-github</v-icon>
              </v-btn>
          </template>
          <span>GitHub</span>
      </v-tooltip>
      <!-- しばらく割愛
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://www.kaggle.com/fkubota' v-bind="attrs" v-on="on">
                    <font-awesome-icon :icon="[ 'fab', 'kaggle' ]" />
              </v-btn>
          </template>
          <span>Kaggle</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://speakerdeck.com/fkubota' v-bind="attrs" v-on="on">
                    <font-awesome-icon :icon="[ 'fab', 'speaker-deck' ]" />
              </v-btn>
          </template>
          <span>Speaker Deck</span>
      </v-tooltip>
      -->
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://github.com/eritsi/timeline-test2' v-bind="attrs" v-on="on">
                  <v-icon>mdi-code-tags</v-icon>
              </v-btn>
          </template>
          <span>Source Code</span>
      </v-tooltip>
    </v-app-bar>
    <v-content>
    <v-container>
    <v-timeline align-top dense class="mx-auto" >

            <item007/>
            <item005/>
            <item006/>
            <item003/>
            <item001/>
            <item008/>
            <item002/>
            <item004/>
            <item009/>
    </v-timeline>
</v-container>
</v-content>
</v-app>
</template>

<script>
    import item001 from './item/item001';
    import item002 from './item/item002';
    import item003 from './item/item003';
    import item004 from './item/item004';
    import item005 from './item/item005';
    import item006 from './item/item006';
    import item007 from './item/item007';
    import item008 from './item/item008';
    import item009 from './item/item009';

    export default {
            name: 'App',
            components: {
                    item001,
                    item002,
                    item003,
                    item004,
                    item005,
                    item006,
                    item007,
                    item008,
                    item009,
                },
        };
</script>
