/**
 * Created by Mrx on 2017/6/27.
 */
import React from 'react';
import {StackNavigator} from 'react-navigation';

import routeConfigs from './js/config/RouterConfig'
import stackNavigatorConfig from './js/config/StackNavigatorConfig'

const Nav = StackNavigator(routeConfigs, stackNavigatorConfig);

export default class setup extends React.Component {
    render() {
        return(
            <Nav/>
        );
    }
}