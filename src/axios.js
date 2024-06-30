import axios from "axios";
import Vue from 'vue'

const instance = axios.create({
  baseURL: "http://localhost:8081/libreria-services", 
//   headers: { Authorization: Bearer ${localStorage.getItem("accessToken")} },
});

export default {
  install(Vue) {
    Vue.prototype.$http = instance;
  },
};