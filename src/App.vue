

<template id="teaf-main">
  <v-app>
  <v-navigation-drawer 
      v-model="drawer"
      absolute
      temporary
      color="red lighten-4"
      v-show="$store.state.responsive"
    > 
      <v-list 
      nav
      dense
      >
      <v-list-item-group
        active-class="deep-purple--text text--accent-4"
      >
      <v-list-item @click="()=>{
        item.link != ''? $router.push(item.link):false;
        item.link != ''? $store.state.router = item.onClick : false;
      }" v-for="item in nav_header" :key="item.title" :prepend-icon="item.icon" no-action>
                <v-list-item-content>
                    <v-list-item-title style="font-size: 13px;" v-text="item.title"></v-list-item-title>
                </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </v-list>
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar  
    dense
    absolute
    color="red lighten-4"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
  >
    <!-- -->
      <v-app-bar-nav-icon v-show="$store.state.responsive" @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>TEA - F</v-toolbar-title>

      <div v-show="!$store.state.responsive" >
        <router-link v-for="item in nav_header"   :key="item.title"
         class="me-3 ms-5 btn-icon routerlink" style="color: black;" :to="item.link"
         >
         {{item.title}}
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div class="box-user">
        
      </div>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

  </v-app-bar>
  <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >

  <!-- Sizes your content based upon application components -->
  <v-main style="marginTop: 35px">

    <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <router-view>
        <ProductManager></ProductManager>
      </router-view>
  </v-main>
  </v-sheet>

  <v-footer app
    color="red lighten-4"
    dense
  >
      <p class="text--disabled" style="font-size: 14px;">Cám ơn bạn đã quan tâm đến TEA - F</p>
    <!-- -->
  <p></p>
  </v-footer>
</v-app>
</template>

<script>
import ProductManager from './components/ProductManager';

export default {
  name: 'App',

  components: {
    ProductManager,
  },

  data: () => ({
      drawer: false,
      group: null,
      nav_header: null,
    }),
  mounted() {
    this.nav_header = this.$store.state.nav;
  },
  methods: {
    occ(v){
      console.log('fsa');
      console.log(v);
    },
    onResize() {
    if (window.innerWidth > 990) {
      this.$store.state.responsive = false;
    } else {
      this.$store.state.responsive = true;
    }
    },
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
};
</script>

<style>
  *, .v-list-item__title, .v-label{
    font-size:  13px;
  }
  .v-list-item {
        min-height: 25px;
  }
  .btn-icon:hover{
    cursor: pointer;
    background-color: #FFCDD2 !important;
    border-color: #FFCDD2 !important;
  }
  .btn-table-setting .v-btn__content{
    font-size:  9px;
  }
  .routerlink {
    text-decoration: none;
    font-size: 14px;
  }
  
  .routerlink.active{
    font-size: 15px;
    text-decoration: underline;
  }
</style>