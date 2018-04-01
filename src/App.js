import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState(() => ({
        books
      }))
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      let newState = this.state;
      let bookIndex = newState.books.findIndex((fbook) => {
        return fbook.id === book.id
      });
      if(bookIndex >= 0){
        newState.books[bookIndex].shelf = shelf
      } else {
        book.shelf = shelf;
        newState.books.push(book);
      }
      this.setState(() => ({
        books: newState.books
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            onMoveBook={this.moveBook}
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <SearchBook
            books={this.state.books}
            onMoveBook={(book, shelf) => {
              this.moveBook(book, shelf)
              history.push('/')
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
