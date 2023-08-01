import { useState } from 'react'


export default function EditPost({ article, handleEdit, setPage, setEditMode}){
    
    const [tempPost, setTempPost] = useState({
        author: article.author,
        title: article.title,
        content: article.content,
        img: article.img,
        likes: article.likes,
        _id: article._id,
        createdAt : article.createdAt,
        updatedAt : article.updatedAt
    })
   
    function handleChange(e){
        setTempPost({...tempPost, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(tempPost)
        setEditMode(false)
        setPage("index")
        handleEdit(tempPost)
        
    }

    return(
        <>
            <div className="addDiv">
            <h1 className="articleHeader">Add Article</h1>
            <form className="form" onSubmit={handleSubmit}>
              
                <div>
                    <label>Enter Author</label>
                    <input 
                    value={tempPost.author} 
                    name="author"
                    onChange={handleChange}
                    />
                </div>
                
                <div>
                    <label>Enter Title</label>
                    <input 
                    value={tempPost.title} 
                    name="title"
                    onChange={e => handleChange(e)}
                    />
                </div>
               
                <div>
                    <label>Enter Content</label>
                    <textarea
                    value={tempPost.content} 
                    className="textArea"
                    name="content"
                    onChange={e => handleChange(e)}
                    />

                </div>
               
                <div>
                    <label>Enter Img Url</label>
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