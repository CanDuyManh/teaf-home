<template>
  <div style="padding-top: 13px;">
    <div class="about-header d-flex"
    >
      <p class="text-h3 ms-5 align-self-center">Giới thiệu</p>
    </div>
    <div class="box1 box">
      <v-row>
        <v-col :cols="$store.state.responsive ? '12' : '6'">
          <p class="h2">
            CÂU CHUYỆN THƯƠNG HIỆU
          </p>
          <p style="font-size:16px">Tên gọi Gong Cha xuất phát từ ý nghĩa trong tiếng Hoa là Trà cung đình. Thời xưa, các loại trà tốt nhất thường được các vị hoàng thân quý tộc ngự dùng. Ngày nay, Gong Cha mong muốn phục vụ các loại trà tốt nhất cho thực khách, cũng như chính tên gọi của thương hiệu. Kể từ khi được thành lập vào năm 2006 tại Đài Loan, chuỗi cửa hàng Gong Cha đã mở rộng trên khắp 19 quốc gia với 1.500 cửa hàng và con số này vẫn tiếp tục tăng trưởng không ngừng. Qua nhiều năm nỗ lực phát triển, Gong Cha đã trở nên phổ biến với khách hàng từ nhiều quốc gia và trở thành một trong những thương hiệu trà đáng tin cậy hàng đầu trên thế giới.</p>
        </v-col>
        <v-col :cols="$store.state.responsive ? '12' : '6'">
          <v-img width="350" height="440" src="https://gongcha.com.vn/wp-content/uploads/2018/02/lytra-350x441.png"></v-img>
        </v-col>
      </v-row>
      
    </div>
    <div class="box2 box">
      <v-row>
        <v-col :cols="$store.state.responsive ? '12' : '6'">
          <v-img width="550" height="350" src="https://gongcha.com.vn/wp-content/uploads/2018/03/H%C3%ACnh-CH-1400x933.jpg"></v-img>
           </v-col>
        <v-col :cols="$store.state.responsive ? '12' : '6'">
          <p class="h2">
            CÂU CHUYỆN THƯƠNG HIỆU
          </p>
          <p style="font-size:16px">Tên gọi Gong Cha xuất phát từ ý nghĩa trong tiếng Hoa là Trà cung đình. Thời xưa, các loại trà tốt nhất thường được các vị hoàng thân quý tộc ngự dùng. Ngày nay, Gong Cha mong muốn phục vụ các loại trà tốt nhất cho thực khách, cũng như chính tên gọi của thương hiệu. Kể từ khi được thành lập vào năm 2006 tại Đài Loan, chuỗi cửa hàng Gong Cha đã mở rộng trên khắp 19 quốc gia với 1.500 cửa hàng và con số này vẫn tiếp tục tăng trưởng không ngừng. Qua nhiều năm nỗ lực phát triển, Gong Cha đã trở nên phổ biến với khách hàng từ nhiều quốc gia và trở thành một trong những thương hiệu trà đáng tin cậy hàng đầu trên thế giới.</p>
        </v-col>
      </v-row>
      
    </div>
    <div class="box1 box">
      <p class="h2 text-center">Giá trị cốt lõi</p>
      <v-row class="mt-5">
        <v-col :cols="$store.state.responsive ? '12' : '4'">
          <div class="avt">
            <img width="90" height="110" src="https://gongcha.com.vn/wp-content/uploads/2018/01/icon1.png">
          </div>
          <p class="h3">
            1. CHẤT LƯỢNG HÀNG ĐẦU
          </p>
          <p>
            An toàn, vệ sinh và ngon miệng. Việc sử dụng các nguyên liệu an toàn, tự nhiên và vệ sinh là ưu tiên hàng đầu của Gong Cha. Hương vị tuyệt hảo của các món thức uống là mục đích quan trọng tiếp theo mà chúng tôi muốn hướng đến.
          </p>
        </v-col>
        <v-col :cols="$store.state.responsive ? '12' : '4'">
          <div class="avt">
            <img width="128" height="112" src="https://gongcha.com.vn/wp-content/uploads/2018/01/icon2.png">
          </div>
          <p class="h3">
            1. CHẤT LƯỢNG HÀNG ĐẦU
          </p>
          <p>
            Gong Cha mong muốn làm hài lòng khách hàng tốt nhất với tác phong phục vụ chuyên nghiệp và thân thiện, luôn lắng nghe những đóng góp của khách hàng.
          </p>
        </v-col>
        <v-col :cols="$store.state.responsive ? '12' : '4'">
          <div class="avt">
            <img width="116" height="110" src="https://gongcha.com.vn/wp-content/uploads/2018/01/icon3.png">
          </div>
          <p class="h3">
            1. CHẤT LƯỢNG HÀNG ĐẦU
          </p>
          <p>
            Dựa trên hai nền tảng cốt lõi là Chất Lượng và Dịch Vụ, Gong Cha luôn nỗ lực xây dựng và duy trì hình ảnh thương hiệu đáng tin cậy trong mắt khách hàng.
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
    
<script>

export default {
  name: 'About',
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
  background-image: url(https://gongcha.com.vn/wp-content/uploads/2018/01/bg-qua-trinh-phat-trien.jpg);
  width: 100%;
  height: 330px;
}
.box1{
  padding-top: 60px ;
  padding-bottom: 60px ;
  background-color: #f8e5de ;
  padding-left: 44px;
  padding-right: 44px;
}
.box .h2 {
  font-size: 25px;
  margin-top: 22px;
  margin-bottom: 11px;
  font-family: "Open Sans";
  font-weight: inherit;
  line-height: 1.4;
  color: inherit;
  color: #b81f32;
}
.box2{
  padding-top: 60px ;
  padding-bottom: 60px ;
  padding-left: 44px;
  padding-right: 44px;
}
.box .h3 {
  font-size: 22px;
  margin-top: 22px;
  margin-bottom: 11px;
  font-family: "Open Sans";
  font-weight: inherit;
  line-height: 1.4;
  color: inherit;
  color: #b81f32;
}
.avt {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: #FFF;
  text-align: center;
  margin: 0 auto;
  padding-top: 40px;
}

</style>