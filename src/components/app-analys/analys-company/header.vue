<template>
	<div id="analys-company-header" class="analys-company-header">
		<div class="header">
			<span class="header-ipt date"  @click="showDatePicker(0)">
				<input type="text" v-model="beginDate" readonly="readonly" disabled="disabled">
			</span>
			<span class="header-ipt txt">至</span>
			<span class="header-ipt date" @click="showDatePicker(1)">
				<input type="text" v-model="endDate" readonly="readonly" disabled="disabled">
			</span>
			
			<!-- 日期控件 -->
			<mt-datetime-picker ref="beginPicker" type="date" :startDate="startDate" v-model="beginDate" @confirm="handleDate"></mt-datetime-picker>
			<mt-datetime-picker ref="endPicker" type="date" v-model="endDate" @confirm="handleDate"></mt-datetime-picker>
		</div>
	</div>
</template>
<script>
import Util  from '../../../Util'
export default{
	name:'analys-company-header',
	mouted(){
		console.log('ff');
		this.formatDateRange('1');
	},
	data(){
		return {
			bDate:new Date(),
			eDate:new Date(),
			typeVisible:false,
			currentPicker:0,
			
		}
	},
	props:['dateType'],
	watch:{
		dateType(newVal,oldVal){
			console.log(1);
			this.formatDataRange(this.dateType);
		}
	},
	computed:{
		beginDate(){
			return Util.formatDate(this.bDate);
		},
		endDate(){
			return Util.formatDate(this.eDate);
		},
		startDate(){
			let date = new Date();
			return new Date(date.setYear(date.getFullYear()-20));
		}
	},
	methods:{
		showType(){
			this.typeVisible = true;
		},
		onTypesChange(picker, values){
			let that = this;
			var timer = setTimeout(function(){
				that.typeVisible = false;
				that.appType = values[0];
				clearTimeout(timer);
			},300);
		},
		showDatePicker(type){
			this.currentPicker = type;
			type?this.$refs.endPicker.open():this.$refs.beginPicker.open();
		},
		handleDate(value){
			this.currentPicker?this.eDate = value:this.bDate = value;
			console.log(this.eDate);
			this.$emit('changeDate',{
				bDate:this.bDate,
				eDate:this.eDate
			});
		},
		formatDataRange(index){
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
<style lang="scss">
.analys-company-header{
	position:realtive;
	background-color:#fff;
	height:1.1rem;
	.header{
		background-color:#fff;
		height:1.1rem;
		top: 0;
	    right: 0;
	    left: 0;
	    position: fixed;
	    z-index: 1;
		font-size:0;
		//background-color:#509BF8;
		box-sizing:border-box;
		border-bottom:1px solid #509BF8;
	    .header-ipt{
	    	font-size:0.28rem;
	    	box-sizing:border-box;
	    	display:inline-block;
	    	height:1.1rem;
	    	line-height:1.1rem;
	    	text-align:center;
	    	vertical-align:top;
	    	padding:0 0.2rem;
	    	position:relative;
	    	color:#509BF8;
	    	input{
	    		width:calc(100% - 0.3rem);
	    		outline:none;
	    		height:0.4rem;
	    		border-radius:0.2rem;
	    		outline:0;
	    		border:0;
	    		box-shadow:0 0 0 1px #509BF8;
	    		padding-right:0.3rem;
	    		text-align:center;
	    		color:#509BF8;
	    		background-color:#fff;

	    	}
	    	&::after{
	    		content:'';
	    		width:0;
	    		height:0;
	    		border:0.1rem solid;
	    		border-color:#000 transparent transparent transparent;
	    		position:absolute;
	    		z-index:1;
	    		right: 0.3rem;
	    		top: 0.5rem;
	    	}
	    }
		
		.txt{
			width:12%;	
			padding:0;
			&::after{
	    		content:'';
	    		width:0;
	    		height:0;
	    		border:0;
	    		
	    	}
		}
		.date{
			width:44%;
		}
		.ft28{
			font-size:0.28rem;
		}
		.w100{
			width:100%;
		}
	}
}
</style>