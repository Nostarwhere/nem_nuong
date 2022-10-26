<template lang="pug">
div(class="header-top")
    img(class="cart link" src="@/assets/photos/Cart.png", alt="" to="/cart")
    p Hotline: 1800.88.88.88

div(class="header")
    div(class="menu")
        router-link(class="link" to="/")
            p(class="item-menu") TRANG CHỦ 

        router-link(class="link" to="/aboutUs")
            p(class="item-menu") GIỚI THIỆU

        router-link(class="link" to="/products")
            p(class="item-menu") SẢN PHẨM

        router-link(class="link" to="/contact")
            p(class="item-menu") ĐẠI LÝ

    div(class="logo")
        img(alt="Vue logo" src="@/assets/logo/logo.png")

    div(class="menu")
        router-link(class="link" to="/news")
            p(class="item-menu") TIN TỨC

        router-link(class="link" to="/news")
            p(class="item-menu") TIN TỨC

        router-link(class="link" to="/news")
            p(class="item-menu") TIN TỨC

        router-link(class="link" to="/news")
            p(class="item-menu") TIN TỨC

</template>

<script>
export default {
    name: 'MainHeader'
}
</script>

<style>
.header-top {
    height: 50px;
    background-color: #bd1e22;
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 50px;
}
.header-top p {
    margin-top: 14px;
}
.header-top .cart {
    height: 30px;
    width: auto;
    margin-right: 30px;
}
.header {
    display: flex;
    justify-content: center;
    align-content: center;
    /* margin-bottom: 100px; ; */
    /* border-bottom: solid 1px gray; */

}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: fit-content;
    border: solid 1px;
    border-radius: 300px;
    background-color: #bd1e22;
    color: #ffffff;
    padding: 10px 20px;

}

.item-menu {
    margin: 10px;
    font-size: large;
    cursor: pointer;
    font-weight: 600;
}

.link {
    color: inherit;
    text-decoration: none;
}
</style>
