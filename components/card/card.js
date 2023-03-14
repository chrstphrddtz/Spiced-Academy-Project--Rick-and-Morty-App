// import { fetchCharacters } from "../../index.js";

export function createCharacterCard(cardItem) {
  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = `
        <div class="card__image-container">
            <img
                class="card__image"
                src="${cardItem.image}"
                alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
        </div>
        <div class="card__content">
            <h2 class="card__title">${cardItem.name}</h2>
            <dl class="card__info">
                <dt class="card__info-title">Status</dt>
                <dd class="card__info-description">${cardItem.status}</dd>
                <dt class="card__info-title">Type</dt>
                <dd class="card__info-description">${cardItem.type}</dd>
                <dt class="card__info-title">Occurrences</dt>
                <dd class="card__info-description">${cardItem.episode.length}</dd>
            </dl>
        </div>
    `;
    return li;
}
