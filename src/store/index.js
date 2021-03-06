import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";
import studentEvent from "@/store/modules/studentEvent";
import systemInfo from "@/store/modules/systemInfo";
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        user, studentEvent, systemInfo
    }
})
