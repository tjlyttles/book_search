import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function SearchForm(props) {
  return (
    <div
      className="row"
      style={{
        padding: "40px 30px",
        color: "white"
      }}
    >
      <form className="col s6">
        <div className="row">
          <div className="input-field">
            <label htmlFor="search">Search:</label>
            <input
              style={{
                color: "white"
              }}
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for a book"
              id="search"
            />
            <button
              type="submit"
              onClick={props.handleFormSubmit}
              className="waves-effect waves-light btn"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
