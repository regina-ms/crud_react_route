import React, { FormEvent, useEffect, useRef } from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import PostData from './PostDetails';

export default function CreatePost() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const pendingPost = localStorage.getItem('post');
    if (pendingPost && inputRef.current) inputRef.current.value = pendingPost;
  }, []);

  const handlePublishClick = (e: FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 0,
        content: inputRef.current?.value
      })
    }).then(() => {
      localStorage.removeItem('post');
      navigate('/');
    })
  }

  const handleCloseBtn = () => {
    if (inputRef?.current?.value) {
      localStorage.setItem('post', inputRef.current?.value);
    } else {
      localStorage.removeItem('post');
    }
    navigate('/');
  }

  return (
    <>
      <PostData handleCloseBtn={handleCloseBtn} inputRef={inputRef} />
      <Button handler={handlePublishClick}>Опубликовать</Button>
    </>
  )
}
