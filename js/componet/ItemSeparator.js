/**
 * Created by Mrx on 2017/7/9.
 */
import React from 'react'
import {
    View,
    StyleSheet,
}from 'react-native'

// 分隔线喽~
export default class ItemSeparator extends React.Component {

    render () {
        return (
            <View style={styles.separatorStyle}/>
        )
    }
}

const styles = StyleSheet.create({
    separatorStyle: {
        height: 1,
        backgroundColor: 'white'
    }
})