<template>
	<div id='musichall'>
		<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
				<li data-target="#carousel-example-generic" data-slide-to="1"></li>
				<li data-target="#carousel-example-generic" data-slide-to="2"></li>
			</ol>

			<!-- Wrapper for slides -->
			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<img src="../assets/zzx.jpg" alt="图片加载失败" style="width:460px;height:180px">
					<div class="carousel-caption">
						...
					</div>
				</div>
				<div class="item">
					<img src="../assets/zzx.jpg" alt="图片加载失败" style="width:460px;height:180px">
					<div class="carousel-caption">
						...
					</div>
				</div>
				<div class="item">
					<img src="../assets/zzx.jpg" alt="图片加载失败" style="width:460px;height:180px">
					<div class="carousel-caption">
						...
					</div>
				</div>
			</div>

			<!-- Controls -->
			
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {

		};
	}
};
</script>

<style scoped>
#musichall{
	width:460px;
	height:600px;
	background:#FCFCFC;
	position:absolute;
	top:70px;left:0;right:0;
	z-index: -1
}

.slide{
	width:100%;
	height:180px;
}
	
</style>