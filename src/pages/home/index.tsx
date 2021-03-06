import React from 'react'
import Taro from '@tarojs/taro'
import { AtList, AtListItem } from "taro-ui"  // taro-ui
import './index.css'

const HomePage: React.FC = () => {

  const navs = [
    {
      url:'/pages/reacthooks/index',
      title:'react-hooks'
    },
    {
      url:'/pages/reacthooks/todomvc/index',
      title:'TODO-MVC'
    },
    {
      url:'/pages/virtuallist/index',
      title:'虚拟列表'
    }
  ]
  function navigatorToDemo(navigatorInfo){
    Taro.navigateTo({
      url: navigatorInfo.url
    })
  }
  return (
    <AtList>
      {navs.map((item)=>{
        return <AtListItem key={item.title} title={item.title} arrow={"right"} onClick={()=>navigatorToDemo(item)} />
      })}
    </AtList>
  )
}
export  default  HomePage
