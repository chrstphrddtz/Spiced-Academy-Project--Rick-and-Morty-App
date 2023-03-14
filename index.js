import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

export async function fetchCharacters(page) {
  page = page || 1
  try {
    const result = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );
    const myData = await result.json();
    window.maxPage = myData.info.pages
    cardContainer.innerHTML = "";
    myData.results.forEach((card) => {
      cardContainer.append(createCharacterCard(card));
      card;
    });
    pagination.textContent = `${page} / ${myData.info.pages}`;
  } catch (error) {
    console.error(error);
  }
}
// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

fetchCharacters();

// Nav-Pagination

prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (page > 1) {
    --page;
    fetchCharacters(page);
  }
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (page < window.maxPage) {
    ++page;
    fetchCharacters(page);
  }
});

// Nav-Pagination

// Search-Bar

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1
  const formElements = e.target.elements;
  searchQuery = formElements.query.value;
  fetchCharacters();
});
