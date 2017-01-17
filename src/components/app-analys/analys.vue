<template>
	<div id="analys">
		<analys-header @tabChange="tabChange"></analys-header>
		<analys-list :selectedItem="selectedItem"></analys-list>
		<analys-footer></analys-footer>
	</div>
</template>
<script>
import {Indicator} from 'mint-ui'
import analysFooter from './analys/footer.vue'
import analysHeader from './analys/header.vue'
import analysList from './analys/list.vue'
export default{
	name:'analys',
	data(){
		return {
			selectedItem:'1'
		}
	},
	components:{
		analysFooter,
		analysHeader,
		analysList
	},
	methods:{
		tabChange(value){
			this.selectedItem = value;
		}
	}
}
</script>
<style>
	
</style>