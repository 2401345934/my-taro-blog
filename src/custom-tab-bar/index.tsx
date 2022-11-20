import {  useState } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.less'

export default () => {
  const [barState,setBarState] = useState({
    selected: '/pages/index/index',
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: '/pages/index/index',
        selectedIconPath: '../static/tabbar/icon-home-active.png',
        iconPath: '../static/tabbar/icon-home.png',
        text: '首页'
      },
      {
        pagePath: '/pages/user/user',
        selectedIconPath: '../static/tabbar/icon-user-active.png',
        iconPath: '../static/tabbar/icon-user.png',
        text: '个人中心'
      }
    ]
  })
  const switchTab = (url:string) => {
    setBarState({
      ...barState,
      selected: url
    })
    Taro.switchTab({ url })
  }


    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'>
        </CoverView>
        {barState.list.map((item) => {
          return (
            <CoverView key={item.pagePath} className='tab-bar-item' onClick={() =>switchTab(item.pagePath)}>
              <CoverImage src={barState.selected === item.pagePath ? item.selectedIconPath : item.iconPath} />
              {/* <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView> */}
            </CoverView>
          )
        })}
      </CoverView>
    )

}

