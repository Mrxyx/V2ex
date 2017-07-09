/**
 * Created by Mrx on 2017/6/29.
 */
import React from 'react'
import {TabNavigator} from "react-navigation";

import HotPage from './HotPage'
import LastPage from './LastPage'


// export default class HomePage extends React.Component {
//
//     static navigationOptions = {
//         header: null
//     };
//
//     render() {
//         return(
//             <PageView/>
//         )
//     }
// }
//
// const PageView = TabNavigator({
//     最热: {screen: HotPage},
//     最新: {screen: LastPage},
// },{
//     tabBarOptions: {
//         activeTintColor: 'dimgrey',
//         inactiveTintColor: 'lightgray',
//         pressColor: 'dimgrey',
//         style: {
//             backgroundColor: 'snow',
//         },
//         indicatorStyle: {
//             backgroundColor: 'dimgrey'
//         }
//     },
// });

const HomePage = TabNavigator({
    最热: {screen: HotPage},
    最新: {screen: LastPage},
}, {
    tabBarOptions: {
        activeTintColor: 'dimgrey',
        inactiveTintColor: 'lightgray',
        pressColor: 'dimgrey',
        style: {
            backgroundColor: 'snow',
        },
        indicatorStyle: {
            backgroundColor: 'dimgrey'
        }
    },
});

export default HomePage