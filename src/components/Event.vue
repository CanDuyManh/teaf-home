<template>
    <div style="padding-top: 13px;">
      <div class="about-header d-flex"
      >
        <p class="text-h3 ms-5 align-self-center" style="color:white">Sự kiện</p>
      </div>
    </div>
  </template>
  <script>
  
  export default {
    
    name: 'Event',
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
    background-image: url(https://res.cloudinary.com/tanoquan/image/upload/v1663578402/da_v3sglr.jpg);
    width: 100%;
    height: 800px;
  }
 
  
  </style>