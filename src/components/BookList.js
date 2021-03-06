import React, { Component } from 'react'
import Book from "./Book";

class BookList extends Component {
  render(){
    if (!Array.isArray(this.props.books)){
      return (
        <ol className="books-grid">
        </ol>
      )
    }
    return (
      <ol className="books-grid">
        {
          this.props.books.map((book) => (
          <Book
            book={book}
            key={book.id}
            onMoveBook={this.props.onMoveBook}
          />
        ))}
      </ol>
    )
  }
}

export default BookList