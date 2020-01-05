<template>
  <div class="cart-item--container">
    <div class="cart-item--title">
      <p>{{ cartItem.title }}</p>
      <div class="cart-item--arrows">
        <i @click="addCartItem(cartItem)" class="fa fa-arrow-circle-up cart-item--modify"></i>
        <i @click="removeCartItem(cartItem)" class="fa fa-arrow-circle-down cart-item--modify"></i>
      </div>
    </div>
    <div class="cart-item--content">
      <span class="cart-item--price">{{ cartItem.price }}$ each</span>
      <span class="cart-item--quantity">Quantity: {{ cartItem.quantity }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartListItem",
  props: ["cartItem"],
  methods: {
    ...mapActions(["addCartItem", "removeCartItem"])
  }
};
</script>

<style scoped>
.cart-item--container {
  display: flex;
  flex-flow: column;
  margin: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
}
.cart-item--title {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.cart-item--title p {
  padding: 0;
  margin: 0;
}
.cart-item--content {
  padding: 10px 0;

  display: flex;
  justify-content: space-between;
}
.cart-item--modify {
  cursor: pointer;
  margin: 0 3px;
}
</style>

