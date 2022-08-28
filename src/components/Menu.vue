
<template>
  <div class="pt-3">
    <div class="menu-header">
      <div class="container">
        <h2>MENU HIỆN TẠI</h2>
        <p>Giới thiệu thức uống hấp dẫn và đa dạng từ Gong Cha</p>
      </div>
    </div>
    <div class="menu-main">
      <div class="menu-main-nav container">
        <div class="nav-header">
          <v-row>
            <v-col :cols="$store.state.responsive ? '12' : '2'"> <v-icon color="#b81f32"> mdi-cup-water </v-icon> <a style="font-size: 15px" class="ms-1" href="/menu">Kem</a> </v-col>
            <v-col :cols="$store.state.responsive ? '12' : '2'"> <v-icon color="#b81f32"> mdi-cup-water </v-icon> <a style="font-size: 15px" class="ms-1" href="/menu">Kem</a> </v-col>
            <v-col :cols="$store.state.responsive ? '12' : '2'"> <v-icon color="#b81f32"> mdi-cup-water </v-icon> <a style="font-size: 15px" class="ms-1" href="/menu">Kem</a> </v-col>
            <v-col :cols="$store.state.responsive ? '12' : '2'"> <v-icon color="#b81f32"> mdi-cup-water </v-icon> <a style="font-size: 15px" class="ms-1" href="/menu">Kem</a> </v-col>
            <v-col :cols="$store.state.responsive ? '12' : '2'"> <v-icon color="#b81f32"> mdi-cup-water </v-icon> <a style="font-size: 15px" class="ms-1" href="/menu">Kem</a> </v-col>
            <v-col :cols="$store.state.responsive ? '12' : '2'"> <v-icon color="#b81f32"> mdi-cup-water </v-icon> <a style="font-size: 15px" class="ms-1" href="/menu">Kem</a> </v-col>
            <v-col :cols="$store.state.responsive ? '12' : '2'"> <v-icon color="#b81f32"> mdi-cup-water </v-icon> <a style="font-size: 15px" class="ms-1" href="/menu">Kem</a> </v-col>
          </v-row>
        </div>
      </div>
      <div class="block-product container">
        <div class="title">
          <h2 class="category-heading">
            Kem
          </h2>
        </div>
        <div class="content">
          <v-row>
            <v-col :cols="$store.state.responsive ? 6 : 4">
              <div class="b-item">
                <div class="item-img">
                  <a  style="position: relative;">
                  <v-img class="xcxzczx" src="https://gongcha.com.vn/wp-content/uploads/2022/07/Dolce-milk-tea-float.png"></v-img>
                  </a>
                </div>
                <div class="item-name">
                  <h4 class="text-center mt-3"> <a class=" font-weight-light" href="#">Dolce Milk Tea Float</a></h4>
                </div>
              </div>
            </v-col>
           
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "Home",

  components: {},
  data: () => ({
    absolute: true,
    overlay: false,
  }),
  watch: {
    options: {},
  },

  methods: {},
};
</script>
<style>

.item-name a {
  color: #b81f32;
}
.item-name a:hover {
  color: #771420;
}
.menu-main-nav .nav-header {
  border-top: 2px solid #111;
  border-bottom: 1px solid #ddd;
  padding: 25px 0;
  margin-bottom: 20px;
  margin-top: 50px;
}
.menu-main {
  background: #f5eee8;
}



@media (min-width: 320px) {
  .menu-header {
    padding: 60px 0 70px 0;
  }
  .item-name a {
    font-size: 16px;
  }
  
}

@media (min-width: 768px) {
  .menu-header {
    padding: 80px 0 90px 0;
  }
  .item-name a {
    font-size: 20px;
  }
}

@media (min-width: 1200px) {
  .menu-header {
    padding: 115px 0 150px 0;
  }
  .item-name a {
    font-size: 20px;
  }
 
}

.item-img:hover .v-responsive__sizer{
  background-image: url(https://gongcha.com.vn/wp-content/themes/theme/images/p-hover.png);
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10;
}
.menu-header h2 {
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 0;
  font-size: 36px;
  color: black;
  margin-bottom: 11px;
}
.menu-header p {
  color: black;
}

.menu-header {
  background-image: url(https://res.cloudinary.com/tanoquan/image/upload/v1661509765/banner-menu-1900-x-335_xvds64.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  position: relative;
}

.category-heading {
    text-align: center;
    background: #e5ded8;
    text-transform: uppercase;
    margin: 0;
    padding: 10px 0;
    font-weight: 600;
    margin-bottom: 50px;
    font-size: 25px;
}
</style>