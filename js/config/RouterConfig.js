/**
 * Created by Mrx on 2017/6/30.
 */
//路由的配置 页面添加到此处

import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import MemberPage from '../page/MemberPage'
import DetailPage from '../page/DetailPage'

// 路由页面
const routeConfigs = {
    Welcome: { screen: WelcomePage },
    Home: { screen: HomePage },
    Member: { screen: MemberPage },
    Detail: { screen: DetailPage },

};

export default routeConfigs