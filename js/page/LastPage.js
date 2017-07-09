/**
 * Created by Mrx on 2017/6/29.
 */
import React from 'react'
import {
    View,
    FlatList,
    Animated,
    Text,
    StyleSheet,
} from 'react-native'

import NetUtil from '../api/NetUtil'
import Api from '../api/Api'

import HotItem from '../componet/HotItem'
import ItemSeparator from '../componet/ItemSeparator'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export default class LastPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: true
        }
    }

    // 下拉刷新
    _onRefresh() {
        this.setState({
            isLoading: true
        })
        this._getData
    }

    // 获取数据 并赋值
    _getData () {
        NetUtil.get(Api.getLastTopics(), '', (response) => {
            let responseJson = []
            responseJson = response
            let dataBlob = []
            let i = 0;
            responseJson.map(function (item) {
                dataBlob.push({
                    key: i,
                    value: item,
                })
                i++
            })
            this.setState({
                data: dataBlob,
                isLoading: false
            })
            dataBlob = null
        })
    }

    // 跳转到详情页
    _goDetail (data) {
        console.log(data)
        this.props.navigation.navigate('Detail', {itemData: data})
    }

    componentDidMount() {
        this._getData()
    }

    render() {

        // // 判断为加载中时展示 加载界面
        // if(this.state.isLoading) {
        //     return (<LoadingView/>)
        // }

        // 展示正常数据
        return (
            <View style={styles.container}>
                <AnimatedFlatList
                    onRefresh={() => this._onRefresh}
                    refreshing={this.state.isLoading}
                    ItemSeparatorComponent={ItemSeparator}
                    data={this.state.data}
                    renderItem={({item}) => <HotItem itemValue={item.value} onPress={() => this._goDetail(item.value)}>
                    </HotItem>}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ghostwhite'
    },
    item: {
        fontSize: 18,
        height: 44,
    },
})