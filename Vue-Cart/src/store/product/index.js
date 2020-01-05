const state = {
  productItems: [
    {
      id: 1,
      title: 'The First Item',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem quaerat enim nemo corrupti inventore eos.',
      price: 19.99,
      quantity: 1
    },
    {
      id: 2,
      title: 'The Second Item',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem quaerat enim nemo corrupti inventore eos.',
      price: 15.99,
      quantity: 1
    },
    {
      id: 3,
      title: 'The Third Item',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem quaerat enim nemo corrupti inventore eos.',
      price: 15.99,
      quantity: 1
    },
    {
      id: 4,
      title: 'The Fourth Item',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem quaerat enim nemo corrupti inventore eos.',
      price: 49.99,
      quantity: 1
    }
  ]
};
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  }
};
const actions = {
  // getProductItems({ commit }) {
  //   axios.get('/api/products').then(response => {
  //     commit('UPDATE_PRODUCT_ITEMS', response.data);
  //   });
  // }
};
const getters = {
  productItems: state => state.productItems
};
const productModule = {
  state,
  mutations,
  actions,
  getters
};

export default productModule;
