import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row">
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <br />
              <br />
              <h1>Books On My List</h1>
            </Jumbotron>
          </Col>
        </Row>
        {this.state.books.length ? (
          <ul>
            {this.state.books.map(result => (
              <li key={result._id}>
                <div className="col s12">
                  <div className="card horizontal">
                    <div className="card-image">
                      <img alt={result.title} src={result.image} />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <h4>{result.title}</h4>
                        <h6>
                          {" "}
                          By:
                          {result.author}
                        </h6>
                        <blockquote>
                          <p>{result.synopsis}</p>
                          <br />
                          <p>Saved on: {result.date}</p>
                        </blockquote>
                        <button
                          onClick={() => this.deleteBook(result._id)}
                          className="waves-effect waves-light green btn"
                        >
                          Remove From List
                        </button>
                      </div>
                      <div className="card-action">
                        <a href={result.link}>Check this book out</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No Saved Books</h3>
        )}

        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail;
