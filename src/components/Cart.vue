<template>
  <div style="min-width: 860px; background-color: #f5eee8; min-height: 900px;">
    <div class="container">
      <div class="box-header box mt-5">
        <v-row class="ps-5 pt-2 pb-2 be-5">
          <v-col cols="4">
            <p class="ms-5 mb-0">Sản phẩm</p>
          </v-col>
          <v-col cols="2">
            <p class="text-center ms-5 mb-0">Đơn giá</p>
          </v-col>
          <v-col cols="2">
            <p class="text-center ms-5 mb-0">Số lượng</p>
          </v-col>
          <v-col cols="2">
            <p class="text-center ms-5 mb-0">Số tiền</p>
          </v-col>
          <v-col cols="2">
            <p class="text-center ms-5 mb-0">Thao tác</p>
          </v-col>
        </v-row>
      </div>

      <div class="box-body box mt-5">
        <div v-for="(item, index) in carts" :key="index">
          <v-row  class="ps-5 pt-2 pb-2 be-5">
          <v-col cols="4">
            <v-row>
              <v-col cols="3">
                <v-img :src="item.images"
                  width="80" height="80"
                ></v-img>
              </v-col>
              <v-col class="pt-5" cols="6">
                <span>{{item.name}}</span>
              </v-col>
              <v-col class="pt-5" cols="3">
                <v-select
                  class="elm_select"
                  rounded
                  :items="['M','L','XXL']"
                  :value="item.size"
                ></v-select>
              </v-col>
            </v-row>
            </v-col>
          <v-col class="align-self-center" cols="2">
            <p class="text-center ms-5 mb-0">{{item.price}} đ</p>
          </v-col>
          <v-col class="align-self-center text-center" cols="2">
            <input type="number" class="text-center" @change="(v)=>{item.amount = v.target.value}" :value="item.amount" style="max-width: 60px;border: 1px solid rgb(0 0 0 / 10%);">
          </v-col>
          <v-col class="align-self-center" cols="2">
            <p class="text-center ms-5 mb-0">{{item.price * item.amount}} đ</p>
          </v-col>
          <v-col class="align-self-center" cols="2">
            <p  class="text-center ms-5 mb-0"><a class="" style="color: red;">Xóa</a></p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        </div>
      </div>

    </div>
  </div>
</template>
  
  <script>

    import axios from "axios";
    export default {
      name: 'MenuProductItem',
      props: {
        category: Object,
      },
      data: () => ({
        carts: []
      }
      ),
      methods: {
        occ(v){
          console.log(v.target.value);
        },
        getcarts (){
          const config = {
            headers: {
                Authorization: "Bearer " + this.$store.state.token
            }
          }
          axios.get(this.$store.state.api + 'customer/carts', config).then( res => {
            const { data } = res.data;
            this.carts = data;
            console.log(data);
          });
        },
      },
      created() {
        if(!this.$store.state.token){
          this.$router.push('/login');
        }
        this.getcarts()
      },
    }
  </script>
  <style>
    .elm_select > .v-input__control > .v-input__slot {
      padding: 0px;
    }
    .box {
      border: 1px solid rgb(0 0 0 / 5%);
      background: white;
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
      
    }
  </style>