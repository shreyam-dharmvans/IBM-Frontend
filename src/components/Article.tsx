import './Article.css'

function Article(props: ArticleProps) {
  return (
    <>
      <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
        <div className="card h-100 p-2">
          <img src={props.urlToImage} className="card-img-top" alt="" />
          <div className="card-body px-2">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article
