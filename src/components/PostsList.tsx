import React, { useEffect, useState } from 'react'
import PostView from './PostView';
import Button from './Button';
import { Link } from 'react-router-dom';
import { postItem } from '../types';


export default function PostsList() {
    const [posts, setPosts] = useState<postItem[]>([]);

    const getPosts = () => {
        fetch('http://localhost:7070/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }
    useEffect(getPosts, []);

    return (
        <>
            <div className='white-section'>
                <Button link='posts/new'>Создать пост</Button>
            </div>
            <ul className='posts-list'>
                {
                    posts.length
                        ? posts.map((post) => <Link key={post.id} to={`/posts/${post.id}`}><PostView {...post} /></Link>)
                        : <p className='empty'>Создайте свой первый пост</p>
                }
            </ul>
        </>
    )
}
