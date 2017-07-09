/**
 * Created by Mrx on 2017/7/6.
 */
import React from 'react'

// 封装的网络请求 本项目只用到get
export default class NetUtil extends React.Component {
    /*
     *  get请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static get(url,params,callback){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        console.log(url)
        //fetch请求
        fetch(url,{
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                callback(responseJSON)
            })
            .catch((error) => {
                console.error(error);
            })
            .done();
    }
}
