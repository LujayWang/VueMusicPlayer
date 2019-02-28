<template>
	<div id='sidebar'>
		<ul id='cbl' @click='fadeSide()'><li><i class="icon iconfont icon-cebianlan"></i></li></ul>
		<ul><li><i class="icon iconfont icon-icon-"></i>发现音乐</li></ul>
		<div>我的音乐</div>
		<ul>
			<li><i class="icon iconfont icon-icon-5"></i>本地音乐</li>
			<li><i class="icon iconfont icon-plus-download"></i>下载管理</li>
			<li><i class="icon iconfont icon-icon-1"></i>最近播放</li>
			<li><i class="icon iconfont icon-icon-27"></i>我的收藏</li>
		</ul>
	</div> 
</template>

<script>
export default{
	data(){
		return {
			
		};
	},
	methods:{
		fadeSide(){
			this.$emit('fadeSide',false);
		}
	}
};
</script>

<style scoped>
#sidebar{
	width:280px;
	height:723px;
	position:absolute;
	top: 0;left:0;
	text-align: left;
	background:white;
	margin:0;
	color: #5C5C5C;
	font-weight: lighter;
	box-shadow: .5px 0 1px grey;
	z-index: 1
}

i{
	margin: 20px;
	font-size: 30px;
	color: #8A8A8A
}

#sidebar>div{
	color:#B7B7B7 ;
	margin:0 0 0 5px;
}
</style>