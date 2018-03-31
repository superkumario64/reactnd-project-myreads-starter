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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBook />
        )} />
      </div>
    )
  }
}

export default BooksApp
