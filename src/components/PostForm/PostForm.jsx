import { useState } from 'react'
import '../../index.css'
import './PostForm.css'


export default function PostForm({ handleCreate, setPage }){
    const [tempPost, setTempPost] = useState({
        author: '',
        title: '',
        content: '',
        likes: 0,
        img: ''
    })

    function handleChange(e){
        setTempPost({...tempPost, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setPage('index')
        handleCreate(tempPost)
    }

    return(
        <>
            <div className="addDiv">
            <h1 className="articleHeader">Add Article</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Enter Author</label>
                    < br/>
                    <input 
                    value={tempPost.author} 
                    name="author"
                    onChange={handleChange}
                    />
                </div>
                
                <div>
                    <label>Enter Title</label>
                    < br/>
                    <input 
                    value={tempPost.title} 
                    name="title"
                    onChange={e => handleChange(e)}
                    />
                </div>
               
                <div>
                    <label>Enter Content</label>
                    <textarea 
                    className="textArea"
                    value={tempPost.content} 
                    name="content"
                    onChange={e => handleChange(e)}
                    />

                </div>
               
                <div>
                    <label>Enter Img Url</label>
                    < br/>
                    < br/>
                    <input 
                    value={tempPost.img} 
                    name="img"
                    onChange={e => handleChange(e)}
                    />

                </div>
               
                <button type="submit">Enter</button>
            </form>

            </div>
            
        </>


    )
}