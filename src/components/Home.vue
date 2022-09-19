
<template>
  <div class="azzz">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item,i) in slide_baner" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <div class="box-1 ms-5 me-5 mt-1">
      <v-container>
        <v-row>
          <v-col cols="12" style="padding: 0;">
            <v-img
              src="https://gongcha.com.vn/wp-content/uploads/2018/03/Banner-Trang-Ch%E1%BB%A7-k%E1%BA%BF-%C4%91%E1%BB%8Ba-ch%E1%BB%89-CH-800x380-01.jpg">
            </v-img>
          </v-col>
          <v-col :cols="$store.state.responsive ? 12 : 4" style="padding: 0;">
            <v-img src="https://gongcha.com.vn/wp-content/uploads/2017/12/banner-6-buoc-395x494.jpg"></v-img>
          </v-col>
          <v-col :cols="$store.state.responsive ? 12 : 8" style="padding: 0;">
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(item,i) in slide_baner" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col :cols="$store.state.responsive ? 12 : 4" style="padding: 0;">
            <v-img src="https://gongcha.com.vn/wp-content/uploads/2022/07/tin-tuc-web-01-1400x1032.jpg"></v-img>
          </v-col>
          <v-col :cols="$store.state.responsive ? 12 : 4" style="padding: 0;">
            <v-img
              src="https://gongcha.com.vn/wp-content/uploads/2022/08/tra%CC%82n-cha%CC%82u.395x280-01-1400x993.jpg">
            </v-img>
          </v-col>
          <v-col :cols="$store.state.responsive ? 12 : 4" style="padding: 0;">
            <v-img src="https://gongcha.com.vn/wp-content/uploads/2022/07/tin-tuc-web-01-1400x1032.jpg"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="box-2" style="height: 210px;">

      <div class="box-content">
        <p style="
          color: #b81b30;
          font-size: 25px;
          margin: 0;
        ">
          Tinh túy từ lá trà tươi hảo hạng
        </p>
        <v-btn height="50px" width="205px" style="
          padding: 10px 50px;
          background-color: transparent;
          ">
          Tìm hiểu thêm
        </v-btn>
      </div>
    </div>
    <div class="box-3">
      <v-row>
        <v-col :cols="$store.state.responsive ? 12 : 4">
          <p style="font-size: 21px;" class="ms-5 pt-5">Bí quyết để có một ly trà hảo hạng</p>
          <v-img class="ms-5" src="https://gongcha.com.vn/wp-content/uploads/2017/12/ly-tra.png" width="289" height="310"></v-img>
        </v-col>
        <v-col :cols="$store.state.responsive ? 12 : 8">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="pink"
            grow
          >
            <v-tab
              v-for="item in tab_items"
              :key="item.title"
              @change="occ(item.title)"
            >
              {{ item.title }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="item in tab_items"
              :key="item.title"
            >
              <v-card
                color="basil"
                style="background-color:#f5eee8"
                flat
              >
                <v-card-title >{{ item.title }}</v-card-title>
                <v-card-text >{{ item.text }}</v-card-text>
                <v-btn height="50px" width="205px" style="
                  padding: 10px 50px;
                  background-color: #f5eee8;
                  "
                  class="ms-4"
                  @click="$router.push('/menu');"
                  >
                  Tìm hiểu thêm
                </v-btn>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
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
    tab: null,
    tab_items: [
      {
        title: 'Trà Nguyên Chất',
        text: 'Dòng trà nguyên chất Gong Cha được nhập khẩu trực tiếp từ Đài Loan đậm đà và nguyên bản được sử dụng trong vòng 4 giờ sau khi nấu đảm bảo hương vị và chất lượng hoàn hảo!',
        link: '/menu',
      },
      {
        title: 'Trà Sữa',
        text: 'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.',
        link: '/menu',
      },
      {
        title: 'Thức Uống Đá Xay',
        text: 'Mát lạnh và ngọt ngào, 5 loại đá xay Gong Cha mang đến một trải nghiệm về đá xay mới tại Gong Cha.',
        link: '/menu',
      },
      {
        title: 'Kem',
        text: 'Dòng thức uống đặc biệt kết hợp giữa trà nguyên chất với lớp milk foam béo cùng vị mặn nhẹ đặc trưng mang đến điểm nhấn sáng tạo cho một thức uống quen thuộc.',
        link: '/menu',
      },
    ],
    text: 'Hello',
    slide_baner: [
      {
        src: 'https://gongcha.com.vn/wp-content/uploads/2022/08/cover-web-Genmai-01-scaled.jpg',
      },
      {
        src: 'https://gongcha.com.vn/wp-content/uploads/2022/08/cover-web-sweet-summer-01-1-scaled.jpg',
      },
      {
        src: 'https://gongcha.com.vn/wp-content/uploads/2022/06/cover-web-lhoa%CC%80ng-kim-01.jpg',
      },
    ],
  }),
  watch: {
    options: {
    },
  },

  methods: {
    occ(sa){
      console.log(sa);
    }
  },
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Open%20Sans);

.box-2 {
  background-image: url(http://gongcha.com.vn/wp-content/uploads/2018/04/Banner-Tinh-Túy-Trà22.jpg?id=804);
  margin: auto;
}

.box-2 .box-content {
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

.box-3 {
  background-color: #f5eee8 !important;
}
.box-3 button {
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
</style>