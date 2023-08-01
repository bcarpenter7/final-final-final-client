import './NavBar.css'

export default function NavBar({ setPage, setCurrentArticle }){

   function handleChange(e){
        setCurrentArticle(null)
        setPage(e.target.name)
    }

    return (
        <div className="navDiv">
            <div className="homeBtnDiv">
                <button name="null" onClick={handleChange}>Home</button>
            </div>
            <div className="buttonDiv">
                <button name="index" onClick={handleChange}>See All Articles</button>
                &nbsp; | &nbsp;
                <button name="postform" onClick={handleChange}>Add Article</button>
            </div>
        </div>
    )
}