<template>
	<div id="analys-detail-list" class="analys-detail-list">
		<div ref="wrapper" :style="{ height: wrapperHeight + 'px'}" >
			<mt-loadmore class="app-scroll" v-show="!isChart" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul class="list">
		            <li v-for="item in list">
		                <p class="title">
		                    <span class="one">{{item.date}}</span> 
		                </p>
		                <p v-for="itemB in item.linelist">
		                    <span v-for="itemC in itemB.datalist" class="span-default">
		                    	<span class="two">{{itemC.key}}</span>
		                    	<span class="two">{{itemC.value}}</span>
		                    </span>
		                </p>
		            </li>
		        </ul>
		    </mt-loadmore>
		</div>
    	<div class="app-chart" v-show="isChart">
    		<canvas ref="chart" style="width:416px;height:218px;"></canvas>
    	</div>
	</div>
</template>
<script>
import {Indicator,Toast} from 'mint-ui'
import Util from '../../../Util'
import API from '../../../api/API'
const api = new API;
export default{
	name:'analys-detail-list',
	beforeMount(){
		Indicator.open({
		  	text: '加载中...',
		  	spinnerType: 'fading-circle'
		});
		console.log(this.eid);
		this.minHeight = document.documentElement.clientHeight-100;
	},
	mounted() {
      	this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      	
      	console.log(document.documentElement.clientHeight);
      	// this.wrapperHeight = this.minHeight>height?this.minHeight:height;
      console.log('a:'+this.$refs.wrapper.getBoundingClientRect().top);
    },
	data(){
		return {
			allLoaded:false,
       		bottomStatus:'',
			pageNo:1,
			list:[],
			isChart:false,
			wrapperHeight:0,
			minHeight:0
		}
	},
	props:['eid','bDate','eDate','type'],
	watch:{
		bDate(newVal,oldVal){
			if(newVal!=oldVal){
				this.getList();
			}
		},
		eDate(newVal,oldVal){
			if(newVal!=oldVal){
				this.getList();
			}
		}
	},
	methods:{
		loadTop (id){
			let that = this;
			that.pageNo = 1;
			that.allLoaded = false;
			this.getList(function(){
				that.$refs.loadmore.onTopLoaded(id);
			});
        },
        loadBottom (id) {
        	let that = this;
            this.getList(function(isLast){
            		console.log(isLast);
            	if(isLast){
            		that.allLoaded = true;
            	}else{
            		that.pageNo++;
            	}
            	that.$refs.loadmore.onBottomLoaded(id);
            });
        },
       
		getList(fn){
			let that = this;
			let params = {
				api:'/datareport/getpvuvgroupbydate',
				param:{
					eid:that.eid,
					startdate:that.bDate,
					enddate:that.eDate,
					operateid:'1',
					type:that.type,
					pageNo:that.pageNo,
					itemsOfPage:'',
					key:''
				}
			}
			console.log(params);
			api.get(params)
				.then(function(res){
					let data = api.formatResponseData(res);
					that.list = data;
					let timer = setTimeout(function(){
						fn&&fn(that.pageNo==res.data.totalPage)
						console.log(that.pageNo,res);
						Indicator.close();
						clearTimeout(timer);
					},500);
				})
				.catch(function(err){
					console.log(err);
					let timer = setTimeout(function(){
						Indicator.close();
						Toast({
						  	message: '加载失败',
						  	iconClass: 'icon icon-success'
						});
						clearTimeout(timer);
					},500);
				})
		}

	}
}
</script>
<style lang="scss">
.analys-detail-list{
	background:#f9f9f9;
	padding-top: 0.1rem;
	font-size: 0.28rem;
	position:absolute;
	top:0.9rem;
	bottom:0;
	//height:100%;
	width:100%;
	
	.app-scroll{
		margin-bottom:0.9rem;
	}
	.list {
        height:100%;
        li {
            background-color: #fff;
            padding: 0.1rem 0.3rem 0 0.2rem;
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