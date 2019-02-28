<template>
	<div id="app">
		<router-view></router-view>
		<router-view name="bottom"></router-view>
	</div>
</template>

<script>
	import Bottom from './components/Bottom'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			Bottom
		}
	}
</script>

<style scoped="scoped">

</style>
