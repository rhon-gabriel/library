import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import BookCard from "./BookCard";

const Books = () => {
  const { results, error } = useSelector((state) => state.books);
  const [selectedBook, setSelectedBook] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      {error ? (
        <p>Something went wrong...</p>
      ) : (
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {results?.docs?.map((book) => {
            return (
              <BookCard
                onClick={() => {
                  setShowModal(true);
                  setSelectedBook(book);
                }}
                book={book}
              />
            );
          })}
          {showModal && (
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              selectedBook={selectedBook}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Books;
