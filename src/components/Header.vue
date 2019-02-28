<template>
	<div id='header'>
		<div id='sidebar' @click='showSide()'><i class="icon iconfont icon-cebianlan"></i></div>
		<div id='mine' @click='isMine()'>我的</div>
		<div id='musicHall' @click='isMusicHall()'>音乐馆</div>
		<router-link to='/search'>
			<div id='search'>
				<i class="icon iconfont icon-icon-21"></i>搜索
			</div>
		</router-link>
		<transition name='fade'>
			<SideBar v-show='ok' @fadeSide='getData'></SideBar>
		</transition>
	</div>
</template>

<script>
	import SideBar from '../views/SideBar.vue'

	export default {
		data() {
			return {
				ok: false,
			};
		},
		methods: {
			showSide() {
				this.ok = true;
			},
			getData(data) {
				this.ok = data;
			},
			isMine() {
				this.$emit('isMine', true)
			},
			isMusicHall() {
				this.$emit('isMusicHall', false)
			}
		},
		components: {
			SideBar
		}
	};
</script>

<style scoped>
	#header {
		width: 460px;
		height: 70px;
		background: #B90202;
		margin: auto;
		font-size: 20px;
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}

	#mine,
	#musicHall,
	#sidebar {
		display: inline;
		cursor: pointer;
	}

	#sidebar {
		font-weight: 1000;
		float: left;
		margin: 0 0 0 15px;
		cursor: pointer;
	}

	#search {
		width: 430px;
		height: 25px;
		margin: auto;
		background: #CC0000;
		line-height: 25px;
		color: #E7E7E7;
		font-size: 15px;
		margin-top: 8px;
		cursor: pointer;
	}


	.fade-enter,
	.fade-leave-to {
		width: 0px;
		height: 723px;
	}

	.fade-leave,
	.fade-enter-to {
		width: 300px;
		height: 723px;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: width .3s ease;
	}
	
	a:hover{
		text-decoration: none;
	}
</style>
