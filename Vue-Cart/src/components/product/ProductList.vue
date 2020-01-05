<template>
  <div id="products" class>
    <div class="products--header">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div v-for="productItem in productItems" :key="productItem.id" class="product-list--item">
        <ProductListItem :productItem="productItem"/>
      </div>
    </div>
    <div class="product-count">
      <span class># of products: 4</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductListItem from "./ProductListItem";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["productItems"])
  },
  components: {
    ProductListItem
  }
};
</script>

<style scoped>
#products {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
.products--header {
  width: 100%;
  border-bottom: 1px solid #000;
  text-align: center;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
}

.product-count {
  text-align: right;
  font-weight: bold;
}
</style>
