<template lang="pug">
h1 Danh sách sản phẩm
a(href="/products/create" class="btn btn-secondary") Thêm mới sản phẩm 
div(class="listProduct")
  form(action="" method="" id="")
    table(class="table table-bordered")
      thead
        tr
          th
            input(type='checkbox')
          th Hình ảnh
          th Tên sản phẩm
          th Mã sản phẩm
          th Mô tả sản phẩm
          th Giá
          th(width="8%") Tồn kho
          th(width="5%") Sửa
          th(width="5%") xóa
      tbody
        tr(v-for="product of products" :key="product.id")
          td 
            input(type='checkbox')
          td
            img(:src="product.product_image" alt="")
          td {{ product.product_name }}
          td {{ product.product_model }}
          td {{ product.product_description }}
          td {{ product.product_price }}
          td {{ product.product_stock }}
          td 
            button Sửa
          td
            button Xóa
</template>

<script>
// import { ref } from 'vue'
import  axios  from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/products`);
      console.log(res);
      this.products = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
table,
tbody {
  border: solid 1px #494949;
}

td img {
  height: 150px;
  width: 150px;
}
</style>
