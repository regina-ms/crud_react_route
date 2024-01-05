import React from 'react'
import Button from './Button'

export default function Empty() {
  return (
    <div className='not-found'>
        <p className='empty'>Пост не найден</p>
        <Button link='/'>На главную</Button>
    </div>
  )
}
