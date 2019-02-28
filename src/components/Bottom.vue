<template>
	<div id="bottom">
		<div id='left'>
			<router-link to="/lyrics"><img :src='pic' width="40px" height="40px"></router-link>
		</div>
		<div id='middle'>
			<div id='mname'>{{music.name}}</div>
			<div id='artist'>{{music.artists[0].name}}</div>
		</div>
		<div id='music' v-show='false'>
			<audio ref='audi' id="audi" controls="controls" :src='url' autoplay="autoplay"></audio>
		</div>
		<div id='right'>
			<div id='play'><i class="icon iconfont icon-icon-13" @click="play()"></i><i class="icon iconfont icon-icon-1"></i></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		computed: {
			music() {
				return this.$store.state.playNow;
			},
			url() {
				return this.$store.state.url;
			},
			pic() {
				return this.$store.state.pic
			}
		},
		watch:{
		},
		methods: {
			play() {
				var audi=this.$refs.audi;
				audi.paused?audi.play():audi.pause();
			
			}
		}
	}
	
</script>

<style scoped="scoped">
	#bottom {
		margin: 0 auto;
		width: 460px;
		height: 50px;
		box-shadow: 0px -1px 1px #BABABA;
		background: #F9F9F9;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}

	i {
		font-size: 30px;
		font-weight: 1000;
		color: #CC0000;
		margin: 0 12px;
		cursor: pointer;
	}


	#left>img {
		border-radius: 20px;
		margin: 5px 20px;

	}

	#right {
		float: right;
	}

	#left,
	#middle {
		float: left;
		font-weight: 1000;
	}

	#mname {
		color: #CC0000;
		font-size: 20px;
	}

	#artist {
		color: #CC0000;
	}
</style>
