/**
 * Created by Mrx on 2017/7/9.
 */
import React from 'react'
import {
    View,
    Image,
    Text,
    FlatList,
    Animated,
    StyleSheet,
} from 'react-native'

import NetUtil from '../api/NetUtil'
import Api from '../api/Api'

import ItemSeparator from '../componet/ItemSeparator'
import DetailItem from '../componet/DetailItem'
import DetailHeader from '../componet/DetailHeader'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export default class DetailPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: true,
            itemSource: this.props.navigation.state.params.itemData
        }
    }

    _getData() {
        console.log(this.state.itemSource)
        NetUtil.get(Api.getReplies(), {topic_id: this.state.itemSource.id}, (response) => {
            let dataBlob = [];
            let i = 0;
            response.map(function (item) {
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

    // 下拉刷新
    _onRefresh() {
        this.setState({
            isLoading: true
        })
        this._getData
    }

    componentDidMount() {
        this._getData()
    }

    render() {
        return (
            <View style={styles.contentContainer}>
                <AnimatedFlatList
                    onRefresh={() => this._onRefresh}
                    refreshing={this.state.isLoading}
                    ListHeaderComponent={<DetailHeader item={this.state.itemSource}/>}
                    ItemSeparatorComponent={ItemSeparator}
                    data={this.state.data}
                    renderItem={({item}) => <DetailItem itemValue={item.value}>
                    </DetailItem>}
                />
            </View>
        )
    }
}
//
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: 'ghostwhite'
    },
})