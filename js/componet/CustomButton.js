/**
 * Created by Mrx on 2017/7/4.
 */
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native'

// 欢迎页按钮
export default class CustomButton extends React.Component {

    constructor(props) {
        super(props)
        this.state={
        }
    }

    render () {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.Ripple('gray', false)}>
                <View style={styles.contentContainer}>
                    <Text style={styles.titleStyle}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gainsboro',
        borderRadius: 20,
        opacity: 0.5,

    },
    titleStyle: {
        fontSize: 15,
    }
})
