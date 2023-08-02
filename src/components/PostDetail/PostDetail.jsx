import { useState } from "react";
import EditPage from "../../EditPage/EditPage";
import "./PostDetail.css";

export default function PostDetail({
  article,
  handleEdit,
  setPage,
  deletePost,
  handleDelete,
  setCurrentArticle,
}) {
  console.log(article.content);

  const [editMode, setEditMode] = useState(false);

  function editPost(e) {
    setEditMode(true);
  }

  function deletePost(e) {
    if (window.confirm("Are you sure you want to delete this post?")) {
      handleDelete(e.target.name);
      setCurrentArticle(null);
      setEditMode(false);
      setPage("index");
    }
  }

  if (editMode === true) {
    return (
      <EditPage
        article={article}
        handleEdit={handleEdit}
        setPage={setPage}
        setEditMode={setEditMode}
        setCurrentArticle={setCurrentArticle}
      />
    );
  } else {
    return (
      <>
        <div className="containerDetail">
          <div>
            <h1 className="titleDetail"> {article.title} </h1>
          </div>

          <h3 className="authorNameDetail"> {article.author} </h3>
          <h3 className="authorCreatedDetail">
            {" "}
            Published{" "}
            {article.updatedAt.slice(0, 10)
              ? article.createdAt.slice(0, 10)
              : article.updatedAt.slice(0, 10)}
          </h3>

          <div>
            <img className="imgDetailDetail" src={article.img} />
          </div>
          <div>
            <br />
            <br />
            <p className="articleTextDetail">{article.content}</p>
            <button name={article._id} onClick={editPost}>
              {" "}
              Click to edit
            </button>
            <button name={article._id} onClick={deletePost}>
              Click to delete
            </button>
            <br />
            <br />
          </div>
        </div>
      </>
    );
  }
}
