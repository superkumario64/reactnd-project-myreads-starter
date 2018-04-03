import React from 'react'
import ReactDOM from 'react-dom'
import Book from "./../components/Book";

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
 **/

it('renders without crashing', () => {
  const book = {
    id: "automated-test-are-cool",
    imageLinks: {
      thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    shelf: "read",
    title: "Needful Things",
    authors: "Stephen King"
  }
  const div = document.createElement('div')
  ReactDOM.render((
    <Book
      book={book}
      key={book.id}
      onMoveBook={doNothing => doNothing}
    />
  ), div)

  expect(div.getElementsByClassName("book-title")[0].innerHTML).toBe("Needful Things")
  expect(div.getElementsByClassName("book-authors")[0].innerHTML).toBe("Stephen King")
  expect(div.getElementsByClassName("book-shelf-changer")[0].childNodes[0].value).toBe("read")

})