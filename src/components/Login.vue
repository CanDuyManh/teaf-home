
<template>
  <div class="bgr" style="background-image: url(https://preview.colorlib.com/theme/bootstrap/login-form-20/images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp);height: 657px;">
    <v-container class="mt-5">
      <v-row
      justify="center"
      no-gutters
      >
      <v-col><p class="text-h5 text-center mb-5 pb-5 mt-5 pt-5" style="color:#fff;">Login</p></v-col>
    </v-row>
    <v-row
      justify="center"
      no-gutters
      >
      <v-col style="max-width: 300px;" cols="6">
        <p class="text-h5 text-center font-weight-light" :style="err ? 'color:#DC143C' : 'color:#fff;'">{{notification}}</p>
        <v-text-field
            v-model="user_name"
            label="user_name"
            outlined
          ></v-text-field>  
          <v-text-field
            v-model="password"
            label="password"
            type="password"
            outlined
            style=""
          ></v-text-field>  
          <div class="text-end">
            <v-btn style="background-color: antiquewhite;">
              đăng nhập
            </v-btn>
          </div>
      </v-col>
    </v-row>
        
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ProductManager',
  data: () => ({
    user_name: '',
    password: '',
    notification: 'Bạn đã có tài khoản ?',
    err: false,
  }),
  methods: {
    onlogin() {
      if(!this.user_name){
        this.err = true;
        return this.notification = 'Hãy nhập User Name !';
        
      }
      if(!this.password){
        this.err = true;
        return this.notification = 'Hãy nhập password !';
      }
      let dataToSend = {
        user_name: this.user_name,
        password: this.password,
      }
      axios.post(this.$store.state.api + 'auth/login',dataToSend).then( res => {
        const { data } = res;
        if (data.status == 400 ){
          this.err = true;
          return this.notification = data.message;
        } else if (data.status == 200 ){
          this.$store.state.token = data.token;
          this.$store.state.user = data.user;
          this.$cookies.set('token', data.token);
          this.$cookies.set('user', data.user);
          this.$router.push('/menu');
        }

      });

      
    },
    listenKeyup(event) {
      if (event.keyCode == 13) {
        this.onlogin();
      }
    }
  },
  created() {
    window.addEventListener('keyup', this.listenKeyup);
    if (this.$store.state.token && this.$store.state.user.id) {
      this.$router.push('/menu')
    } 
  },
}
</script>
<style>
  .bgr {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>
      