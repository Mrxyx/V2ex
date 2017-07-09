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

import ItemSeparator from '../componet/ItemSeparator'

export default class DetailHeader extends React.Component {

    constructor(props) {
        super(props)
        this.state= {
            itemSource: this.props.item
        }
    }

    render() {
        return (
        <View>
            <View style={styles.titleContainer}>
                <Image source={{uri: 'http:' + this.state.itemSource.member.avatar_normal}}
                       style={styles.imageStyle}/>
                <View style={styles.textContainer}>
                    <Text style={styles.titleStyle}>{this.state.itemSource.title}</Text>
                    <Text style={styles.contentStyle}>{this.state.itemSource.content}</Text>
                </View>
            </View>
            <ItemSeparator/>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        padding: 5,
    },
    textContainer: {
        paddingLeft: 5,
        flexDirection: 'column',
    },
    titleStyle: {
        fontSize: 14,
    },
    contentStyle: {
        fontSize: 13,
        paddingTop: 2
    },
    imageStyle: {
        borderRadius: 5,
        width: 50,
        height: 50,
    }
})