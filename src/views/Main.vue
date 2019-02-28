<template>
  <div id="main">
    <Header @isMine='getIsOk' @isMusicHall='getIsOk'></Header>
    <Mine v-show='ok'></Mine>
    <MusicHall v-show='!ok'></MusicHall>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Bottom from '../components/Bottom.vue';
import Mine from '../components/Mine.vue';
import MusicHall from '../components/MusicHall.vue';

export default {
  name: 'App',
  data(){
  	return {
  		ok:'true'
  	}
  },
  methods:{
  	getIsOk(data){
  		this.ok=data;
  	}
  },
  components:{
    Header,
    Bottom,
    Mine,
    MusicHall
  }
}
</script>

<style>
#main {
  text-align: center;
  width:460px;
  box-shadow: 0 0 2px black;
  margin: auto;
  position:absolute;
  left:0;right:0;
}
</style>
