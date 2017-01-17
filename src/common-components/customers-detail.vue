<template>
	<div id="customers-detail" class="customers-detial">
		<customers-detail-header></customers-detail-header>
		<customers-detail-list></custormers-detail-list>
	</div>
</template>
<script>
import customersDetailHeader from './customers-detail/header.vue'
import customersDetailList from './customers-detail/list.vue'
export default{
	name:'customers-detail',
	data(){
		return {

		}
	},
	components:{
		customersDetailHeader,
		customersDetailList
	}
}
</script>
<style>
.customers-detail{

}
</style>