import React, { useState } from "react";
import { observer, inject } from "mobx-react";


const App = inject(['bookStore'])(observer(({ bookStore }) => {
  const [newBook, setNewBook] = useState('');

  const addNewBook = () => {
    if (!newBook) return;
    bookStore.addBook(newBook);
    setNewBook("");
  }
  const deleteBook = (index) => {
    bookStore.removeBook(index)
  }



  return (
    <div>
      <ol>
        {bookStore.books.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => deleteBook(index)}>delete</button>
          </li>
        ))}
      </ol>
      <input type="text" value={newBook} onChange={(e) => setNewBook(e.target.value)} />
      <button onClick={addNewBook}>add</button>
    </div>
  )
}));

export default App;