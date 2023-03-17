import axios from "axios";

export async function getBooks(params) {
    console.log('api params', params)
  let baseURL = `https://openlibrary.org/search.json?q=`;
  console.log(`${baseURL}${params.title}`)
  return await axios.get(
    `${baseURL}${params.title}`,
  );
}
