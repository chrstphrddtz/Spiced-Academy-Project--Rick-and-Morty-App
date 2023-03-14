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

// cardContainer.append(createCharacterCard());

// function characters() {}

export async function fetchCharacters() {
  try {
    const result = await fetch(
      "https://rickandmortyapi.com/api/character/1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20"
    );
    const myData = await result.json();
    // const charName = myData[0].name;
    // const charStatus = myData[0].status;
    // const charImg = myData[0].image;
    // const charType = myData[0].type;
    // const charOcur = myData[0].episode.length;
    console.log(myData);
    myData.forEach((card) => {
      cardContainer.append(createCharacterCard(card));
    });

    // cardContainer.forEach((card) => {
    //   card.append(createCharacterCard());
    // return myData;
  } catch (error) {
    console.error(error);
  }
}
fetchCharacters();
// States
const maxPage = 1;
const page = 1;
const searchQuery = "";
