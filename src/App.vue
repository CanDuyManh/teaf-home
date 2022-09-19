

<template id="teaf-main">
  <v-app class="app-cls">
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
         class="me-3 ms-5 btn-icon routerlink" :to="item.link"
         >
         {{item.title}}
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div class="box-user">
        
      </div>
      <v-btn icon to="/cart">
      <v-badge
        :color="$store.state.total_cart ? 'pink accent-3' : ''"
        :content="$store.state.total_cart"
        overlap
      >
        <v-icon >
          
          mdi-cart
        </v-icon>
      </v-badge>
      </v-btn>
      <span class="ms-2"><a :href="$store.state.user.user_name ? '/setting': '/login'">
      {{$store.state.user.user_name || 'Đăng nhập'}}</a></span>
  </v-app-bar>
  <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
    >

  <!-- Sizes your content based upon application components -->
  <v-main style="marginTop: 35px">

    <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <router-view>
      </router-view>
  </v-main>
  </v-sheet>

  <v-footer app
    color="red lighten-4"
    dense
  > 
  <div>
      <p class="text-body1">Teaf</p>
  </div>
    <!-- -->
  </v-footer>
  <v-dialog
    v-model="$store.state.dialog_alter"
    max-width="200"
  >
    <v-card>
      <v-card-title class="">

      </v-card-title>

      <v-card-text>
        <span class="text-body-1">
          {{$store.state.dialog_alter_body}}
        </span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="$store.state.dialog_alter = false"
        >
          Đóng
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',

  components: {
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
    this.onResize();
    window.addEventListener('resize', this.onResize)

    //load total detail
    if (this.$store.state.token) {
      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }
      axios.get( this.$store.state.api + 'customer/totalCart', config).then(res => {
        console.log(res);
        if(res.data && res.data.status == 200) {
          this.$store.state.total_cart = res.data.count;
        }
        
      });
    }
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
};
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Open%20Sans);
  *, .v-list-item__title, .v-label{
    font-size:  14px;
    font-family: 'open sans';
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: #b81f32;
  }
  .v-list-item {
        min-height: 25px;
  }
  .btn-icon:hover{
    cursor: pointer;
    background-color: #FFCDD2 !important;
    border-color: #FFCDD2 !important;
  }

  .text-hover:hover{
    cursor: pointer;
    color: #b81f32 !important;
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