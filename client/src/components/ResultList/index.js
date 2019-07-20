import React from "react";

function ResultList(props) {
  return (
    <ul>
      {props.results.map(result => (
        <li key={result.id}>
          <div className="col s12">
            <div className="card horizontal">
              <div className="card-image">
                <img
                  alt={result.volumeInfo.title}
                  src={
                    "imageLinks" in result.volumeInfo
                      ? result.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4>{result.volumeInfo.title}</h4>
                  <h6>By: </h6>
                  {"authors" in result.volumeInfo
                    ? result.volumeInfo.authors.map(author => <h6>{author}</h6>)
                    : ""}
                  <blockquote>
                    <p>{result.volumeInfo.description}</p>
                  </blockquote>
                  <button
                    onClick={() => props.handleSave(result)}
                    className="waves-effect waves-light green btn"
                  >
                    Save Book
                  </button>
                </div>
                <div className="card-action">
                  <a href={result.volumeInfo.previewLink}>
                    Check this book out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
