<template>
	<div id="analys-list" class="analys-list">
		<mt-navbar v-model="selectedItem" :fixed="true">
		  	<mt-tab-item id="1">本周</mt-tab-item>
		  	<mt-tab-item id="2">本月</mt-tab-item>
		  	<mt-tab-item id="3">本季度</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selectedItem" :swipeable="true">
		  	<mt-tab-container-item id="1">
		    	<ul class="list">
		            <li v-for="item in list" @click="goCompany(item.producttype,item.datatype)">
		                <p class="title">
		                    <span class="one">{{item.productname}}</span> 
		                </p>
		                <p v-for="itemB in item.linelist">
		                    <span v-for="itemC in itemB.datalist" class="span-default">
		                    	<span class="two">{{itemC.key}}</span>
		                    	<span class="two">{{itemC.value}}</span>
		                    </span>
		                </p>
		            </li>
		        </ul>
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="2">
		    	<ul class="list">
		            <li v-for="item in list" @click="goCompany(item.producttype,item.datatype)">
		                <p class="title">
		                    <span class="one">{{item.productname}}</span> 
		                </p>
		                <p v-for="itemB in item.linelist">
		                    <span v-for="itemC in itemB.datalist" class="span-default">
		                    	<span class="two">{{itemC.key}}</span>
		                    	<span class="two">{{itemC.value}}</span>
		                    </span>
		                </p>
		            </li>
		        </ul>
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="3">
		    	<ul class="list">
		            <li v-for="item in list" @click="goCompany(item.producttype,item.datatype)">
		                <p class="title">
		                    <span class="one">{{item.productname}}</span> 
		                </p>
		                <p v-for="itemB in item.linelist">
		                    <span v-for="itemC in itemB.datalist" class="span-default">
		                    	<span class="two">{{itemC.key}}</span>
		                    	<span class="two">{{itemC.value}}</span>
		                    </span>
		                </p>
		            </li>
		        </ul>
		  	</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
import {Indicator} from 'mint-ui'
import Util from '../../../Util'
import API from '../../../api/API'
const api = new API();
export default{
	name:'analys-list',
	beforeMount(){
		Indicator.open({
		  	text: '加载中...',
		  	spinnerType: 'fading-circle'
		});
		
		
		this.formatDataRange('1');
		this.getList();
	},
	data(){
		return {
			selectedItem:'1',
			list: [],
		    bDate:new Date(),
			eDate:new Date()
		}
	},
	watch:{
		selectedItem(newVal, oldVal){
			if(newVal!=oldVal){
				this.bDate = new Date();
				this.eDate = new Date();
				Indicator.open({
				  	text: '加载中...',
				  	spinnerType: 'fading-circle'
				});
				this.formatDataRange(newVal);
				this.getList();
			}
		}
	},
	methods:{
		goCompany(index,datatype){
			if(datatype==1){
				router.push({
					path:'/analys/company',
					query: {
					 	dateType: this.selectedItem,
					 	producttype:index
					}
				});
			}else if(datatype==2){
				router.push({
					path:'/customers',
					query: {
						dateType: this.selectedItem,
					 	producttype:index
					}
				});
			}
			
		},
		getList(){
			let params = {
				api:"/datareport/getsummarize",
				param:{
					eid:"",
					startdate:Util.formatDate(this.bDate),
					enddate:Util.formatDate(this.eDate),
					operateid:1,
					type:"",
					key:""

				}
			};
			let that = this;
			api.get(params)
				.then(function(data){
					console.log(data);
					that.list = data.data.data;
					Indicator.close();
				})
				.catch(function(err){
					console.log(err);
					Indicator.close();
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
.analys-list{
	background: #f9f9f9;
	padding-top: 0.15rem;

	.list {
        
        li {
            background-color: #fff;
            padding: 0.1rem 0.3rem 0 0.2rem;
           	background-image: url("../../../assets/image/arrow.png");
            background-size: 0.25rem;
            background-position: 98% 50%;
            background-repeat: no-repeat;
            margin-bottom: 0.2rem;
            font-size: 0.28rem;
			
            p {
                display: flex;
				min-height:0.5rem;
				span{
					display:inline-block;
				}
                .span-default{
                    flex: 1;
                    font-size:0;
				}
                .two {
                    width:50%;
                    font-size:0.28rem;
                    padding-left:0.1rem;
                    box-sizing:border-box;
                }
                

                &.title {
                    .one {
                        color: green;
                    }
                }
            }
        }
    }

}	
</style>