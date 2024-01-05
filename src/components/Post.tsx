import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import PostView from './PostView';
import Empty from './Empty';
import Button from './Button';
import PostData from './PostDetails';
import { postItem } from '../types';



export default function Post() {
  const [post, setPost] = useState<postItem>();
  const [isNotFound, setIsNotFound] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { id } = useParams();

  const getPost = () => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then(res => res.json())
      .then(data => data.post ? setPost(data.post) : setIsNotFound(true))
  }

  useEffect(getPost, [isEdit]);

  useEffect(() => {
    if (inputRef.current && post) inputRef.current.value = post.content
  }, [isEdit])

  const handlerEditClick = () => {
    setIsEdit(true)
  }

  const handleCloseBtn = () => {
    setIsEdit(false)
  }

  const handlerSaveClick = () => {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        content: inputRef.current?.value
      })
    }).then(() => {
      setIsEdit(false)
    })
  }

  const handlerDeleteClick = () => {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setIsEdit(false)
    })
  }

  return (
    isNotFound ?
      <Empty /> :

      isEdit && post ?
        <><p>Редактировать публикацию</p>
          <PostData handleCloseBtn={handleCloseBtn} inputRef={inputRef} />
          <Button handler={handlerSaveClick}>Сохранить</Button></> :

        post ?
          <><PostView {...post} />
            <div className='btns'>
              <Button handler={handlerEditClick}>Изменить</Button>
              <Button link='/'>На главную</Button>
              <Button handler={handlerDeleteClick} link='/'>Удалить</Button>
            </div></>
          : null
  )
}
