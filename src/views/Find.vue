<template>
	<div id="find">
		<div id="top">
			<div id="header">
				<div id="back" @click="goBack()"><i class="icon iconfont icon-zuojiantou"></i></div>
				<div id="search">{{keywords}}</div>
			</div>
			<div id="navigate">
				<ul>
					<li>单曲</li>
					<li>歌手</li>
					<li>专辑</li>
				</ul>
			</div>
		</div>
		<MusicList></MusicList>
	</div>
</template>

<script>
	import MusicList from '../components/MusicList.vue'
	import Bottom from '../components/Bottom.vue'
	
	export default {
		data() {
			return {
				keywords: this.$store.state.keywords
			};
		},
		beforeCreate() {
			var keywords=this.$store.state.keywords;
			var params={
				keywords:keywords
			};
			this.$store.dispatch('getFind',params)
		},
		methods: {
			goBack() {
				this.$router.go(-2);
				this.$store.state.findMusics=''
			}
		},
		components:{
			MusicList,
			Bottom
		}
	}
</script>

<style scoped="scoped">
	#find {
		width: 460px;
		height: 723px;
		margin: auto;
		background: #FCFCFC;
		position: absolute;
		top: 0;left:0;right:0;
		z-index: -3;
	}

	#top {
		width: 460px;
		height: 40px;
		background: #CC0000;
		position: fixed;
		top:0;
	}

	#back>i {
		font-size: 25px;
		color: white;
		font-weight: bolder;
		margin: 7px;
	}

	#back,#search {
		float: left;
	}
	
	#search{
		margin-top: 5px;
		color: #E7E7E7;
		font-weight: bold;
		font-size: 20px;
	}
	
	#navigate{
		display: inline-block;
	}
	
	#navigate>ul{
		height:35px;
		width:460px;
		border-bottom:1px lightgrey solid;
		font-size:15px;
		color:dimgrey;
		font-weight: bold;
	}
	
	#navigate>ul>li{
		float: left;
		margin:6px 10px;
		padding-bottom: 4px;
	}
	
	#navigate>ul>li:hover{
		border-bottom: 2px #CC0000 solid;
	}
</style>
