<template>
	<div id="customers">
		<customers-header :producttype="producttype" :dateType="dateType"></customers-header>
		<customers-list></customers-list>
		<customers-footer></customers-footer>
	</div>
</template>
<script>
import customersHeader from './customers/header.vue'
import customersList from './customers/list.vue'
import customersFooter from './customers/footer.vue'
export default{
	name:'customers',
	beforeRouteEnter(to, from, next){
		console.log(to);
		next(vm=>{
			vm.producttype = to.query.producttype;
			vm.dateType = to.query.dateType;
		});
	},
	data(){
		return {
			producttype:'',
			dateType:''
		}
	},
	components:{
		customersHeader,
		customersList,
		customersFooter
	},
	methods:{
		
	}
}
</script>
<style>
	
</style>