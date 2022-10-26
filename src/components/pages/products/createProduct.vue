<template>
  <div class="container product-container">
    <div class="adding-product">
      <h1>Thêm mới sản phẩm</h1>
      <form action="{{#}}" method="POST" enctype="multipart/form-data">
        <div class="col-6">
          <label for="">Tên sản phẩm</label>
          <input
            type="text"
            class="form-control"
            name="product_name"
            placeholder="Nhập tên sản phẩm"
            v-model="product_name"
          />
        </div>

        <div class="col-6">
          <label for="">Mã sản phẩm</label>
          <input
            type="text"
            class="form-control"
            name="product_model"
            placeholder="Nhập mã sản phẩm"
            v-model="product_model"
          />
        </div>

        <div>
          <div class="col-6" style="padding: 0px">
            <label for="">Giá</label>
            <input
              type="text"
              class="form-control"
              name="product_price"
              placeholder="Nhập giá sản phẩm"
              v-model="product_price"
            />
          </div>

          <div class="col-6">
            <label for="">Tồn kho</label>
            <input
              type="text"
              class="form-control"
              name="product_stock"
              placeholder="Nhập số lượng tồn kho"
              v-model="product_stock"
            />
          </div>
        </div>

        <div class="col-6">
          <label for="">Hình ảnh</label>
          <input
            type="file"
            class="form-control"
            name="product_image"
            v-on:change="product_image"
          />
        </div>

        <div class="col-6">
          <label for="">Mô tả sản phẩm</label>
          <textarea
            class="form-control"
            name="product_description"
            id="summernote"
            v-model="product_description"
          ></textarea>
        </div>

        <div class="col-6">
          <button type="submit" class="btn btn-primary">Thêm mới</button>
          <a :href="home" class="btn btn-warning"> Quay lại</a>
        </div>
      </form>
    </div>
    <div class="product-preview">
      <h1>Xem trước</h1>
      <ul>
        <!-- <li>Hình ảnh: {{ product_image }}</li> -->
        <li><b>Tên sản phẩm:</b> {{ product_name }}</li>
        <li><b>Mã sản phẩm:</b> {{ product_model }}</li>
        <li><b>Giá sản phẩm: </b>{{ product_price }}</li>
        <li>
          <b> Sản phẩm đã đặt trước:</b> {{ count
          }}<Button @click="increment" style="margin-left: 30px">+</Button>
        </li>
        <li><b>Mô tả sản phẩm: </b>{{ product_description }}</li>
        <h5 v-if="product_stock < 1">Hết hàng</h5>
        <li v-else><b>Tồn kho: </b>{{ product_stock }}</li>
        <li>{{ reverseMessage() }}</li>
        <li>{{ filteredTodos }}</li>
        <!-- <li>{{ reverseMessage }}</li> -->
        <button @click="test">Button</button>
      </ul>
    </div>
  </div>
  <!-- <MainHeader-test /> -->
</template>

<script setup>
// import { ref, computed } from 'vue'
import { computed } from "@vue/reactivity";
// import { mainHeader } from "../MainHeader.vue";
import { watch } from "vue";
import { ref } from "vue";
// import MainHeader-test from '../MainHeader.vue'

const home = ref("/products/list");
const product_name = ref("");
const product_model = ref("");
const product_price = ref("");
const product_stock = ref("");
const product_description = ref("");
const count = ref(0);
const message = ref("Toi la Thinh Tran ");
// const reverseMessage = computed(()=>{
//     return message.value.split('').reverse().join('')
// })

const filteredTodos = computed(() => {
  return message.value != "Toi là ai" ? "baby" : message.value;
});

function test() {
  message.value = "Toi là aiiiii";
}
function increment() {
  count.value++;
}

function reverseMessage() {
  // return 'abc'
  return message.value.split("").reverse().join("");
}

watch(message, () => {
  console.log(`text is change`);
});
</script>

<style>
.product-container {
  display: flex !important;
  padding: 50px 0;
}

.container label {
  font-weight: 700;
  text-align: justify;
  display: block;
  width: 100%;
}

.container .adding-product {
  width: 50%;
}

.container .product-preview {
  width: 50%;
}

ul li {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 20px 0;
}
</style>
