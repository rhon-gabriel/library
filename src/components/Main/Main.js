import React from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Books from "../Books/Books"

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex justify-center mt-5">

      <Search />
      </div>
      <div>
        <Books />
      </div>
    </div>
  );
};

export default Main;
