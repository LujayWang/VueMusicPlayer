<template>
	<div id="music" @click="playNow()">
		<div id="mname">{{music.name}}</div>
		<div id="artist">{{music.artists[0].name}}<font color="grey">·{{music.album.name}}</font></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: ["music"],
		methods:{
			playNow(){
				
				localStorage.playNow=JSON.stringify(this.music);
				var params={
					id:this.music.id
				};
				this.$store.dispatch('getUrl',params);
			}
		}
	}
</script>

<style scoped="scoped">
	#music {
		width: 440px;
		height: 55px;
		border-bottom: 1px #CC0000 solid;
		margin-left:20px;
		color:black;
		text-align: left;
		cursor: pointer;
		padding:7px 0;
	}
	#mname{
		height: 25px;
		font-size: 15px;
		font-weight:bolder
	}
	#artist{
		height:15px;
		font-weight: 600;
	}
	#music:hover{
		background:whitesmoke;
		color:#CC0000;
	}
	#music:active{
		background:whitesmoke;
		color:#CC0000;
	}
</style>
