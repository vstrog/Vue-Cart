const state = {
  cartItems: []
};
const mutations = {
  ADD_CART_ITEM(state, payload) {
    let cartProductExists = false;
    state.cartItems.map(cartItem => {
      if (cartItem.id === payload.id) {
        cartItem.quantity++;
        cartProductExists = true;
      }
    });
    if (!cartProductExists) {
      state.cartItems.push(payload);
    }
  },
  REMOVE_CART_ITEM(state, payload) {
    state.cartItems.map(cartItem => {
      if (cartItem.id === payload.id && cartItem.quantity > 1) {
        cartItem.quantity--;
      } else if (cartItem.id === payload.id && cartItem.quantity === 1) {
        const cartItemToRemove = state.cartItems.findIndex(
          cartItem => cartItem.id === payload.id
        );
        state.cartItems.splice(cartItemToRemove, 1);
      }
    });
  },
  REMOVE_ALL(state) {
    let emptyCart = [];
    state.cartItems = emptyCart;
  }
};
const actions = {
  addCartItem(context, payload) {
    context.commit('ADD_CART_ITEM', payload);
  },
  removeCartItem(context, payload) {
    context.commit('REMOVE_CART_ITEM', payload);
  },
  removeAll(context) {
    context.commit('REMOVE_ALL');
  }
};
const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc;
      }, 0)
      .toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  }
};
const cartModule = {
  state,
  mutations,
  actions,
  getters
};

export default cartModule;
