import { getAllPokes } from "./requests.js";

export const render = async () => {
  const listContainer = document.querySelector(".list__container");

  listContainer.innerHTML = "";

    const allPokes = await getAllPokes();

    allPokes.forEach((element) => {
      const card = createCard(element);

      listContainer.appendChild(card);
    });
  }

export const createCard = (element) => {
  const listCard = document.createElement("li");
  const img = document.createElement("img");
  const span = document.createElement("span");

  listCard.classList.add("list__card");
  const idPoke = element.url.slice(34, -1);
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPoke}.png`;
  img.alt = element.name;
  span.innerHTML = element.name;

  listCard.append(img, span);

  return listCard;
};
