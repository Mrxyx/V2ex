/**
 * Created by Mrx on 2017/7/9.
 */
import React from 'react'
import {
    View,
    ActivityIndicator,
    StyleSheet,
}from 'react-native'

// 加载中组件
export default class LoadingView extends React.Component {

    render () {
        return (
            <View style={styles.containerStyle}>
                <ActivityIndicator
                    animating={true}
                    style={[styles.gray, {height: 80}]}
                    color='black'
                    size="large"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
})