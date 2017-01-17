<template>
	<div id="analys-company-list" class="analys-company-list">
		<div ref="wrapper" :style="{ height: wrapperHeight + 'px'}" >
			<mt-loadmore class="app-scroll" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul class="list" :style="{ minHeight: minHeight + 'px'}">
				<li v-for="item in list" @click="goDetail(item.eid,item.companyname)">
					<p>{{item.companyname||"*"}}</p>
					<p>
						<span>pv</span>
						<span class="two">{{item.pv}}</span>
						<span>uv</span>
						<span class="two">{{item.uv}}</span>
					</p>
				</li>
			</ul>
		</mt-loadmore>
		</div>
	</div>
</template>
<script>
import { Indicator, Toast } from 'mint-ui'
import Util from '../../../Util'
import API from '../../../api/API'
const api = new API();
export default{
	name:'analys-company-list',
	beforeMount(){
		Indicator.open({
		  	text: '加载中...',
		  	spinnerType: 'fading-circle'
		});
		
		console.log(this.minHeight);
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
			list:[],
			pageNo:1,
			wrapperHeight:0,
			wrapperBottom:0,
			minHeight:0
		}
	},
	props:['bDate','eDate','producttype'],
	watch:{
		bDate(newVal, oldVal){
			if(newVal!=oldVal){
				console.log(newVal);
				this.getList();
			}
		}
	},
	methods:{
		goDetail(eid,companyname){
			router.push({
				path:'/analys/company/detail',
				query:{
					eid:eid,
					companyname:companyname,
					bDate:Util.formatDate(this.bDate),
					eDate:Util.formatDate(this.eDate),
					producttype:this.producttype
				}
			});
		},
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
				api:'/datareport/getpvuv',
				param:{
					eid:'',
					startdate:Util.formatDate(this.bDate),
					enddate:Util.formatDate(this.eDate),
					operateid:'1',
					type:this.producttype,
					pageNo:that.pageNo,
					itemsOfPage:'20',
					key:''
				}
			}
			api.get(params)
				.then(function(res){
					let data = api.formatResponseData(res);
					if(that.pageNo ==1){
						that.list = data;
					}else{
						if(that.pageNo == res.data.totalPage){
							Toast({
							  	message: '',
							  	iconClass: 'icon icon-success'
							});
						}else{
							that.list = that.list.concat(data);
						}
					}
					let timer = setTimeout(function(){
						fn&&fn(that.pageNo==res.data.totalPage);
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
.analys-company-list{
	background:#f9f9f9;
	padding-top: 0.1rem;
	font-size: 0.28rem;
	position:absolute;
	top:1.1rem;
	bottom:0.9rem;
	//height:100%;
	width:100%;
	
	.app-scroll{
		margin-bottom:0.9rem;
	}
	.list{
		//height:100%;

		li{
			background-color: #fff;
            padding: 0.1rem 0.2rem 0 0.2rem;
            background-image: url("../../../assets/image/arrow.png");
            background-size: 0.25rem;
            background-position: 98% 50%;
            background-repeat: no-repeat;
            margin-bottom: 0.2rem;
            
	        p {
                display: flex;
                min-height:0.5rem;
                span {
                    flex: 3;
                    margin: 0.06rem;
                    word-break:break-all;

                    &.two {
                        flex:4;
                        text-align:center;

                    }
                }
            }
            p:last-child{
            	padding-left:0.5rem;
            }
		}
	}
}


.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}
.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
}


</style>