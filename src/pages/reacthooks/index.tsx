import React, { useState, useEffect  } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {AtInput, AtList, AtListItem} from 'taro-ui'
import './index.css'
import userDebounce  from "../../hooks/userDebounce";

interface Article {
  title:string,
  url:string,
  objectID:number
}
const Home: React.FC = () => {
  const [articleList, setArticleList] = useState<Article[]>([])
  const [query,setQuery] = useState('react')
  // const [isSearchIng,setIsSearching] = useState<boolean>(false)
  const debouncedQuery = userDebounce(query,500)


  async  function  getArticles(searchTerm){
    const result = await Taro.request({
      url: 'https://hn.algolia.com/api/v1/search',
      data: {
        query: searchTerm
      },
      method:'GET'
    })
    setArticleList(result.data.hits)
  }

  // 同于 componentDidMount ，需要加上 [] 做为依赖 useEffect 可以写多次
  useEffect(()=>{
    console.log('component-lifecycle:componentDidMound')
  },[])
  useEffect(()=>{
    if(debouncedQuery){
        // setIsSearching(true)
        getArticles(debouncedQuery)
        // setIsSearching(false);
    }
  },[debouncedQuery])

  return (
    <View>
      <AtInput name='query' type='text' placeholder='输入需要查询的关键字' value={query} onChange={(value:string)=>setQuery(value)}></AtInput>
      <AtList>
        {articleList.map((item)=>{
          return item.title !==null && item.title!==''? <AtListItem key={item.objectID} title={item.title} arrow='right'  />:""
        })}
      </AtList>
    </View>
  )
}

export  default  Home
