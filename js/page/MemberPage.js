/**
 * Created by Mrx on 2017/7/6.
 */
import React from 'react'
import {
    View,
    WebView,
    StyleSheet,
    Platform,
    BackHandler,
} from 'react-native'

import Api from '../api/Api'

let BGWASH = 'rgba(255,255,255,0.8)';
var WEBVIEW_REF = 'webview';

export default class MemberPage extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            scalesPageToFit: true,
            canGoBack: false
        }
    }

    backHandler = () => {
        if(this.state.canGoBack) {
            this.refs.webview.goBack()
        }else {
            return false
        }
        return true
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandler)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandler)
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref='webview'
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: Api.getDomain}}
                    javaScriptEnabled={true} // 执行js
                    domStorageEnabled={true} // 指定是否开启DOM本地存储。
                    decelerationRate="normal"
                    onNavigationStateChange={(navState)=>this.setState({canGoBack:navState.canGoBack})}
                    onShouldStartLoadWithRequest={true}
                    startInLoadingState={true} // 强制WebView在第一次加载时先显示loading视图
                    scalesPageToFit={this.state.scalesPageToFit}
                />
            </View>
        )
    }
}

onNavigationStateChange = (navState) => {
    this.setState({
        backButtonEnabled: navState.canGoBack,
        forwardButtonEnabled: navState.canGoForward,
        url: navState.url,
        status: navState.title,
        loading: navState.loading,
        scalesPageToFit: true
    });
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView: {
        backgroundColor: BGWASH
    }
})
