import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
// import Add from './components/Add'
// import Edit from './components/Edit'
import PostForm from '../../components/PostForm/PostForm'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import PostDetail from '../../components/PostDetail/PostDetail'



export default function App() {
  const [posts, setPosts] = useState([])
  const [currentArticle, setCurrentArticle] = useState(null)
  const [page, setPage] = useState(null)

  // const getPosts = () => {
  //   axios.get('http://localhost:3000/posts')
  //     .then((response) => setPosts(response.data), (err) => console.log(err))
  //     .catch((error) => console.log(error))
  // }

  async function getPosts(){
    try {
      const res = await axios.get('http://techblog.fly.dev/api/posts')
      setPosts(res.data)
      console.log(res.data)
    } catch (err){
      console.error(err)
    }
  }


  const handleCreate = (createdPost) => {
    axios.post('http://techblog.fly.dev/api/posts', createdPost)
      .then((response) => {
        setPosts([...posts, response.data])
      })
  }


  const handleEdit = (editedPost) => {
    axios.put('http://techblog.fly.dev/api/posts/' + editedPost._id, editedPost)
      .then((response) => {
        let newPost = posts.map((post) => {
          return post._id !== editedPost._id ? post : editedPost
        })
        setPosts(newPost)
      })
  }

  const handleDelete = (deletedPost) => {
    axios.delete('http://techblog.fly.dev/api/posts/' + deletedPost)
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


 
      if(page === null || page === "null"){
        return (
          <>
          <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle}/>
         
              <Routes>
                <Route 
                    path="/" 
                    element={
                      <HomePage setPage={setPage}/>
                    }>

                </Route>
              </Routes>
          </>
        )
      }

      if(page === "index" || page === "indexUpdate"){
        return (
            <>
              <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle}/>
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
                    }>

                </Route>
              </Routes>
            </>

        )
      }

      if(page === "postform"){
        return (
            <>
              <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle}/>
              {/* <h1>All Posts</h1> */}
              <Routes>
                <Route 
                    path="/" 
                    element={
                      <PostForm handleCreate={handleCreate} setPage={setPage}/>
                    }>

                </Route>
              </Routes>
            </>

        )
      }

      // if(page === "detail"){
      //   return (
      //       <>
      //         <NavBar setPage={setPage}/>
      //         {/* <h1>All Posts</h1> */}
      //         <Routes>
      //           <Route 
      //               path="/" 
      //               element={
      //                 <PostDetail id={id}/>
      //               }>

      //           </Route>
      //         </Routes>
      //       </>

      //   )
      // }
    
      

         
         


      
      

}
