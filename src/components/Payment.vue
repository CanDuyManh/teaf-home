<template>
  <div style="min-width: 860px; background-color: #f5eee8; min-height: 900px;">
   <div class="container">
    <div class="box-header pb-5 box mt-5">
      <div class="envenlope"></div>
      <p class="text-h6 font-weight-normal ms-5 mt-5 pink--text"><v-icon>mdi-google-maps</v-icon> Địa chỉ nhận hàng</p>
      <span class="text-caption ms-5">{{myAddress.name}} - 
        {{myAddress.phone}} -
        {{myAddress.address_details}}</span>
         <span class="ms-5" ><a @click="address_dialog = true" class="blue--text">Thay đổi</a></span>
    </div>
    <div class="box-body box pt-5 mt-3">
      <v-row>
        <v-col cols="6"><p class="text-body-1"></p></v-col>
        <v-col cols="2"><p class="text-body-2 text-center text--disabled">Đơn giá</p></v-col>
        <v-col cols="2"><p class="text-body-2 text-center text--disabled">Số lượng</p></v-col>
        <v-col cols="2"><p class="text-body-2 text-center text--disabled">Thành tiền</p></v-col>
      </v-row>
      <div v-for="(item, index) in carts" :key="index">
          <v-row class="ps-5 pt-2 pb-2 be-5">
            <v-col cols="6">
              <v-row>
                <v-col cols="3">
                  <v-img :src="item.images" width="80" height="80"></v-img>
                </v-col>
                <v-col class="align-self-center" cols="6">
                  <span>{{item.name}}</span>
                </v-col>
                <v-col class="align-self-center" cols="3">
                  <p class="text-center ms-5 mb-0">Size: {{item.size}}</p>
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

    <div class="box pt-5">
      <v-row>
        <v-col cols="5">
          <p class="ps-5 text-body-1 mt-3"><v-icon class="me-3">mdi-ticket-confirmation-outline</v-icon> Voucher</p>
        </v-col>
        <v-col cols="4" class="pb-3">
          <v-row>
            <v-col cols="8">
              <v-text-field v-model="tf_voucher" hide-details persistent-placeholder placeholder=" " outlined dense ></v-text-field> 
            </v-col>
            <v-col cols="4"> 
              <v-btn small dens class="d-inline me-5 mt-2" 
              style="letter-spacing: normal; text-transform: none;"
              @click="applyVoucher()"
              >Áp dụng</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <p class="pink--text text-end me-5 mt-3">- {{moneydot(moneyDiscount)}} đ {{discount_percent > 0 ? `(${discount_percent}%)` : ''}}</p>
        </v-col>
      </v-row>
    </div>

    <div class="box-footer box mt-3">
        <v-row dense align-self="end">
          <v-col cols="10">
            <p class="text-body-2 grey--text text-end me-5 mt-5">Tổng tiền: </p>
          </v-col>
          <v-col cols="2">
            <p class="text-body-2 text-end me-5 mt-5">{{moneydot(total_money)}} đ</p>
          </v-col>

          <v-col cols="10">
            <p class="text-body-2 grey--text text-end me-5">Phí vẩn chuyển: </p>
          </v-col>
          <v-col cols="2">
            <p class="text-body-2 text-end me-5">{{moneydot(15000)}} đ</p>
          </v-col>

          <v-col cols="10">
            <p class="text-body-2 grey--text text-end me-5">Giảm giá: </p>
          </v-col>
          <v-col cols="2">
            <p class="text-body-2 text-end me-5">- {{moneydot(moneyDiscount)}} đ</p>
          </v-col>

          <v-col cols="10">
            <p class="text-body-1 text-end me-5">Tổng: </p>
          </v-col>
          <v-col cols="2">
            <p class="text-body-1 text-end me-5">{{moneydot(total_money - moneyDiscount + 15000)}} đ</p>
          </v-col>
          <v-col cols="12"><div style="border-top: 1px dashed rgba(0,0,0,.09);" class="text-end mb-2">
            <v-btn small dens class="d-inline me-5 mt-2" 
              style="letter-spacing: normal; text-transform: none;
              background-color: #f8e5de;border: 1px solid #ddd;color: #b81f32;"
              @click="payment()"
              >Đặt hàng</v-btn>
          </div></v-col>
        </v-row>

    </div>

    <v-dialog
      v-model="address_dialog"
      max-width="420"
    >
      <v-card>
        <v-card-title class="">
          Thêm địa chỉ nhận hàng
        </v-card-title>
        <v-card-text>
          <span class="text-caption">
            Chỉ hỗ trợ giao hàng khu vực phúc thọ.
          </span>
          <v-row class="mt-1">
            <v-col cols="6">
              <v-text-field v-model="address_change_name" hide-details persistent-placeholder placeholder=" " outlined dense  label="Họ tên"></v-text-field> 
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="address_change_phone" hide-details persistent-placeholder placeholder=" " outlined dense  label="Số Điện Thoại"></v-text-field> 
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="address_change_place" hide-details persistent-placeholder placeholder=" " outlined dense  label="Địa chỉ cụ thể"></v-text-field> 
            </v-col>
            <v-col cols="12">
              <v-switch
                v-model="address_change_is_default"
                label="Chọn làm địa chỉ mặc định"
              ></v-switch>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="address_dialog = false"
          >
            Hủy
          </v-btn>
          <v-btn
            color="red"
            text
            @click="add_address();"
          >
            Thêm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


   </div>
  </div>
</template>
  
<script>

import axios from "axios";
import validation from '../unitys/validation';
export default {
  name: 'Payment',
  props: {
    category: Object,
  },
  data: () => ({
    discount_percent: '',
    tf_voucher: '',
    moneyDiscount: 0,
    myAddress: '',
    address_change_name: '',
    address_change_phone: '',
    address_change_place: '',
    address_change_is_default: true,
    address_dialog: false,
    carts: [],
    total_money: 0,
  }
  ),
  methods: {
    applyVoucher(){
      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }
      axios.get(this.$store.state.api + 'customer/loadVoucher?code=' + this.tf_voucher, config).then(res => {
        const { data } = res.data;
        if (data){
          if (data.discount_type == 1) {
          this.moneyDiscount = (this.total_money * data.discount) / 100;
          this.discount_percent = data.discount;
          this.$store.state.dialog_alter_body = `Bạn đã sử dụng mã giảm ${data.discount}% .`;
          this.$store.state.dialog_alter = true;
          } else if (data.discount_type == 2) {
            this.moneyDiscount =  data.discount;
            this.discount_percent = 0;
            this.$store.state.dialog_alter_body = `Bạn đã sử dụng mã giảm ${data.discount}đ .`;
            this.$store.state.dialog_alter = true;
          }

        } else {
          this.$store.state.dialog_alter_body = 'Không tìm thấy voucher.';
          this.$store.state.dialog_alter = true;
        }
      });
    },
    payment(){
      axios.post(this.$store.state.api + 'customer/payment',
        {
          address_id: this.myAddress.id,
          voucher_code: this.tf_voucher,
        },
        this.$store.getters.defauConfig
      ).then(res => {
        if (res.data.status == 200) {
          this.$store.state.dialog_alter_body = 'Đặt hàng thành công !';
          this.$store.state.dialog_alter = true;
          this.$router.push('/menu')
        }
      });
    },
    getTotalMoney(){
      this.total_money = 0;
      for (const item of this.carts) {
        this.total_money = this.total_money + (item.price * item.amount);
      }
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
        this.getTotalMoney();
      });
    },
    moneydot(monney) {
      if (!monney) {
        monney = 0;
      }
      return monney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    },
    add_address() {
      if ( !this.address_change_name) {
        this.$store.state.dialog_alter_body = 'Tên Không hợp lệ.';
        this.$store.state.dialog_alter = true;
        return;
      }
      if ( !this.address_change_phone || !validation.isPhone(this.address_change_phone)) {
        this.$store.state.dialog_alter_body = 'Số điện thoại hợp lệ.';
        this.$store.state.dialog_alter = true;
        return;
      }
      if ( !this.address_change_place) {
        this.$store.state.dialog_alter_body = 'Địa chỉ không hợp lệ.';
        this.$store.state.dialog_alter = true;
        return;
      }

      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }
      const dataSend = {
        name: this.address_change_name,
        phone: this.address_change_phone,
        is_default: this.address_change_is_default,
        address_details: this.address_change_place,
      }
      axios.post(this.$store.state.api + 'customer/address', dataSend, config).then(()=> {
        this.load_address();
        this.address_dialog = false;
        this.$store.state.dialog_alter_body = 'Thêm mới địa chỉ thành công.';
        this.$store.state.dialog_alter = true;
      });


    },
    load_address(){
      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }
      axios.get(this.$store.state.api + 'customer/address', config).then(res => {
        const { data } = res.data;
        this.myAddress = data[0];
      });
    },
  },
  created() {
    if (!this.$store.state.token) {
      this.$router.push('/login');
    }
    this.getcarts()
    this.load_address()
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