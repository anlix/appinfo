import axios from 'axios'
import config from './config'

// axios(config);
class API {
	//获取pv/uv
	get (params) {
		config.data = params.param;
		return axios.post(params.api,{},config);
	}
	//添加授权
	post (param) {
		config.data.strSQL = param.param;
		return axios.post(param.api,{},config);
	}
	//格式化数据
	formatResponseData(res){
		return res.data.data;
	}
	
	
}
export default API;