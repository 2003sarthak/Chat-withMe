import React from 'react'
import './list.css'
import UserInfo from './userInfo/userInfo'
import ChatList from './chatList/ChatList'

export default function List() {
  return (
    <div className='list'>
        <UserInfo/>
        <ChatList/>
    </div>
  )
}
