import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import Layout from './components/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path='posts' element={<Navigate to="/" />}/>
        <Route path="posts/new" element={<CreatePost />} />
        <Route path="posts/:id" element={<Post />} />
        </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
