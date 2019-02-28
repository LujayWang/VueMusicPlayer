<template>
	<div id='login'>
		<div id='top'>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</div>
		<div><i class="icon iconfont icon-icon-25"></i><input type="text" v-model="phone" placeholder="请输入手机号或邮箱号"></div>
		<div><i class="icon iconfont icon-icon-mima"></i><input type="password" v-model="password" placeholder="请输入密码"></div>
		<div><button type="submit" @click="login()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button></div>
		<div><button type="button" @click='reBack()'>返&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回</button></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				password:''
			};
		},
		methods:{
			reBack(){
				this.$router.go(-1)
			},
			login(){
				var user={
					phone:this.phone,
					password:this.password,
				};
				this.$store.dispatch('login',user);
			}
		}
	}
</script>

<style scoped="scoped">
	#login{
		width: 460px;
		height:723px;
		margin: auto;
		background: #FCFCFC;
		text-align: center;
	}
	#top{
		width:460px;
		height:40px;
		background: #B90202;
		color:whitesmoke;
		font-size: 20px;
		line-height: 40px;
		box-shadow: 0 1px 1px grey;
		margin-bottom: 40px;
	}
	div > input{
		width:300px;
		height:40px;
		margin-bottom: 10px;
		padding-left: 50px;
		background: #FCFCFC;
		border:0px;
		border-bottom: 1.5px #B90202 solid;
		font-size: 15px;
		outline: none;
	}
	div > button{
		width:300px;
		height:40px;
		background: #B90202;
		border:1px #B90202 solid;
		margin-top: 30px;
		font-size: 20px;
		color:whitesmoke;
		box-shadow: 0 3px 3px indianred;
	}
	i{
		position: relative;
		left:30px;
		color: #B90202;
	}
	button:active{
		position:relative;
		top:3px;
	}
</style>
