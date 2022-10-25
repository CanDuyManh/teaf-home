<template>
  <div style="min-width: 860px; background-color: #f5eee8; min-height: 900px;">
    <div class="container">
      <div class="container">
        <div class="box-header box mt-5">
          <v-row class="ps-5 pt-2 pb-2 be-5">
            <v-col @click="fill_order = 'CXN'" :class="[fill_order == 'CXN' ? 'fill_select' : '']" cols="2">
              <p class="text-center btn-pointer mb-0">Chờ xác nhận</p>
            </v-col>
            <v-col @click="fill_order = 'CLH'" :class="[fill_order == 'CLH' ? 'fill_select' : '']" cols="2">
              <p class="text-center btn-pointer mb-0">Chờ lấy hàng</p>
            </v-col>
            <v-col @click="fill_order = 'DG1'" :class="[fill_order == 'DG1' ? 'fill_select' : '']" cols="2">
              <p class="text-center btn-pointer mb-0">Đang giao</p>
            </v-col>
            <v-col @click="fill_order = 'DG2'" :class="[fill_order == 'DG2' ? 'fill_select' : '']" cols="2">
              <p class="text-center btn-pointer mb-0">Đã giao</p>
            </v-col>
            <v-col @click="fill_order = 'DH'" :class="[fill_order == 'DH' ? 'fill_select' : '']" cols="2">
              <p class="text-center btn-pointer mb-0">Đã hủy</p>
            </v-col>
          </v-row>
        </div>
        
        <div class="box-body box mt-5" v-for="(itemOrder, index) in myOrders" :key="index" >
          <div >
            <div class="me-5 mt-3 status text-end"><span class="teal--text accent-1"> <v-icon class="me-2">mdi-van-utility</v-icon> {{itemOrder.shipping}}</span></div>
            <div v-for="(item, index) in itemOrder.order_details" :key="index">
              <v-row class="ps-5 pt-2 pb-2 be-5">
                
                <v-col cols="5">
                  <v-row>
                    <v-col cols="3">
                      <v-img :src="item.images" width="80" height="80"></v-img>
                    </v-col>
                    <v-col class="pt-5" cols="6">
                      <span>{{item.name}}</span>
                    </v-col>
                    <v-col class="align-self-center" cols="3">
                      <span>{{item.size}}</span>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="align-self-center" cols="2">
                  <p class="text-center ms-5 mb-0">{{moneydot(item.price)}} đ</p>
                </v-col>
                <v-col class="align-self-center text-center" cols="2">
                  <p class="text-center ms-5 mb-0">x{{item.amount}}</p>
                </v-col>
                <v-col class="align-self-center" cols="2">
                  <p class="text-center ms-5 mb-0">{{moneydot(item.price * item.amount)}} đ</p>
                </v-col>
                
              </v-row>
              <v-divider></v-divider>
            </div>
          </div>
          <v-row>
            <v-col cols="7">
              <p class="text-body-1 ms-5 mt-5">Địa Chỉ Nhận Hàng</p>
              <p style="margin-bottom: 4px;" class="text-body-2 text--secondary ms-5">{{itemOrder.name}}</p>
              <p style="margin-bottom: 4px;" class="text-body-2 text--secondary ms-5">{{itemOrder.phone}}</p>
              <p style="margin-bottom: 4px;" class="text-body-2 text--secondary ms-5">{{itemOrder.address_details}}</p>
            </v-col>
            <v-col cols="5">
              <v-row dense align-self="end">
                <!-- tiền hàng -->
              <v-col cols="8">
                <p class="text-body-2 text-end mt-5">Tiền hàng: </p>
              </v-col>
              <v-col cols="4">
                <p class="text-body-2 text-end me-5 mt-5">{{moneydot(itemOrder.product_money)}} đ</p>
              </v-col>
                <!-- tiền ship -->
              <v-col cols="8">
                <p class="text-body-2 text-end ">Phí ship: </p>
              </v-col>
              <v-col cols="4">
                <p class="text-body-2 text-end me-5 ">{{moneydot(itemOrder.shipping_fee)}} đ</p>
              </v-col>
                <!-- tiền giảm giá -->
              <v-col cols="8">
                <p class="text-body-2 text-end ">Giảm giá: </p>
              </v-col>
              <v-col cols="4">
                <p class="text-body-2 text-end me-5">{{moneydot(itemOrder.discount_vc)}} đ</p>
              </v-col>
                <!-- tổng tiền -->
              <v-col cols="8">
                <p class="text-body-1 text-end">Tổng: </p>
              </v-col>
              <v-col cols="4">
                <p class="text-body-1 text-end me-5">{{moneydot(itemOrder.total_money)}} đ</p>
              </v-col>
              </v-row>
            </v-col>
          </v-row>
          
        </div>
        <div class="box-footer box mt-3">
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: 'MyOrders',
  props: {
    category: Object,
  },
  data: () => ({
    total_money: 0,
    myOrders: [],
    fill_order: 'CXN',
  }
  ),
  methods: {
    getMyOrder() {
      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }
      axios.get(this.$store.state.api + 'customer/myorders?page=' + 0, config).then(res => {
        const { data } = res.data;
        this.myOrders = data;
      });
    },
    getTotalMoney() {
      this.total_money = 0;
      for (const item of this.carts) {
        this.total_money = this.total_money + (item.price * item.amount);
      }
    },
    
    occ(v) {
      console.log(v.target.value);
    },
    
    moneydot(monney) {
      return monney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    },
  },
  created() {
    if (!this.$store.state.token) {
      this.$router.push('/login');
    }
    this.getMyOrder();
  },
}
</script>
<style>
.box {
  border: 1px solid rgb(0 0 0 / 5%);
  background: white;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
}
.fill_select {
  color: red;
  border-bottom: 1.5px solid red;
}
</style>