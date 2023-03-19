import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const listHeader = ["bookFinder", "favorites"];

  return (
    <div className="py-4">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-between">
          {listHeader.map((item) => {
            return (
              <Link to={`/${item}`} key={item}>
                <div className="px-4" data-testid={item}>
                  <p className="text-gray-700 capitalize">{item}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
