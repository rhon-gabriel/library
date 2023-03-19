import React from 'react'

const BookCard = ({onClick, book}) => {
    return (
        <div
        className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5 cursor-pointer"
        key={book.key}
        onClick={onClick}
      >
        <article className="overflow-hidden rounded-lg shadow-lg">
          <img
            alt="Book Cover"
            className="rounded-lg h-40 mx-auto"
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
          />

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg truncate">{book.title}</h1>
          </header>

          <footer className="flex items-center leading-none p-2 md:p-4">
            <img
              alt="Placeholder"
              className="block rounded-full w-8 h-8"
              src={`https://covers.openlibrary.org/a/olid/${book.author_key[0]}.jpg`}
            />
            <p className="ml-2 text-sm">{book.author_name[0]}</p>
          </footer>
        </article>
      </div>
    )
}

export default BookCard