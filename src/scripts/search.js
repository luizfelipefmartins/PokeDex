import { getByName } from "./requests.js";

export const searchPoke = async () => {
  const input = document.querySelector(".input__text");
  const btn = document.querySelector(".btn__search");
  const listContainer = document.querySelector('.list__container')

  btn.addEventListener("click", async (event) => {
    event.preventDefault()
    const pokemon = await getByName(input.value.toLowerCase());

    listContainer.innerHTML = ''

    const card = await createCardSearch(pokemon)

    listContainer.appendChild(card)
  });
}

const createCardSearch = async (pokemon) => {
    const listCard = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
  
    listCard.classList.add("list__card");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    img.alt = pokemon.name
    span.innerHTML = pokemon.name
  
    listCard.append(img, span);
  
    return listCard;
}
