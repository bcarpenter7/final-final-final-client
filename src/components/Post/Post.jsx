
import './Post.css'
import '../../index.css'
import { useState } from 'react'
import PostDetail from '../PostDetail/PostDetail' 

export default function Post({ posts, currentArticle, setCurrentArticle, handleDelete, handleEdit, setPage}) {
    // const [currentArticle, setCurrentArticle] = useState("64c3e10928aa2fe7e8476947")
    function handleChange(e){
        console.log(e.target.name)
        setCurrentArticle(e.target.name)
    }


    if(currentArticle === null){
    return (
        <>
        <div className="homeDiv">
        <h1 className='title1'>All Posts</h1>
        { posts.map((p, idx) => (

            <>
            <div className="blogCard">
                <div>
                    <img className="img" src={p.img} /> 
                </div>
                <div>
                    <h4>{p.author}  <span className="date">{
               
                    p.updatedAt.slice(0, 10) ? p.createdAt.slice(0, 10) : p.updatedAt.slice(0, 10)
                    
                    }</span></h4>
                    <h1>{p.title}</h1>
                    <h3 className="previewText">{p.content.slice(0, p.content.indexOf('.') + 1)}</h3>
                    <button name={p._id} onClick={handleChange}>Click to Read More</button>
                 
                   
                </div>
               
            </div>

            </>
    ))}
    </div>
       </>
    )
        } else {
            const article = posts.find(p => p._id == currentArticle)
            return (
            <>      
               <PostDetail article={article} handleEdit={handleEdit} setPage={setPage} handleDelete={handleDelete} setCurrentArticle={setCurrentArticle} />
            </>
            )
        }
}

