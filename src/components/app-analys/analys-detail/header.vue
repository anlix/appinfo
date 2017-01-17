<template>
	<div id="analys-detail-header" class="analys-detail-header">
		<div class="header">
			<h3>{{title}}</h3>
		</div>
	</div>
</template>
<script>
export default{
	name:'analys-detail-header',
	data(){
		return {

		}
	},
	props:['title']
}
</script>
<style lang="scss">
.analys-detail-header{
	height:0.9rem;
	background-color: #fff;
	positon:relative;
	.header{
		background:#fff;
		font-size: 0px;
		height:0.9rem;
		line-height: 0.9rem;
		padding-left:0.3rem;
		box-sizing:border-box;
		border-bottom:1px solid #509BF8;
		position:fixed;
		top:0;
		left:0;
		right:0;
		font-size: 0.35rem;
	}
}
</style>