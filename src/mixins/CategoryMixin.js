import axios from "axios";
import { LoaderMixin } from "./LoaderMixin";

export const CategoryMixin = {
  mixins: [LoaderMixin],
  data: {},
  methods: {
    getCategory() {
      return new Promise((resolve, reject) => {
        axios({ url: "http://localhost:8081/category", method: "GET" })
          .then(resp => {
            console.log(resp);
            resolve(resp);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getSubCategory(val) {
      this.showLoader();
      return new Promise((resolve, reject) => {
        axios({ url: `http://localhost:8081/category/${val}`, method: "GET" })
          .then(resp => {
            this.hideLoader();
            resolve(resp);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  created() {}
};
