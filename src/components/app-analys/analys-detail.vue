<template>
	<div id="analys-detail" class="analys-detail">
		<analys-detail-header :title="title"></analys-detail-header>
		<analys-detail-list :eid="eid" :bDate="bDate" :eDate="eDate" :type="type"></analys-detail-list>
	</div>
</template>
<script>
import {Indicator} from 'mint-ui'
import API from '../../api/API'
const api = new API;
import analysDetailHeader from './analys-detail/header.vue'
import analysDetailList from './analys-detail/list.vue'
export default{
	name:'analys-detail',
	beforeRouteEnter(to, from, next){
		Indicator.open({
			text:'加载中...',
			spinnerType: 'fading-circle'
		})
		
		next(vm=>{
			vm.eid = to.query.eid;
			vm.bDate = to.query.bDate;
			vm.eDate = to.query.eDate;
			vm.type = to.query.producttype;
			vm.title=to.query.companyname;
		});
	},
	data(){
		return {
			list:[],
			title:"",
			eid:"",
			bDate:"",
			eDate:"",
			type:""
		}
	},
	components:{
		analysDetailHeader,
		analysDetailList
	}
}
</script>
<style>
.analys-detail{

}
</style>