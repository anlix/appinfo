<template>
	<div id="analys-company-footer" class="analys-company-footer">
		<div class="footer">
			<div class="total">合计</div>
			<div class="pv">
				<span>PV</span>
				<span>2300</span>
			</div>
			<div class="uv">
				<span>UV</span>
				<span>290</span>
			</div>
			</div>
		</div>
</template>
<script>
export default{
	name:'analys-company-footer',
	data(){
		return {

		}
	}
}
</script>
<style lang="scss">
.analys-company-footer{
	position:absolute;
	background-color:#f9f9f9;
	height:0.9rem;
	bottom:0;
	.footer{
		background-color:#fff;
		position:fixed;
		font-size:0;
		bottom:0;
		left: 0;
		right:0;
		height:0.9rem;
		line-height: 0.9rem;
		box-sizing:border-box;
		border-top:1px solid #509BF8;
		div{
			font-size:0.3rem;
			display: inline-block;
			box-sizing:border-box;
			text-align:center;
			span{
				display: inline-block;
				padding:0 0.2rem;
			}
		}
		.total{
			width:20%;
		}
		.pv{
			width:40%;
		}
		.uv{
			width:40%;
		}
	}
}
</style>