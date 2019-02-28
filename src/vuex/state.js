export default {
	user: {
		data: {
			"loginType": "",
			"code": "",
			"account": {
				"id": "",
				"userName": "",
				"type": "",
				"status": "",
				"whitelistAuthority": "",
				"createTime": "",
				"salt": "",
				"tokenVersion": "",
				"ban": "",
				"baoyueVersion": "",
				"donateVersion": "",
				"vipType": "",
				"viptypeVersion": "",
				"anonimousUser": ""
			},
			"profile": {
				"defaultAvatar": "",
				"avatarUrl": "",
				"experts": {},
				"userType": "",
				"city": "",
				"backgroundUrl": "",
				"mutual": "",
				"remarkName": "",
				"expertTags": "",
				"authStatus": "",
				"djStatus": "",
				"backgroundImgId": "",
				"province": "",
				"detailDescription": "",
				"followed": "",
				"gender": "",
				"accountStatus": "",
				"userId": "",
				"vipType": "",
				"description": "",
				"avatarImgId": "",
				"birthday": "",
				"nickname": "",
				"avatarImgIdStr": "",
				"backgroundImgIdStr": "",
				"signature": "",
				"authority": "",
				"avatarImgId_str": "",
				"followeds": "",
				"follows": "",
				"eventCount": "",
				"playlistCount": "",
				"playlistBeSubscribedCount": ""
			},
			"bindings": [{
				"tokenJsonStr": "",
				"url": "",
				"refreshTime": "",
				"expiresIn": "",
				"userId": "",
				"expired": "",
				"id": "",
				"type": ""
			}]
		}
	},
	musics: "",
	isLogin: false,
	hots: "",
	keywords: '',
	findMusics: '',
	playNow:JSON.parse(localStorage.playNow) || {
		name: '',
		artists: [{
			name: ''
		}]
	},
	url:localStorage.url || '',
	pic:localStorage.pic || '',
	suggest: [],
	msg: ''
}
