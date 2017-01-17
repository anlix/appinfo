<template>
	<div id="customers-header" class="customers-header">
		<div class="header">
			<span class="header-ipt type">
				<input type="text" v-model="appType" @click="showType" readonly="readonly">
			</span>
			<span class="header-ipt date" @click="showDatePicker(0)">
				<input type="text" v-model="beginDate" readonly="readonly" disabled="disabled">
			</span>
			<span class="header-ipt txt">至</span>
			<span class="header-ipt date" @click="showDatePicker(1)">
				<input type="text" v-model="endDate" readonly="readonly" disabled="disabled">
			</span>
			<!-- type弹层 -->
			<mt-popup v-model="typeVisible" class="ft28 w100" popup-transition="popup-fade" position="bottom">
				<mt-picker :slots="slots" @change="onTypesChange"></mt-picker>
			</mt-popup>
			<!-- 日期控件 -->
			<mt-datetime-picker ref="beginPicker" type="date" v-model="beginDate" @confirm="handleDate"></mt-datetime-picker>
			<mt-datetime-picker ref="endPicker" type="date" v-model="endDate" @confirm="handleDate"></mt-datetime-picker>
		</div>
	</div>
</template>
<script>
import Util from '../../../Util'
export default{
	name:'customers-header',
	data(){
		return {
			appType:"移动工作台",
			bDate:new Date(),
			eDate:new Date(),
			typeVisible:false,
			currentPicker:0,
			slots:[{
          		flex: 1,
          		values: ['微商城','门店收银','微销售','微客户','门店报表','移动工作台'],
	          	className: 'slot',
	          	textAlign: 'center'
	        }]
		}
	},
	props:['producttype','dateType'],
	watch:{
		producttype(newVal, oldVal){
			console.log(newVal);
			this.appType = this.slots[0].values[parseInt(newVal)-1] || this.slots[0].values[0];
		},
		dateType(newVal,oldVal){
			this.formatDataRange(this.dateType);
		}
	},
	computed:{
		beginDate(){
			return Util.formatDate(this.bDate);
		},
		endDate(){
			return Util.formatDate(this.eDate);
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
		},
		handleEndDate(value){
			this.eDate = value;
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
.customers-header{
	position:relative;
	height:1.1rem;
	background-color:#fff;
	.header{
		height:1.1rem;
		top: 0;
	    right: 0;
	    left: 0;
	    position: fixed;
	    z-index: 1;
		font-size:0;
		background-color:#fff;
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
		.type{
			width:25%;
			input{
				white-space:nowrap;
	    		overflow:hidden; 
	    		text-overflow:ellipsis;
			}
		}
		.txt{
			width:7%;	
			padding:0;
			&::after{
	    		content:'';
	    		width:0;
	    		height:0;
	    		border:0;
	    		
	    	}
		}
		.date{
			width:34%;
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