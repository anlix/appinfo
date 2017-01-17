<template>
	<div id="analys-company">
		<analys-company-header :dateType="dateType" @changeDate="changeDate"></analys-company-header>
		<analys-company-list :bDate="bDate" :eDate="eDate" :producttype="producttype"></analys-company-list>
		<analys-company-footer></analys-company-footer>
	</div>
</template>
<script>
import Util from '../../Util'
import analysCompanyHeader from './analys-company/header.vue'
import analysCompanyList from './analys-company/list.vue'
import analysCompanyFooter from './analys-company/footer.vue'
export default{
	name:'analys-company',
	beforeRouteEnter(to, from, next){
		next(vm=>{
			vm.dateType = to.query.dateType;
			vm.producttype = to.query.producttype;
			vm.formatDateRange(vm.dateType);
		});
	},
	data(){
		return {
			dateType:'',
			producttype:'',
			list:[],
			bDate:new Date(),
			eDate:new Date()
		}
	},
	components:{
		analysCompanyHeader,
		analysCompanyList,
		analysCompanyFooter
	},
	methods:{
		changeDate(date){
			console.log(date);
			this.bDate = date.bDate;
			this.eDate = date.eDate;
			// this.getList();
		},
		formatDateRange(index){
			switch(index){
				case '1': this.bDate = new Date(this.bDate.setDate(this.bDate.getDate()-7));
					break;
				case '2': this.bDate = new Date(this.bDate.setMonth(this.bDate.getMonth()-1));
					break;
				case '3': this.bDate = new Date(this.bDate.setMonth(this.bDate.getMonth()-3));
					break;
				default :this.bDate = new Date(this.bDate.setDate(this.bDate.getDate()-7));
			}
		}
	}
}
</script>