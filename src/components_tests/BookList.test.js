import React from 'react'
import ReactDOM from 'react-dom'
import BookList from "./../components/BookList";

it('renders without crashing', () => {
  const books = [
    {
      id: "automated-test-are-cool1",
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      shelf: "read",
      title: "Needful Things1",
      authors: "Stephen King1"
    },
    {
      id: "automated-test-are-cool2",
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      shelf: "read",
      title: "Needful Things2",
      authors: "Stephen King2"
    },
    {
      id: "automated-test-are-cool3",
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      shelf: "read",
      title: "Needful Things2",
      authors: "Stephen King2"
    }
  ]
  const div = document.createElement('div')
  ReactDOM.render((
    <BookList
      books={books}
      onMoveBook={doNothing => doNothing}
    />
  ), div)
  expect(div.childNodes[0].className).toBe("books-grid")
  expect(div.childNodes[0].getElementsByTagName("li").length).toBe(3)
})