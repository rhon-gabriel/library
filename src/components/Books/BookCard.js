import React from "react";

const BookCard = ({ onClick, book }) => {
  return (
    <div
      className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5 cursor-pointer"
      key={book.key}
      onClick={onClick}
      data-testid="book-card"
    >
      <article className="overflow-hidden rounded-lg shadow-lg">
        <img
          alt="Book Cover"
          className="rounded-lg h-40 mx-auto"
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
        />

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg truncate" data-testid="book-title">
            {book.title}
          </h1>
        </header>

        <footer className="flex items-center leading-none p-2 md:p-4">
          {book.author_key && (
            <img
              alt="Placeholder"
              className="block rounded-full w-8 h-8"
              src={`https://covers.openlibrary.org/a/olid/${book.author_key[0]}.jpg`}
            />
          )}
          {book.author_name && (
            <p className="ml-2 text-sm" data-testid="book-author">
              {book.author_name[0]}
            </p>
          )}
        </footer>
      </article>
    </div>
  );
};

export default BookCard;
