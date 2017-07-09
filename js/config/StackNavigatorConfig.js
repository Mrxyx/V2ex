/**
 * Created by Mrx on 2017/6/30.
 */

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

// 路由相关配置
const stackNavigatorConfig = {
    initialRouteName: 'Welcome',
    navigationOptions: {
        header: null,
        headerTintColor: 'white',
        showIcon: true,
        swipeEnabled: false,
        animationEnabled: false,
        headerStyle: {
            backgroundColor: '#f2f2f2'
        }
    },
    mode: 'card',
    paths: 'rax/: Home',
    headerMode: 'float',
    //Android中页面左右切换动画
    transitionConfig: (() => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })),
    onTransitionStart: () => {},
    onTransitionEnd: () => {}
};

export default stackNavigatorConfig