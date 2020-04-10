export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonWithData {
  abilities: PokemonAbility[];
  forms: PokemonForm[];
  height: number;
  name: string;
  weight: number;
}