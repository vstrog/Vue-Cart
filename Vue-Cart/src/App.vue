<template>
  <div id="app">
    <div class="container">
      <div class="cartlist">
        <CartList/>
      </div>
      <div class="productlist">
        <ProductList/>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from "./components/cart/CartList.vue";
import ProductList from "./components/product/ProductList.vue";

export default {
  name: "app",
  components: {
    CartList,
    ProductList
  }
};
</script>

<style>
html,
body {
  background: #d5dfe9;
}

#app {
  height: 100%;
  font-family: Ubuntu, serif;
}
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cartlist {
  flex: 1;
}
.productlist {
  flex: 2;
}
</style>
