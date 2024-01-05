import { Character } from "../types/Character";

const statusColor = {
  Alive: "green",
  Dead: "red",
  unknown: "yellow",
};

const statusTemplate = (status: "Alive" | "Dead" | "unknown") => `
  <div class="circle ${statusColor[status]}"></div>
  ${status}
`;

const characterTemplate = ({
  image,
  name,
  species,
  status,
  gender,
  location,
  origin,
}: Character) => `
    <div class="flex">
      <img class="avatar" height="280" src="${image}" alt="">
      <div>
        <h3>${name}</h3>
        <ul>
          <li>${statusTemplate(status)}</li>
          <li>Species: <strong>${species}</strong></li>
          <li>Gender: <strong>${gender}</strong></li>
          <li>Location: <strong>${location.name}</strong></li>
          <li>Origin: <strong>${origin.name}</strong></li>
        </ul>
      </div>
    </div>
  `;

export function buildCharacter(character: Character) {
  const characterBlock = document.createElement("div");
  characterBlock.className = "character";
  characterBlock.innerHTML = characterTemplate(character);

  return characterBlock;
}
