import "./HomePage.css";
import "../../index.css";

export default function HomePage({ setPage, posts, setCurrentArticle }) {
  function handleClick(e) {
    setPage(e.target.name);
  }

  function handleChange(e) {
    console.log(e.target.name);
    setCurrentArticle(e.target.name);
    setPage("index");
  }

  // Dummy news data
  const newsData = posts.map((e, idx) => e).slice(0, 7);

  return (
    <>
      <div className="homeDiv">
        <h1 className="title">Tech Blog</h1>
        <h2 className="trending">View Our Trending Articles</h2>{" "}
        <div className="btt">
          <button name="index" onClick={handleClick}>
            Click here to see all articles
          </button>
          <button name="postForm" onClick={handleClick}>
            Click here to add an article
          </button>
        </div>
      </div>

      {/* News Section */}
      <div className="newsSection">
        <div className="slider">
          {newsData.map((news, index) => (
            <button name={news._id} className="newsItem" onClick={handleChange}>
              <img className="imageNews" src={news.img} />
              <p>{news.title.slice(0, 33)}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
