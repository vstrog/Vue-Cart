<template>
  <div class="product-list--item">
    <h2 class="products--header">
      {{productItem.title}}
      <span @click="addCartItem(productItem)">Add to Cart</span>
    </h2>
    <p>{{ productItem.description }}</p>
    <span class="product-list--price">
      <i class="fas fa-dollar-sign"></i>
      {{ productItem.price }}
    </span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"])
  }
};
</script>

<style scoped>
.product-list--item {
  margin: 20px 0;
}
.product-list--item h2 {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 8px 15px;
}

.product-list--item h2 > span {
  color: #fff;
  background-color: #2854ca;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 15px;
  font-size: 14px;
}

.product-list--item p {
  opacity: 0.6;
  margin: 10px 0;
  font-size: 14px;
}

.product-list--price {
  color: #2854ca;
  font-weight: bold;
}
</style>

