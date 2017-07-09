/**
 * Created by Mrx on 2017/6/27.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Button,
    Text,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

import CustomButton from '../componet/CustomButton'
import Api from '../api/Api'
import NetUtil from '../api/NetUtil'

export default class WelcomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            memberMAx: '',
            topicMax: '',
            fadeAnim: new Animated.Value(0),
        }
    }

    goHome = () => {
        // const resetActions = NavigationActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({routeName: 'Home'})]
        // });
        this.props.navigation.navigate('Home')
    };

    goWeb = () => {
        this.props.navigation.navigate('Member')
    }

    componentDidMount() {
        NetUtil.get(Api.getSiteState(), '', (responseJson) => {
            this.setState({
                memberMAx: responseJson.member_max,
                topicMax: responseJson.topic_max,
            })
            console.log(this.state.memberMAx + '--' + this.state.topicMax)
        })
        // fetch(Api.getSiteState())
        //     .then((response) => {
        //         return response.json()
        //     })
        //     .then((responseJson) => {
        //         this.setState({
        //             memberMAx: responseJson.member_max,
        //             topicMax: responseJson.topic_max,
        //         })
        //         console.log(this.state.memberMAx + '--' + this.state.topicMax)
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        Animated.timing(  // 随时间变化而执行的动画类型
            this.state.fadeAnim,// 动画中的变量值
            {
                toValue: 1,  // 透明度最终变为1，即完全不透明
                duration: 4000, // 动画时间
                easing: Easing.linear // 缓动函数
            }
        ).start();
    }

    render() {
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.backgroundImage} source={require('../../res/images/welcomebg.png')}>
                    <View style={styles.contentContainer}>
                        <Animated.View style={[styles.titleContainer, {
                            opacity: this.state.fadeAnim
                        }]}>
                            <Text style={styles.titleText}>V2EX</Text>
                            <Text style={styles.sloganText}>way to explore</Text>
                        </Animated.View>
                        <View style={styles.buttonContainer}>
                            <CustomButton text="Traveler" onPress={this.goHome}/>
                            <CustomButton text="Member" onPress={this.goWeb}/>
                        </View>

                        <View style={styles.footerContainer}>
                            <Text style={styles.stateText}>注册V友 {this.state.memberMAx}</Text>
                            <Text style={styles.stateText}>主题数 {this.state.topicMax}</Text>
                            <Text>domain:www.v2ex.com</Text>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 5,
    },
    titleContainer: {
        flex: 2,
    },
    footerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'stretch'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor: 'rgba(0,0,0,0)',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },
    sloganText: {
        textAlign: 'center'
    },
    stateText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
})