<template>
	<div id="musicList" ref="ml" v-on:scroll="go()">
		<div id="content" v-for="music of musics">
			<Music :music="music"></Music>
		</div>	
	</div>
</template>

<script>
	import Music from './Music.vue'
	export default {
		data() {
			return {
				limit:60
			};
		},
		computed:{
			musics(){
				return this.$store.state.findMusics
			},
			keywords(){
				return this.$store.state.keywords;
			}
		},
		methods:{
			go(){
				var params={
					keywords:this.keywords,
					limit:this.limit
				};
				var scrollTop=this.$refs.ml.scrollTop;
				var clientHeight=this.$refs.ml.clientHeight;
				var scrollHeight=this.$refs.ml.scrollHeight;
				if(scrollTop+clientHeight-scrollHeight>0){
				
					this.$store.dispatch('getFind',params);
					this.limit=this.limit+30
				}
			}
		},
		components:{
			Music
		}
	}
</script>

<style scoped="scoped">
	#musicList{
		width:460px;
		overflow-y: scroll;
		overflow-x: hidden;
		position:absolute;
		top:80px;bottom:-30px;left: 0;right: 0;
	}

</style>
