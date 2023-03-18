import axios from "axios";

export async function getBooks(params) {
  let baseURL = `https://openlibrary.org/search.json?q=`;
  return await axios.get(`${baseURL}${params.title}`);
}
