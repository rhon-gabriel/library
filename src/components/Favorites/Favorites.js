import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import BookCard from "../Books/BookCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const getLocalFavorites = () => {
    let localFavorites = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(localFavorites);
  };

  useEffect(() => {
    getLocalFavorites();
  }, []);

  return (
    <div>
      <Header />
      <div className="container my-12 mx-auto px-4 md:px-12">
        {favorites ? (
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {favorites.map((book) => {
              return <BookCard book={book} />;
            })}
          </div>
        ) : (
          <p>No favorited books</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
