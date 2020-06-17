import React, {Component} from 'react'
// import { AtList, AtListItem } from "taro-ui"  // taro-ui
import './index.css'
import VirtualList from '@tarojs/components/virtual-list'
import {Button,View} from "@tarojs/components";
import { AtCard ,AtNoticebar} from "taro-ui"
import AuthButton from '@saturn/auth/components/authButton'
import Taro from '@tarojs/taro'
function buildData (offset = 0) {
  return Array(100).fill(0).map((_, i) => i + offset);
}

// @ts-ignore
const Row = React.memo(({ index, style, data }) => {
  return (
    <AtCard
      note={`我是第${index}行`}
      extra='虚拟列表'
      title='weimob'
      thumb='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592382474100&di=3b4397182921d8d230c6165209e41aaf&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'
    >
      <AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
      <AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
    </AtCard>
  );
})

export default class VirtualListDemo extends Component {
  state = {
    data: buildData(0),
  }
  authUser = () =>{

    console.log('tttt')
    if(Taro.getEnv()==='TT'){
      Taro.getSetting({
          success:  (res) =>{
             if (!res.authSetting['scope.userInfo']) {
                Taro.authorize({
                     scope: 'scope.userInfo',
                      success:  () => {
                        Taro.getUserInfo()
                      }
                    })
                }
           }
        })
    }
  }
  getUserInfo = (e)=>{
    console.log(e)
    Taro.getUserInfo().then((data)=>{
      console.log(data)
    })
  }
  onGetUserInfoSuccess = (data) =>{
      console.log(data)
  }
  onGetUserInfoError = (error)=>{
     console.log(error)
  }
  render() {
    const { data } = this.state
    const dataLen = data.length
    return (
      <View>
        {/*<View onClick={this.authUser}>*/}
          <Button openType={'getUserInfo'} onGetUserInfo={this.getUserInfo} >111</Button>
        {/*</View>*/}

        <AuthButton onGetUserInfoError={this.onGetUserInfoError} onGetUserInfoSuccess={this.onGetUserInfoSuccess}>获取用户信息</AuthButton>
      <VirtualList
        height={10000}
        width='100%'
        itemData={data}
        itemCount={dataLen}
        itemSize={100}
      >
        {Row}
      </VirtualList>
      </View>
    );
  }
}
