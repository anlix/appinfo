<template>
	<div id="analys-header" class="analys-header">
		
	</div>
</template>
<script>
export default{
	name:'analys-header',
	data(){
		return {
			selected:"1"
		}
	},
	watch:{
		selected(newVal, oldVal){
			if(newVal!=oldVal){
				this.$emit('tabChange', newVal);
				
			}
		}
	}
}
</script>
<style lang="scss">
.analys-header{
	position:relative;
	height:0.9rem;
	div{
		a{
			div{
				font-size: 0.3rem !important;
			}
		}
	}
}
</style>