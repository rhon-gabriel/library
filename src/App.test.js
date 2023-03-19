import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Book finder", () => {
  const initialState = {
    books: {
      results: {docs: [
        {
          key: "/works/OL5735363W",
          cover_i: 12646537,
          author_name: ["Suzanne Collins"],
          author_key: ['OL1394359A'],
          publish_year: [2023],
          ratings_average: 4.0445204,
          title: "The Hunger Games",
        },
      ]
    },
      loading: false,
      error: false,
    },
  };

  const mockStore = configureStore();
  let store;

  it('Shows "bookFinder" and "favorites" header', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText("bookFinder")).not.toBeNull();
    expect(screen.getByText("favorites")).not.toBeNull();
  });

  it('Search for a book', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputBook = screen.getByTestId("search-book-input");
    const searchButton = screen.getByTestId("search-book-button");
    fireEvent.change(inputBook, { target: { value: "games" } });
    fireEvent.click(searchButton);
  });

  it('Shows a list of books', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const bookTitle = screen.getByTestId("book-title");
    const bookAuthor = screen.getByTestId("book-author");
    expect(bookTitle).toHaveTextContent('The Hunger Games')
    expect(bookAuthor).toHaveTextContent('Suzanne Collins')
  });

  it('Shows a modal and add to favorites button', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const bookCard = screen.getByTestId("book-card");
    fireEvent.click(bookCard);
    const bookModal = screen.getByTestId("book-modal");
    const bookFavoritesButton = screen.getByTestId('favorite-button')
    expect(bookModal).toBeInTheDocument()
    expect(bookFavoritesButton).toBeInTheDocument()
  });

  it('Goes to favorites pages', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const favorites = screen.getByTestId("favorites");
    fireEvent.click(favorites);
    expect(screen.getByText("No favorited books")).not.toBeNull();
  });
});
