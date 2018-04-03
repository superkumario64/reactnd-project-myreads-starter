import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './../BooksAPI'
import BookList from './BookList'

class SearchBook extends Component {
  state = {
    query: '',
    results: []
  }

  updateQuery = (query) => {
    let trimmed_query = query.trim()
    this.setState(() => ({
      query: trimmed_query
    }))
    BooksAPI.search(trimmed_query).then((books) => {
      if (Array.isArray(books)) {
        books.map((book) => {
          let ownBook = this.props.books.filter((ownedBook) => {
            return ownedBook.id === book.id
          })
          if (Array.isArray(ownBook) && ownBook.length > 0) {
            return book.shelf = ownBook[0].shelf;
          } else {
            return book.shelf = "none"
          }
        })
        this.setState(() => ({
          results: books
        }))
      } else {
        this.setState(() => ({
          results: []
        }))
      }
    });
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => (this.updateQuery(event.target.value))}
            />

          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={this.state.results}
            onMoveBook={this.props.onMoveBook}
          />
        </div>
      </div>
    )
  }
}

export default SearchBook