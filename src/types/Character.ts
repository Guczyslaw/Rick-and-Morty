export interface Character {
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: "Human" | "Alien" | "unknown";
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}

export interface CharacterData {
  results: Character[];
}
