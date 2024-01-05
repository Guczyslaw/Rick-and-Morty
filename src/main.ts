import { fetchCharacterData } from "./services/fetchCharacterData";
import "./style.css";
import { buildCharacter } from "./templates/characterTemplate";
import { buildContainer } from "./templates/containerTemplate";
import { buildHeader } from "./templates/headerTemplate";

async function buildLayout() {
  const allCharacters = await fetchCharacterData();
  buildHeader();
  const container = buildContainer();

  allCharacters.results.forEach((character) => {
    const characterBlock = buildCharacter(character);
    container.appendChild(characterBlock);
  });
}

buildLayout();
