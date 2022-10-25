<template>
    <div style="min-width: 860px; background-color: #f5eee8; min-height: 900px;">
      <div class="container">
        <h1>Password page</h1>
      </div>
    </div>
  </template>
  
  <script>
  
  import axios from "axios";
  export default {
    name: 'Password',
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
      payment() {
  
      },
      getTotalMoney() {
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
          this.carts = this.carts.filter(v => v.cart_id != cart.cart_id);
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