import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import axios from 'axios'
import Post from '../../components/Post/Post'
import PostForm from '../../components/PostForm/PostForm'
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import './App.css';


export default function App() {
  const [posts, setPosts] = useState([])
  const [currentArticle, setCurrentArticle] = useState(null)
  const [page, setPage] = useState(null)

  async function getPosts() {
    try {
      const res = await axios.get('https://techblog.fly.dev/api/posts')
      setPosts(res.data)
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }


  const handleCreate = (createdPost) => {
    axios.post('https://techblog.fly.dev/api/posts', createdPost)
      .then((response) => {
        setPosts([...posts, response.data])
      })
  }


  const handleEdit = (editedPost) => {
    axios.put('https://techblog.fly.dev/api/posts/' + editedPost._id, editedPost)
      .then((response) => {
        let newPost = posts.map((post) => {
          return post._id !== editedPost._id ? post : editedPost
        })
        setPosts(newPost)
      })
  }

  const handleDelete = (deletedPost) => {
    axios.delete('https://techblog.fly.dev/api/posts/' + deletedPost)
      .then((response) => {
        let newPosts = posts.filter((post) => {
          return post._id !== deletedPost
        })
        setPosts(newPosts)
      })
  }


  useEffect(() => {
    getPosts()
  }, [])



  if (page === null || page === 'null') {
    return (
      <>
        <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle} />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage setPage={setPage} posts={posts} setCurrentArticle={setCurrentArticle} />
            } />
        </Routes>
      </>
    )
  }

  if (page === 'index' || page === 'indexUpdate') {
    return (
      <>
        <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle} />
        {/* <h1>All Posts</h1> */}
        <Routes>
          <Route
            path="/"
            element={
              <Post
                posts={posts}
                currentArticle={currentArticle}
                setCurrentArticle={setCurrentArticle}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                setPage={setPage}
              />
            } />
        </Routes>
      </>

    )
  }

  if (page === 'postform') {
    return (
      <>
        <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle} />
        {/* <h1>All Posts</h1> */}
        <Routes>
          <Route
            path="/"
            element={
              <PostForm handleCreate={handleCreate} setPage={setPage} />
            } />
        </Routes>
      </>

    )
  }











}
