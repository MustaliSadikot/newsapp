import React from "react";

function Card(props) {
  const mode = props.mode;
  const news = props.news;
  return (
    <>
      <div className="col">
        <div
          className={`card mx-auto shadow-lg rounded bg-${
            mode ? "light" : "dark"
          } text-${mode ? "dark" : "light"}`}
          style={{ maxWidth: "30rem" }}
        >
          <span
            className={`badge text-bg-${
              mode ? "danger" : "warning"
            } end-0 fs-6`}
            style={{ position: "absolute" }}
          >
            {news.source.name}
          </span>
          <img
            src={
              news.urlToImage ||
              "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
            }
            className="card-img-top img-fluid"
            alt="..."
            style={{ maxHeight: "17rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <h6 className="card-text">By :- {news.author}</h6>
            <h6 className="card-text">PublishedAt :- {news.publishedAt}</h6>
            <a
              href={news.url}
              className={`btn btn-${mode ? "primary" : "warning"} mt-2`}
            >
              <i className="bi bi-link"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
