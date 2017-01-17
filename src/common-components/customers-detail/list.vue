<template>
	<div id="customers-detail-list" class="customers-detail-list">
		<ul class="list">
            <li v-for="item in list">
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
	</div>
</template>
<script>
export default{
	name:'customers-detail-list',
	data(){
		return {
			list: [
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
		        },
		        {
		            "productname": "门店收银",
		            "producttype": 2,
		            "datatype": 0,
		            "linelist": [
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "PV",
		                            "value": 1
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
		        },
		        {
		            "productname": "微商城",
		            "producttype": 1,
		            "datatype": 0,
		            "linelist": [
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "企业数",
		                            "value": 276
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "商城订单",
		                            "value": 111258
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "企业数",
		                            "value": 38583
		                        }
		                    ]
		                }
		            ]
		        },
		        {
		            "productname": "门店收银",
		            "producttype": 2,
		            "datatype": 0,
		            "linelist": [
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "企业数",
		                            "value": 42
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "上架商品",
		                            "value": 6681
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "零售单笔数",
		                            "value": 147333
		                        }
		                    ]
		                }
		            ]
		        },
		        {
		            "productname": "微销售",
		            "producttype": 3,
		            "datatype": 1,
		            "linelist": [
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "企业数",
		                            "value": 4
		                        },{
		                            "key": "企业数",
		                            "value": 4
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "订单分享",
		                            "value": 22
		                        },{
		                            "key": "订单分享",
		                            "value": 22
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "微销售订单",
		                            "value": 76
		                        },{
		                            "key": "微销售订单",
		                            "value": 76
		                        }
		                    ]
		                }
		            ]
		        },
		        {
		            "productname": "门店库存",
		            "producttype": 3,
		            "datatype": 1,
		            "linelist": [
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "企业数",
		                            "value": 4
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "订单分享",
		                            "value": 22
		                        }
		                    ]
		                },
		                {
		                    "index": 0,
		                    "datalist": [
		                        {
		                            "key": "微销售订单",
		                            "value": 76
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
.customers-detail-list{
	background: #f9f9f9;
	padding-top: 0.1rem;
	.list {
        
        li {
            background-color: #fff;
            padding: 0.1rem 0.3rem 0 0.2rem;
           	background-image: url("../../assets/image/arrow.png");
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