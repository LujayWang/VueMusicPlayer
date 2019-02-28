<template>
	<div id='mine'>
		<router-link to="/login">
			<div id='login' v-show="!isLogin"><img name='me' src="../assets/01.png" width=30px height=30px />立即登陆享专属推荐</div>
		</router-link>
		<div id='hasLog' v-show="isLogin"><img name='me' :src="user.data.profile.avatarUrl"  width=30px height=30px />{{user.data.profile.nickname}}</div>
		<div id='my'>
			<ul>
				<li>
					<i class="icon iconfont icon-icon-"></i>
					<div>本地音乐</div>
				</li>
				<li>
					<i class="icon iconfont icon-plus-download"></i>
					<div>下载音乐</div>
				</li>
				<li>
					<i class="icon iconfont icon-icon-29"></i>
					<div>最近播放</div>
				</li>
			</ul>
		</div>
		<div id='ns'>最新音乐推荐</div>
		<div id="musicList">
			<div id="content" v-for="music of musics">
				<div id="music" :music="music">
					<div id='img'><img :src="music.song.album.picUrl" style="width: 40px;height: 40px;"></div>
					<div id="mname">{{music.name}}</div>
					<div id="artist">{{music.song.artists[0].name}}</div>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user:this.$store.state.user,
				isLogin:this.$store.state.isLogin
			};
		},
		beforeCreate() {
			this.$store.dispatch('getMusics')
		},
		computed:{
			musics(){
				return this.$store.state.musics
			}
		},
		methods: {},
		components: {
		}
	};
</script>

<style scoped>
	#mine {
		width: 460px;
		height:600px;
		overflow-x: hidden;
		overflow-y:scroll ;
		background: #FCFCFC;
		position: absolute;
		top: 70px;
		left: 0;
		right: 0;
		z-index: -1
	}

	#login,#hasLog {
		width: 430px;
		margin: 15px auto;
		height: 80px;
		font-size: 20px;
		line-height: 80px;
		text-align: center;
		color: #767676;
		background: white;
		box-shadow: 0 .5px .5px black;
	}

	#login>img,#hasLog>img{
		position: relative;
		top: -3px;
		border-radius: 15px
	}

	#my {
		width: 100%;
		height: 120px;
	}

	#my>ul {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}

	#my>ul>li {
		-webkit-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		-o-flex: 1;
		flex: 1;
		font-size: 20px;
		color: #767676;
		cursor: pointer;
	}

	i {
		font-size: 40px;
		color: #CC0000;
	}

	#ns {
		font-size: 25px;
		color: #646464;
	}
	
	a:hover{
		text-decoration: none;
	}
	
	#login:hover{
		background: #FCFCFC;
	}
	
	#music {
		width: 440px;
		height: 50px;
		border-bottom: 1px #CC0000 solid;
		margin-left: 20px;
		text-align: left;
		cursor: pointer;
		padding:5px 0 0 0;
	}
	#mname{
		height: 25px;
		font-size: 15px;
		color:#CC0000;
		font-weight:600
	}
	#artist{
		height:15px;
		color:#CC0000;
	}
	#img{
		float: left;
		margin-right: 15px;
	}
	#music:hover{
		background:whitesmoke
	}
</style>
