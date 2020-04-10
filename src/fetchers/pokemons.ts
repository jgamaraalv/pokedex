import { Pokemon, PokemonWithData } from "../types/Pokemon";

export const getPokemonsData = async (pokemons: Pokemon[]) => {
  const pokemonsWithData = await Promise.all(
    pokemons.map(async (pokemon: Pokemon) => {
      const pokemonData: PokemonWithData = await fetchData(pokemon.url);

      const pokemonAbilities = await Promise.all(
        pokemonData.abilities.map(async (ability) => await fetchData(ability.ability.url))
      );

      const pokemonForms = await Promise.all(pokemonData.forms.map(async (form) => await fetchData(form.url)));

      return {
        ...pokemonData,
        abilities: pokemonAbilities,
        forms: pokemonForms,
      };
    })
  );
  
  return pokemonsWithData;
}

export const fetchData = async (url: string) => {
  const pokemonsPromise = await fetch(url);
  const pokemonsResponse = await pokemonsPromise.json();
  
  return pokemonsResponse;
}