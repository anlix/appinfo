<template>
	<div id="customers-detail-header" class="customers-detail-header">
		<div class="header">
			<div class="header-one">
				<div class="header-one-left">
					<p class="one-title">公司</p>
					<p class="one-par">
						<span class="one-child">激活用户数</span>
						<span class="one-child">234</span>
					</p>
				</div>
				<div class="header-one-right" @click="careMe">
					<span v-show="care" class="default-icon-care care-default">已关注</span>
					<span v-show="!care" class="default-icon-uncare care-default">关注我</span>
				</div>
			</div>
			<div class="header-two">
				<p>
					<span class="span-par">
						<span class="span-child">用户总数</span>
						<span class="span-child">2323</span>
					</span>
					<span class="span-par">
						<span class="span-child">用户总数</span>
						<span class="span-child">2323</span>
					</span>
				</p>
				<p>
					<span class="span-par">
						<span class="span-child">用户总数</span>
						<span class="span-child">2323</span>
					</span>
					<span class="span-par">
						<span class="span-child">用户总数</span>
						<span class="span-child">2323</span>
					</span>
				</p>
			</div>
			<div class="header-three">
				<p>
					<span class="span-par-default">开始日期</span>
					<span class="span-par-default">2013-12-23</span>
				</p>
				<p>
					<span class="span-par-default">截止日期</span>
					<span class="span-par-default">2013-12-23</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'customers-detail-header',
	data(){
		return{
			care:false
		}
	},
	methods:{
		careMe(){
			this.care = !this.care;
		}
	}
}
</script>
<style lang="scss">
.customers-detail-header{
	position:relative;
	height:4.5rem;
	
	.header{
		top:0;
		left:0;
		right:0;
		position:fixed;
		height:4.5rem;
		background-color:#fff;
		padding:0.3rem 0.3rem;
		font-size: 0.28rem;
		border-bottom:1px solid #aaa;
		box-sizing:border-box;
	}
	p{
		min-height:0.6rem;
		display: flex;
		span{
			display: inline-block;
		}
		.span-par{
			flex:1;
			font-size: 0;
			.span-child{
				font-size: 0.28rem;
				width: 50%;

			}
		}
		.span-par-default{
			flex:1;
		}
	}
	.header-one{
		display:flex;
		.one-title{
			height:0.7rem;
			font-size:0.3rem;
			font-weight:bold;
		}
		.header-one-left{
			flex:2;
			.one-par{
				display:flex;
				.one-child{
					flex:1;
				}
			}

		}
		.header-one-right{
			flex:1;
			text-align:right;
		}
	}
	.care-default{
		display:inline-block;
		width:1rem;
		height:1rem;
		background-size:0.5rem;
		background-position:center top;
		padding-top:0.5rem;
		box-sizing:border-box;
	}
	.default-icon-uncare {
	    background-image: url(data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyM2RlYjk2YS04OTNiLTZiNDktYTFhMC1iZjY0N2UxM2JiMzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTc2OTI2NEFFRjQ4MTFFNUJGQzZFRDk5QjNGRTgwNEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTc2OTI2NDlFRjQ4MTFFNUJGQzZFRDk5QjNGRTgwNEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRmNDZkZTJlLTVjZDUtNzU0MC1hN2Y1LTU0ZTNiN2E3MjFkYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyM2RlYjk2YS04OTNiLTZiNDktYTFhMC1iZjY0N2UxM2JiMzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zCMT+AAACL0lEQVR42syYTSgEYRjHZydEPm8i3xcXoY18lIsoDignF+Gyl41yRQhRTpSUA6Fky4WQSPKVi9O2ykcpHKwD4bK+0vi/9bzbNnZnZ3Zmd+epX7vtvO8zv+Z92vd9xiJJkuBwOASFiAN5IB28gmvwI2iLdOID3CnNFxWS1IB18E4Sx8AFXsAcyAgikQSGwQN4Ak5wA57BKqhUK8QSLZJAC4iXXU8GNpJsDCBTDC7BEMiWXUsBbeAMLFO+gEKp4AB0qFgGlmgDNMh+LwJHICvIfAtoB4d0339CFnqU5RpqIxbM01NlEQNWQJqGHFawxl18hToVlkApMkEXfW+l5dIa9XR/r1AMFWCoYZd9hhID7IlzoTqQoyNZIdVOlY4c+WyFuFCjoD9sVFN6witUZoBQrQE5rKJPYeqNAgNy5HKhRAOSJRiQI54LeQRzhMSF3CYRcnMhl0mEXFzoyCRCh1yIbai/0a4fsOdbQztRFtoHt76b62SUhablu/0J2IySzB7Y9ndA6wZvEZbx0H39nhjv6WwjRVDITmftgGdqdrAfjJDMBJ3fg3YdY2AqzDIzoE9LG9RLXUM4YhT0aO3LWIxQB/JpYAF3UklIoQgJ1Duxpu5CpwybXw2WlAaJKpM56VTJivBbowgbP07zncEGixoSf1ERltAfqJq/hi0a30/zBSOFeFyBZlABdhX2JfZuoInGqw5RR02cUxvN2p9Z8AgWQCk1fqehJLWw1zFmij8BBgDsqGmZz3oAIgAAAABJRU5ErkJggg==);
	    background-repeat: no-repeat;
	}
	.default-icon-care {
	    background-image: url(data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyM2RlYjk2YS04OTNiLTZiNDktYTFhMC1iZjY0N2UxM2JiMzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDI3RDUwM0VFRjQ4MTFFNUFFNUQ5MkQwMDE3M0NCOUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDI3RDUwM0RFRjQ4MTFFNUFFNUQ5MkQwMDE3M0NCOUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRmNDZkZTJlLTVjZDUtNzU0MC1hN2Y1LTU0ZTNiN2E3MjFkYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyM2RlYjk2YS04OTNiLTZiNDktYTFhMC1iZjY0N2UxM2JiMzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6bxAx9AAACJ0lEQVR42syYTShEURTH77yGCLETydfGRkjko2xEsWBhYyWUbCbKFiFEWVFSFoTIwoaQSPK1s5rGAqWwwIKQ8pme/+VcTeN58+68Z+ad+jXTzL3n/rrvNPeecaiqylhTCdOJcJAK4sEdOAbvTC7iiWdwpjdf0UnCLRfBA0nsAg+4BeMgwY9ENOgBF+AauMEJuAHzoFBrkkNjh3iiUVDvZ8FHUAvWNL7LAqsgSWc+FmazwEW5NHcoFmwZkOERA5ZAhc/nmWDHj8zXZoA6sE3r/hJy0FbmS9RGGJigXeXhBHMgTiJHLlgQLt5CDaCSyUciaKT3NfS4ZKOc1v8RclIBBhoun9dAopPvuBAqA8kmkmVQ7RSZyJHGn5AQqmTmo5lqykz8COVZIFRqQY5cxaswzUa6BTlShFCUBckiLcgRIYSemD1CFUJXNhG6EkIemwh5hNCOTYS2hRA/UD9CXT9gw7uG1kIstAlOvQ/XoRALjfie9ntgOUQyG3Sh+3VBawH3QZZ5onU1b4zndLdRgyjkorv2n5d8frHvCpLMIJgy0nX0g+F/luGNRLtMG9QGuv9Jpg+0yvZlPHqpA3mxsIAbqCTUQIR4zFBTd2hShs8vBtN6gxSDydx0q+RF+CYpwscP0Hy3v8GKROJXKsJs+gE18tOwQuM7aD6zUkjEEagGBWBd51zi/XkVjTcciomaOKA2mrc/Y+ASTIIcavz2A0n6/WeDjeJTgAEAZy5sCQTZ088AAAAASUVORK5CYII=);
	    background-repeat: no-repeat;
	}
}
</style>
