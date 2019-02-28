import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios'
import actions from './action'
import state from './state'

Vue.use(Vuex);

var mutations={
	
}



export default new Vuex.Store({
	state,
	actions
})
