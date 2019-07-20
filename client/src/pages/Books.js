import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row } from "../components/Grid";
import ResultList from "../components/ResultList/index";
import SearchForm from "../components/SearchForm/index";

class Books extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchBooks("puppies");
  }

  searchBooks = searchTerm => {
    API.search(searchTerm)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  // loadBooks = () => {
  //   API.onLoad()
  //     .then(res => this.setState({ results: res.data.items }))
  //     .catch(err => console.log(err));
  // };

  handleSave = book => {
    console.log(book);
    API.saveBook({
      image: book.volumeInfo.imageLinks.thumbnail,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors.join(", "),
      synopsis: book.volumeInfo.description,
      link: book.volumeInfo.previewLink
    })
      .then(res => this.searchBooks(this.state.search))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div className="row">
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <br />
              <br />
              <h1>Book Finder</h1>
            </Jumbotron>
          </Col>
        </Row>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} handleSave={this.handleSave} />
      </div>
    );
  }
}

export default Books;
