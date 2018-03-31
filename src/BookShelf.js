import React, { Component } from 'react'
import BookList from './BookList'
import { Link } from 'react-router-dom'

class BookShelf extends Component {
  filterBooks(shelf){
    return this.props.books.filter((book) => (
      book.shelf === shelf
    ))
  }

  render(){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BookList
                  books={this.filterBooks("currentlyReading")}
                  onMoveBook={this.props.onMoveBook}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BookList
                  books={this.filterBooks("wantToRead")}
                  onMoveBook={this.props.onMoveBook}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BookList
                  books={this.filterBooks("read")}
                  onMoveBook={this.props.onMoveBook}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf;