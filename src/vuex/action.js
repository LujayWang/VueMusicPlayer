const axios = require('axios');

export default {
	getMusics({
		state
	}) {
		axios.get('http://localhost:3000/personalized/newsong')
			.then(res => {
				state.musics = res.data.result;
			})
	},
	login({
		state
	}, user) {
		axios.get('http://localhost:3000/login/cellphone', {
				params: user
			})
			.then(res => {
				state.user = res;
				state.isLogin = true;
				window.history.go(-1);
			})
			.catch(e => {
				console.log(e);
				alert('用户名或者密码错误');
			})

	},
	getHotSearch({
		state
	}) {
		axios.get('http://localhost:3000/search/hot')
			.then(res => {
				state.hots = res.data.result.hots;
			})
	},
	getFind({
		state
	}, params) {
		axios.get('http://localhost:3000/search', {
				params: params
			})
			.then(res => {
				state.findMusics = res.data.result.songs;
				state.msg="正在刷新。。。";
			})
			.catch(e=>{
					state.msg="已加载全部！"
			})
	},
	getUrl({
		state
	}, id) {
		axios.get('http://localhost:3000/song/url', {
				params: id
			})
			.then(res => {
				state.url = res.data.data[0].url;
				localStorage.url=state.url;
			});
		axios.get('http://localhost:3000/song/detail?ids=' + id.id)
			.then(res => {
				state.pic = res.data.songs[0].al.picUrl;
				localStorage.pic=state.pic;
			})
	},
	getSuggest({
		state
	}, keywords) {
		if (keywords.keywords != '') {
			axios.get('http://localhost:3000/search/suggest', {
					params: keywords
				})
				.then(res => {
					var result = res.data.result;
					if (result.order) {
						result.order.forEach(item => {
							result[item].forEach(tem => {
								state.suggest.push(tem.name);
							})
						})
					}
				})
		}
	}
}
