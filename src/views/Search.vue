<template>
	<div id='search'>
		<div id="top">
			<div id="back" @click="goBack()"><i class="icon iconfont icon-zuojiantou"></i></div>
			<div id="find"><input @keyup.13="goFind()" v-model="keywords" type="text" placeholder="搜索音乐、视频、歌单、歌手、用户"></div>
		</div>
		<div id="suggests" v-for="suggest of suggests">
			<div id="suggest" :suggest="suggest" @click="findSuggest(suggest)"><i class="icon iconfont icon-icon-21"></i>{{suggest}}</div>
		</div>
		<div id="hotSearch">
			<div id="hotTitle">热门搜索</div>
			<div id="hots" v-for="hot of hots">
				<div id="hot" :hot="hot" @click='findHot(hot)'>{{hot.first}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bottom from '../components/Bottom.vue'
	
	export default {
		data() {
			return {
				keywords: ''
			};
		},
		computed: {
			hots() {
				return this.$store.state.hots;
			},
			suggests(){
				return this.$store.state.suggest;
			}
		},
		beforeCreate() {
			this.$store.dispatch('getHotSearch');
			this.$store.state.suggest=[];
		},
		watch:{
			keywords(val){
				val=this.keywords;
				var params={
					keywords:val
				};
				this.$store.state.suggest=[];
				this.getSuggest(params);
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
			goFind() {
				if (this.keywords != '') {
					this.$router.push({
						path: 'find'
					});
					this.$store.state.keywords = this.keywords;
				}
			},
			findHot(hot){
				this.$store.state.keywords=hot.first;
				this.$router.push({path:'/find'})
			},
			getSuggest(param){
				this.$store.dispatch('getSuggest',param);
			},
			findSuggest(suggest){
				this.$store.state.keywords=suggest;
				this.$router.push({path:'/find'});
			}
		},
		components:{
			Bottom
		}
	};
</script>

<style scoped>
	#search {
		width: 460px;
		height: 723px;
		margin: auto;
		background: #FCFCFC;
		position:absolute;
		right: 0;left: 0;top: 0;
		z-index: -5;

	}

	#top {
		width: 460px;
		height: 40px;
		background: #CC0000;
	}

	#find>input {
		width: 420px;
		height: 30px;
		margin-top: 10px;
		color: #E7E7E7;
		background: #CC0000;
		font-weight: bold;
		font-size: 16px;
		border: 0px;
		outline: none;
	}

	#hotSearch {
		text-align: center;
	}

	#hotTitle {
		font-size: 20px;
		color: darkgrey;
		margin: 10px 0;
	}

	#back>i {
		font-size: 25px;
		color: white;
		font-weight: bolder;
		margin: 7px;
	}

	input::-webkit-input-placeholder {
		color: rgba(225, 225, 225, 0.8)
	}

	#find,
	#back {
		float: left
	}

	#hot {
		border: 1px grey solid;
		border-radius: 12px;
		float: left;
		padding: 3px 6px;
		margin: 10px 15px;
		color: black;
		font-weight: bold;
		cursor: pointer;

	}
	#suggest{
		width:410px;
		height:30px;
		font-size: 15px;
		background:white;
		color: darkgrey;
		border-bottom:.5px lightgrey solid;
		margin-left: 50px;
	}
	#suggest>i{
		position:relative;
		right:20px
	}
</style>
