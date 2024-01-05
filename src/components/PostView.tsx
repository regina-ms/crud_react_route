import React from 'react'
import UserData from './UserData'
import { postItem } from '../types'

export default function PostView({ id, content, created }: postItem) {
  return (
    <li className='post'>
      <UserData date={created} />
      <p className='post__content'>{content}</p>
    </li>
  )
}
