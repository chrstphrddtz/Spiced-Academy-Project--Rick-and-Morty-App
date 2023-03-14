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

export async function fetchCharacters() {
  try {
    const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const myData = await result.json();

    console.log(myData);

    cardContainer.innerHTML = "";
    myData.results.forEach((card) => {
      cardContainer.append(createCharacterCard(card));
      card;
    });
  } catch (error) {
    console.error(error);
  }
}
// States
const maxPage = 42;
let page = 1;
let searchQuery = "";

fetchCharacters();

// Nav-Pagination

prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(page > 1) {
    --page
    fetchCharacters(page)
  }
  pagination.textContent = `${page} / ${maxPage}` 

})

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(page < maxPage) {
    ++page
    fetchCharacters(page)
  }
  pagination.textContent = `${page} / ${maxPage}`   
})

// Nav-Pagination