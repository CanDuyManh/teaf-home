<template>
  <div>
    <div class="block-product container">
        <div class="title">
          <h2 class="category-heading">
            {{category.name}}
          </h2>
        </div>
        <div class="content">
          <v-row>
            <v-col v-for="product in products" :key="product.id" :cols="$store.state.responsive ? 6 : 4">
              <div class="b-item">
                <div class="item-img">
                  <a  style="position: relative;" @click="$emit('opendialog', product)">
                  <v-img class="xcxzczx" :src="product.image"></v-img>
                  </a>
                </div>
                <div class="item-name">
                  <h4 class="text-center mt-3"> <a class=" font-weight-light">{{product.name}}</a></h4>
                </div>
              </div>
            </v-col>
          </v-row>
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
        products: []
      }
      ),
      created() {
        axios.get(this.$store.state.api + 'customer/products?category=' + this.category.id).then( res => {
          const { data } = res.data;
          this.products = data;
        });
      },
    }
  </script>
  