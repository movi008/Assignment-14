import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: ref([]),
    loading: false,
    comments: ref([{}]),
    productsOnCart: ref([]),
    selectedBrand: "All",
    selectedGender: "All",
    selectedPrice: "All",
    selectedType: "All",
  }),

  actions: {
    async getProducts() {
      const URL = "https://fakestoreapi.com/products";
      this.loading = true;
      const response = await axios.get(URL);
      this.products = await response.data;
      this.loading = false;
    },
    async addToCart(id) {
      const product = this.products.find((element) => element.id === id);
      if (!this.productsOnCart.includes(product))
        this.productsOnCart.push(product);
    },

    async clearCart() {
      this.productsOnCart = [];
    },
  },
});
