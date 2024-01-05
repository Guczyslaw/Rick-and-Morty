import { CharacterData } from "../types/Character";

export async function fetchCharacterData() {
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const data: CharacterData = await response.json();

  return data;
}
