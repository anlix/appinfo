<template>
	<div id="customers-footer" class="customers-footer">
		<div class="footer">
			<ul class="list">
	            <li v-for="item in list" @click="goDetail(item)">
	                <p class="title">
	                    <span class="one">合计</span> 
	                </p>
	                <p v-for="itemB in item.linelist">
	                    <span v-for="itemC in itemB.datalist" class="span-default">
	                    	<span class="two">{{itemC.key}}</span>
	                    	<span class="two">{{itemC.value}}</span>
	                    </span>
	                </p>
	            </li>
	        </ul>
		</div>
	</div>
</template>
<script>
export default{
	name:'customers-footer',
	data(){
		return {
			list:[
				{
		            "productname": "微商城",//产品名称,
		            "producttype": 1,//产品类型
		            "datatype": 0,//数据类型，1pvuv，2业务数据，需隐藏，下一页面需传入
		            "linelist": [//行数据，一行内的数据
		                {
		                    "index": 0,//行数据编号，前端可不显示
		                    "datalist": [//行内数据
		                        {
		                            "key": "PV",
		                            "value": 3
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "UV",
		                            "value": 1
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "IP",
		                            "value": 1
		                        }
		                    ]
		                }
		            ]
		        }
			]
		}
	}	
}
</script>
<style lang="scss">
.customers-footer{
	position:relative;
	height:2.4rem;
	background-color: #f9f9f9;
	.footer{
		background-color:#fff;
		position:fixed;
		bottom:0;
		left: 0;
		right:0;
		//height:2rem;
		//line-height: 2rem;
		box-sizing:border-box;
		border-top:1px solid #509BF8;

		.list {
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
}
</style>