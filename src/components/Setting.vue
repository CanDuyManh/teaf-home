<template>
  <div>
    <v-row>
      <v-col style="max-width: 200px;">
        <div class="pt-5" style="min-width: 180px;">
          <div class="container">
            <p class="text-hover mb-3">
              <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" width="17" height="17">
              10.10 Sale
            </p>
            <p class="text-hover mb-3" @click="setting_page_item = 'myOrders'">
              <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" width="17" height="17">
              Đơn Mua
            </p>
            <p class="text-hover mb-3" @click="setting_page_item = 'notification'">
              <img src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c" width="17" height="17">
              Thông Báo
            </p>
            <p class="text-hover mb-3" @click="setting_page_item = 'profile'">
              <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" width="17" height="17">
              Tài khoản của tôi
            </p>
            <p class="text-hover mb-3" @click="setting_page_item = 'vouchers'">
              <img src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748" width="17" height="17">
              Kho Voucher
            </p>
          </div>
        </div>
      </v-col>
      <v-col>
        <div style="min-width: 700px; background-color: #f5eee8; min-height: 900px;">
          <div v-switch="setting_page_item">
            <Profile v-case="'profile'"></Profile>
            <MyOrders v-case="'myOrders'"></MyOrders>
            <Vouchers v-case="'vouchers'"></Vouchers>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
  
</template>
  
<script>

import Profile from './settingPages/Profile.vue';
import MyOrders from './settingPages/MyOrders.vue';
import Vouchers from './settingPages/Vouchers.vue';
import { vSwitch, vCase } from 'v-switch-case'
export default {
  name: 'MenuProductItem',
  directives: { 
      'switch': vSwitch,
      'case': vCase,
    },
  components: {
    Profile,
    MyOrders,
    Vouchers
  },
  props: {
    category: Object,
  },
  data: () => ({
    delete_select: {},
    delete_confirm: false,
    carts: [],
    select_size: [],
    total_money: 0,
    setting_page_item: 'profile',
    
  }
  ),
  methods: {
    
  },
  created() {
    if (!this.$store.state.token) {
      this.$router.push('/login');
    }
  },
}
</script>
<style>
.box {
  border: 1px solid rgb(0 0 0 / 5%);
  background: white;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);

}
</style>