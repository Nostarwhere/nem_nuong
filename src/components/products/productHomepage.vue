<template lang="pug">
div(class="home-container")
   div(class="cover_img")
      h1 SẢN PHẨM
   br
div(class="hot_product")
   div(class="hot_product__demo"
      v-for="product of hot_products"
      :key="product.id")
      img(:src="product.product_image" 
         alt="")
      h5 {{ product.product_name }}
      button(class="btn btn-success") Thêm vào giỏ hàng
   hr
div(class="main_product")
   div(class="main_product__demo"
      v-for="product of products"
      :key="product.id")        
      img(:src="product.product_image" alt="")
      h5 {{ product.product_name }}
      button(class="btn btn-success") Thêm vào giỏ hàng
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const products = ref([])
const hot_products = ref([])

async function created() {
   try {
      const res = await axios.get(`http://localhost:3000/products`);
      const res_1 = await axios.get(`http://localhost:3000/hot_products`);

      console.log(res);
      console.log(res_1);

      products.value = res.data;
      hot_products.value = res_1.data;
   } catch (e) {
      console.error(e);
   }
}
created()


</script>

<style>
.home-container .cover_img {
   background-image: url(https://nemnuonghungviet.com/wp-content/uploads/2021/05/bc5.jpg);
   width: 100%;
   height: 282px;
   display: flex;
   justify-content: center;
   align-items: center;
}

.home-container .cover_img h1 {
   color: #ffffff;
}

.home-container .hot_product {
   width: 100%;
   display: flex;
   justify-content: center;
   align-content: center;
}
.hot_product hr {
   display: flex;
   justify-content: center;
   align-items: center;
}
.hot_product .hot_product__demo {
   padding: 20px;
   display: inline-block;
}

.hot_product .hot_product__demo img {
   height: 305px;
   width: 305px;
   border: solid 2px #ffc107;
}

.main_product {
   display: flex;
   flex-wrap: wrap;
   padding: 0 10%;
}


.main_product .main_product__demo {
   padding: 15px;
   flex-basis: 20%;
   /* display: inline-block; */
}

.main_product__demo img {
   height: 239px;
   width: 239px;
   border: solid 2px #ffc107;

}
</style>
