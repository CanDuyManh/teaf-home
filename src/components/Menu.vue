
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
            <v-col  v-for="category in categorys" :key="category.id" :cols="$store.state.responsive ? '12' : '3'"> <v-icon color="#b81f32"> mdi-cup-water </v-icon> <a style="font-size: 15px" class="ms-1" :href="'#box'+ category.id">{{category.name}}</a> </v-col>
          </v-row>
        </div>
      </div>
      <MenuProductItem v-for="category in categorys" :key="category.id" :category="category" v-on:opendialog="event_up_opendialog" ></MenuProductItem>
    </div>
    <v-dialog
        transition="dialog-bottom-transition"
        v-model="dialog_item"
      >
          <v-card style="background-color: #f8e5de;">
            <v-card-text class="pt-5">
              <div class="text-end">
                    <a @click="dialog_item = false">
                    <v-icon class="">mdi-window-close</v-icon>
                    </a>
                  </div>
              <v-row>
                <v-col class="dialog-item-img" :cols="$store.state.responsive ? 12 : 4">
                  <v-img :src="product.image" width="300" hei ght="300"></v-img>
                  <p>
                    * Hình ảnh chỉ mang tính chất minh hoạ
                  </p>
                </v-col>
                <v-col class="dialog-item-img" :cols="$store.state.responsive ? 12 : 8">
                 
                  <h6 class="text-h6 font-weight-light mt-5" style="color:#000000;">{{product.name}}</h6>
                  <div class="dialog-item-type mt-5">
                   <v-row>
                    <v-col :cols="$store.state.responsive ? 6 : 3">
                      <v-row style="max-width: 130px"> 
                      <v-col style="padding-right: 0px;" cols="6">
                        <a><v-img class="me-2" src="https://gongcha.com.vn/wp-content/themes/theme/images/ico-cold.png" width="48" height="88">
                        </v-img></a>
                        <div style="background-color:#b81f32; width: 44px; height: 5px;"></div>
                      </v-col>
                      <!-- <v-col cols="6">
                        <a><v-img class="me-2" src="https://gongcha.com.vn/wp-content/themes/theme/images/ico-hot.png" width="48" height="88">
                        </v-img></a>
                        <div style="background-color:#b81f32; width: 44px; height: 5px;"></div>
                      </v-col> -->
                    </v-row>
                    </v-col>
                    <v-col class="mt-3" :cols="$store.state.responsive ? 6 : 3">
                      <div>
                        <span style="color:rgb(184, 31, 50);">Size: </span>
                        <span class="ms-2 rounded-circle ps-2 pe-2 pt-1 pb-1" style="background-color: rgb(184, 31, 50); color:rgb(255, 255, 255);"> {{sizeSelect}} </span>
                      </div>
                      <div class="mt-5">
                        <span style="color:rgb(184, 31, 50);">Giá: </span>
                        <span class="ms-2 " style="color:rgb(184, 31, 50);"> {{moneydot(priceSelect)}} đ</span>
                      </div>
                    </v-col>
                    <v-col class="mt-2" :cols="$store.state.responsive ? 12 : 5">
                      <v-btn small dens class="mt-3 d-inline me-2" 
                      style="letter-spacing: normal; text-transform: none;
                      background-color: #f8e5de;border: 1px solid #ddd;color: #b81f32; font-size: ;"
                      @click="addToCart()"
                      >Thêm vào giỏ</v-btn>
                      <v-btn small dens class="mt-3 d-inline" style="letter-spacing: normal; text-transform: none;background-color: #f8e5de;border: 1px solid #ddd;color: #b81f32; font-size: ;">Mua ngay</v-btn>

                    </v-col>
                   </v-row>
                  </div>
                  <div class="dialog-item-info mt-5">
                    <p class="text-subtitle-1">
                      Thông Tin
                    </p>
                    <v-simple-table style="background-color: #f8e5de;">
                      <thead>
                        <tr>
                          <th class="text-center" style="border: 1px solid #ddd;color: #b81f32;">
                            Tên món
                          </th>
                          <th class="text-center" style="border: 1px solid #ddd;color: #b81f32;">
                            Size
                          </th>
                          <th class="text-center" style="border: 1px solid #ddd;color: #b81f32;">
                            Giá tiền (VNĐ)	
                          </th>
                          <th class="text-center" style="border: 1px solid #ddd;color: #b81f32;">
                            Lượng đường (g)	
                          </th>
                          <th class="text-center" style="border: 1px solid #ddd;color: #b81f32;">
                            Caffeine
                          </th>
                          <th class="text-center" style="border: 1px solid #ddd;color: #b81f32;">
                            Calories (Có đường)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in productDetail"
                          :key="item.index"
                          @click="sizeSelect = item.size; priceSelect = item.price; productDetailSelect = item.id"
                        >
                        <td v-if="index == 0" rowspan="3" class="text-center" style="border: 1px solid #ddd;">
                            {{item.name}}
                        </td>
                        <td class="text-center" style="border: 1px solid #ddd;">
                            {{item.size}}
                        </td>
                        <td class="text-center" style="border: 1px solid #ddd;">
                            {{moneydot(item.price)}}
                        </td>
                        <td class="text-center" style="border: 1px solid #ddd;">
                            {{moneydot(item.suger)}}
                        </td>
                        <td class="text-center" style="border: 1px solid #ddd;">
                            {{moneydot(item.caffeine)}}
                        </td>
                        <td class="text-center" style="border: 1px solid #ddd;">
                            {{moneydot(item.calories)}}
                        </td>
                        </tr>
                      </tbody>
                  </v-simple-table>
                  </div>
                  <p class="mt-5">(*) Thông tin dinh dưỡng chỉ mang tính chất tham khảo.</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
      </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
import MenuProductItem from './MenuProductItem.vue';
export default {
  name: "Home",

  components: {
    MenuProductItem
  },
  data: () => ({
    absolute: true,
    overlay: false,
    dialog_item: false,
    categorys: [],
    sizeSelect: 'M',
    productDetailSelect: 'M',
    priceSelect: 0,
    productSelect: {},
    product: {
      name : '',
      image : ''
    },
    productDetail: null,
  }),
  watch: {
    options: {},
  },

  methods: {
    occ(){
      this.$store.state.total_cart = 2;
    },
    init() {
      axios.get(this.$store.state.api + 'customer/categorys').then( res => {
        const { data } = res.data;
        this.categorys = data;
      })
    },
    moneydot(monney) {
      return monney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    },
    event_up_opendialog(product) {
      this.dialog_item = !this.dialog_item;
      this.product = product;
      axios.get(this.$store.state.api + 'customer/productDetails?product_id=' + product.id).then( res => {
        const { data } = res.data;
        this.productDetail = data;
        this.productSelect.id = product.id;
        this.sizeSelect = data[0].size;
        this.priceSelect = data[0].price;
        this.productDetailSelect = data[0].id;
      })
    },
    addToCart() {
      let dataToSend = {
        product_id: this.productSelect.id,
        product_detail_id: this.productDetailSelect,
      }
      if (!this.$store.state.token) {
        this.$router.push('/login');
      }
      let config = {
            headers: {
                Authorization: "Bearer " + this.$store.state.token
            }
        };
      axios.post(this.$store.state.api + 'customer/addToCart', dataToSend, config).then( res => {
        const { data } = res;
        if (data.status == 200) {
          this.$store.state.total_cart = this.$store.state.total_cart + 1;
        }
      });

    }
  },
  created() {
    this.init();
  },
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