import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { UserDataProps } from '../types'

export default function UserData({ date }: UserDataProps) {
    return (
        <div className='user'>
            <img src='https://i.pravatar.cc/50' alt='avatar' className='avatar' />
            <div className='user__info'>
                <p className='name'>Name</p>
                <p className='created'>{moment(date).fromNow(true)}</p>
            </div>
        </div>
    )
}
