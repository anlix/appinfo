<template>
	<div name="analys-footer" class="analys-footer">
		<mt-tabbar v-model="selected" :fixed="true">
		  	<mt-tab-item id="analys">
			    <img slot="icon">
			    应用分析	
			</mt-tab-item>
		  	<mt-tab-item id="customers">
		    	<img slot="icon">
		    	客户分析
		  	</mt-tab-item>
		  	<mt-tab-item id="follow">
		    	<img slot="icon">
		    	关注的客户
		  	</mt-tab-item>	
		</mt-tabbar>
	</div>
</template>
<script>
export default{
	name:'analysFooter',
	data(){
		return {
			selected:'analys'
		}
	},
	watch:{
		selected(newVal, oldVal){
			if(newVal!=oldVal){
				console.log(this.selected);
				router.push({path:newVal})
			}
		}
	}
}
</script>
<style  lang="scss">
.analys-footer{
	position:relative;
	height:0.9rem;
	background-color:#f9f9f9;
}
</style>