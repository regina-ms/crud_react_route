import React from 'react'
import { PostDataProps } from '../types'

export default function PostDetails({ handleCloseBtn, inputRef } : PostDataProps) {
    return (
        <div className='post-details'>
            <button className='close' onClick={handleCloseBtn}>X</button>
            <textarea ref={inputRef} rows={5}/>
        </div>

    )
}
