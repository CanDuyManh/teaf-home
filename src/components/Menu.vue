
<template>
  <div>
    <div class="menu-header"></div>
    <div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://res.cloudinary.com/tanoquan/image/upload/v1661509765/banner-menu-1900-x-335_xvds64.jpg&quot;);">
    <div>
      
    </div>
    </div>
    <v-img src="https://res.cloudinary.com/tanoquan/image/upload/v1661509765/banner-menu-1900-x-335_xvds64.jpg"></v-img>
    <div class="box-1 ms-5 me-5 mt-5">
    <v-container>
      <v-row>
        <v-col cols="12" style="padding: 0;">
          <v-img src="https://gongcha.com.vn/wp-content/uploads/2018/03/Banner-Trang-Ch%E1%BB%A7-k%E1%BA%BF-%C4%91%E1%BB%8Ba-ch%E1%BB%89-CH-800x380-01.jpg"></v-img>
        </v-col>
        <v-col :cols="$store.state.responsive ? 12 : 4" style="padding: 0;">
         <v-img  src="https://gongcha.com.vn/wp-content/uploads/2017/12/banner-6-buoc-395x494.jpg"></v-img>
        </v-col>
        <v-col :cols="$store.state.responsive ? 12 : 8" style="padding: 0;">
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in slide_baner"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col :cols="$store.state.responsive ? 12 : 4" style="padding: 0;">
          <v-img src="https://gongcha.com.vn/wp-content/uploads/2022/07/tin-tuc-web-01-1400x1032.jpg"></v-img>
        </v-col>
        <v-col :cols="$store.state.responsive ? 12 : 4" style="padding: 0;">
          <v-img src="https://gongcha.com.vn/wp-content/uploads/2022/08/tra%CC%82n-cha%CC%82u.395x280-01-1400x993.jpg"></v-img>
        </v-col>
        <v-col :cols="$store.state.responsive ? 12 : 4" style="padding: 0;">
          <v-img src="https://gongcha.com.vn/wp-content/uploads/2022/07/tin-tuc-web-01-1400x1032.jpg"></v-img>
        </v-col>
      </v-row>
      </v-container>
    </div>
    <div class="box-2" style="height: 210px;">

      <div class="box-content">
        <p
        style="
          color: #b81b30;
          font-size: 25px;
          margin: 0;
        "
        >
        Tinh túy từ lá trà tươi hảo hạng
      </p>
      <v-btn
      height="50px"
      width="205px"
      style="
      padding: 10px 50px;
      background-color: transparent;
      "
      >
        Tìm hiểu thêm
      </v-btn>
      </div>
    </div>
    <div class="box-3">
      <p
      style="
          font-size: 21px;
        "
        class="ms-5 pt-5"
        >Bí quyết để có một ly trà hảo hạng</p>
        <v-img
        src="https://gongcha.com.vn/wp-content/uploads/2017/12/ly-tra.png"  width="289" height="310"></v-img>
    </div>
</div>
</template>
<script>
// import axios from "axios";
  export default {
    name: 'Home',

    components: {
    },
    data: () => ({
      slide_baner: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }),
    watch: {
      options: {
      },
    },
    
    methods: {
     
    },
  }
</script>
<style>
  @import url(https://fonts.googleapis.com/css?family=Open%20Sans);
  .menu-header{
    background-image: url(https://res.cloudinary.com/tanoquan/image/upload/v1661509765/banner-menu-1900-x-335_xvds64.jpg);
    height: 200px;
  }
  .box-2{
    background-image: url(http://gongcha.com.vn/wp-content/uploads/2018/04/Banner-Tinh-Túy-Trà22.jpg?id=804);
    margin: auto;
  }
  .box-2 .box-content{
    padding: 20px 50px;
    text-align: center;
    font-family: 'Open Sans'
  }
  .box-2 .box-content button {
   color: #b81f32;
   border-style: solid;
    border-width: 2px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
    margin-top: 30px;
    border-color: #b81f32;
  }
  .box-3{
   background-color: #f5eee8 !important;
  }

</style>