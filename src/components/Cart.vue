<template>
  <div style="min-width: 860px; background-color: #f5eee8; min-height: 900px;">
    <div class="container">
      <div class="box-header box mt-5">
        <v-row class="ps-5 pt-2 pb-2 be-5">
          <v-col cols="3">
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
          <v-row class="ps-5 pt-2 pb-2 be-5">
            <v-col cols="3">
              <v-row>
                <v-col cols="3">
                  <v-img :src="item.images" width="80" height="80"></v-img>
                </v-col>
                <v-col class="pt-5" cols="6">
                  <span>{{item.name}}</span>
                </v-col>
                <v-col class="align-self-center" cols="3">
                  <v-row>
                    <v-col class="pt-5" cols="3">
                      <span>{{item.size}}</span>
                    </v-col>
                    <v-col cols="7">
                      <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="black" dark v-bind="attrs" v-on="on" icon @click="clickSize(item.product_id)">
                            <v-icon>
                              mdi-menu-down
                            </v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item v-for="(sizeItem, index) in select_size" :key="index">
                            <v-list-item-title @click="sizeItem.size == item.size ? '' : updateSize(item,sizeItem)"
                              class="btn-icon">{{ sizeItem.size }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-col>
                  </v-row>

                </v-col>
              </v-row>
            </v-col>
            <v-col class="align-self-center" cols="2">
              <p class="text-center ms-5 mb-0">{{moneydot(item.price)}} đ</p>
            </v-col>
            <v-col class="align-self-center text-center" cols="2">
              <input type="number" class="text-center" @change="(v)=>{
              $store.state.total_cart = $store.state.total_cart + ( v.target.value - item.amount );
              item.amount = v.target.value;
              updateAmount(item);}" :value="item.amount" style="max-width: 60px;border: 1px solid rgb(0 0 0 / 10%);">
            </v-col>
            <v-col class="align-self-center" cols="2">
              <p class="text-center ms-5 mb-0">{{moneydot(item.price * item.amount)}} đ</p>
            </v-col>
            <v-col class="align-self-center" cols="2">
              <p @click="delete_select = item; delete_confirm = true;" 
              class="text-center ms-5 mb-0"><a class="" style="color: red;">Xóa</a>
              </p>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </div>

      <div class="box-footer box mt-3">
        <v-row align-self="end">
          
          <v-col cols="6">
          </v-col>
          <v-col cols="2">
            <p class="text-body-1 text-end me-5 mt-5">Tổng: </p>
          </v-col>
          <v-col cols="2">
            <p class="text-body-1 text-start me-5 mt-5">{{moneydot(total_money)}} đ</p>
          </v-col>
          <v-col cols="2">
            <p class="text-start me-5 mt-5">
              <v-btn small dens class="d-inline" 
                      style="letter-spacing: normal; text-transform: none;
                      background-color: #f8e5de;border: 1px solid #ddd;color: #b81f32; font-size: ;"
                      @click="payment()"
                      >Thanh toán</v-btn>
            </p>
          </v-col>
        </v-row>
      </div>

    </div>
    <v-dialog
      v-model="delete_confirm"
      max-width="220"
    >
      <v-card>
        <v-card-title class="">
        </v-card-title>
        <v-card-text>
          <span class="text-body-1">
            Bạn chắc chắn muốn xóa không ?
          </span>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="delete_confirm = false"
          >
            Hủy
          </v-btn>
          <v-btn
            color="red"
            text
            @click="cartRemove(delete_select); delete_confirm = false"
          >
            Xóa
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    delete_select: {},
    delete_confirm: false,
    carts: [],
    select_size: [],
    total_money: 0,
  }
  ),
  methods: {
    payment(){
      
    },
    getTotalMoney(){
      this.total_money = 0;
      for (const item of this.carts) {
        this.total_money = this.total_money + (item.price * item.amount);
      }
    },
    clickSize(pid) {
      axios.get(this.$store.state.api + 'customer/productDetail/size?product_id=' + pid).then(
        res => {
          this.select_size = res.data.data;
        }
      )

    },
    occ(v) {
      console.log(v.target.value);
    },
    getcarts() {
      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }
      axios.get(this.$store.state.api + 'customer/carts', config).then(res => {
        const { data } = res.data;
        this.carts = data;
        console.log('doen');
        this.getTotalMoney();
      });
    },
    updateSize(cart, size) {
      console.log('cart : ', cart);
      console.log('size : ', size);
      axios.post(this.$store.state.api + 'customer/addToCart',
        {
          product_id: cart.product_id,
          product_detail_id: size.id,
          amount: cart.amount,
        },
        this.$store.getters.defauConfig
      ).then(res => {
        if (res.data.status == 200) {
          axios.delete(this.$store.state.api + 'customer/removeToCart/' + cart.cart_id,
            this.$store.getters.defauConfig
          ).then(
            res_delete_cart => {
              if (res_delete_cart.data.status == 200) {
                this.getcarts();
              }
            }
          )
        }
      });
    },
    updateAmount(cart) {
      console.log(cart);
      axios.put(this.$store.state.api + 'customer/cart/updateAmount',
        { cart_id: cart.cart_id, amount: cart.amount },
        this.$store.getters.defauConfig,
      ).then(res => {
        if (!res || res.status != 200 || !res.data || res.data.status != 200) {
          this.getcarts();
        } else {
          this.getTotalMoney();
        }
      }).catch(
        () => {
          this.getcarts();
        }
      );
    },
    moneydot(monney) {
      return monney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    },
    cartRemove(cart) {
      axios.delete(this.$store.state.api + 'customer/removeToCart/' + cart.cart_id,
        this.$store.getters.defauConfig
      ).then(res => {
        if (!res || res.status != 200 || !res.data || res.data.status != 200) {
          return this.getcarts();
        }
        this.carts = this.carts.filter( v => v.cart_id != cart.cart_id);
        this.$store.state.total_cart = this.$store.state.total_cart - cart.amount;
      }).catch(
        () => {
          this.getcarts();
        }
      );
    }
  },
  created() {
    if (!this.$store.state.token) {
      this.$router.push('/login');
    }
    this.getcarts()
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