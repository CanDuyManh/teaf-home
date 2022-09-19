<template>
    <div style="padding-top: 13px;">
      <div class="about-header d-flex"
      >
        <p class="text-h3 ms-5 align-self-center" style="color:white">Cửa hàng</p>
        <p class="text-body-1 align-self-center mt-5 ms-5" style="color:white">Cụm 2, Phụng thượng, Phúc Thọ, Hà Nội</p>
      </div>
      <div class="box1">
        <div id="map-container-google-1" class="z-depth-1-half map-container" >
          <iframe 
          style="width: 100%; height: 500px;border:0;"
          src="https://maps.google.com/maps?q=21.098619517660424,105.5796795440399&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0"
          allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </template>
  <script>
  
  export default {
    
    name: 'MenuProductItem',
    props: {
      category: Object,
    },
    data: () => ({
     
    }
    ),
    methods: {
      
    },
    created() {
      
    },
  }
  </script>

  <style>
  .about-header {
    background-image: url(https://phuclong.com.vn/uploads/category/13947d9d8ed6ba-trahopphuclong.jpg);
    width: 100%;
    height: 530px;
  }
 
  
  </style>