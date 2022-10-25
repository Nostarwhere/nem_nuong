<template>
    <h1>This is home page </h1>
    <ListProduct :msg="greeting"/>
 </template>
 
 <script setup>
    // import { ref } from "vue";
    import ListProduct from './products/listProduct.vue';


    // const greeting = ref('Hello from the other side')
 </script>
 