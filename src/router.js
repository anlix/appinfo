import Analys from './components/app-analys/analys.vue'
import AnalysCompany from './components/app-analys/analys-company.vue'
import AnalysDetail from './components/app-analys/analys-detail.vue'

import Customers from './components/app-customers/customers.vue'
import CustormersFollow from './components/app-customers/customers-follow.vue'
import Follow from './components/app-follow/follow.vue'

const router = [{
		path:'/',
		redirect:'/analys'
	},{
		path: '/analys',
		component: Analys,
	},{
		path:'/analys/company',
		component:AnalysCompany
	},{
		path:'/analys/company/detail',
		component:AnalysDetail
	},{
		path: '/customers',
		component: Customers
	},{
		path:'/customersFollow',
		component:CustormersFollow
	},{
		path:'/follow',
		component:Follow
	}]
export default router