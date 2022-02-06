const BASE_URL = `https://api.chucknorris.io/jokes/`;

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? response.json()
    : Promise.reject(new Error("Sorry, we haven't found anything"));
}
export function fetchCategories() {
  return fetchWithErrorHandling(`${BASE_URL}categories`);
}

export function fetchJokesByCategory(category) {
  return fetchWithErrorHandling(`${BASE_URL}random?category=${category}`);
}

export function fetchRandomJokes() {
  return fetchWithErrorHandling(`${BASE_URL}random`);
}
