import Vue from "vue";
import Vuex from "vuex";
import authenticationStore from "./authenticationStore";
import notificationStore from "./notificationStore";
import commonStore from "./commonStore";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { authenticationStore, notificationStore, commonStore },
});
