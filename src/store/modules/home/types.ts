import AsyncState from "../../../types/AsyncState";
import { Pokemon } from "../../../types/Pokemon";

type HomeModuleState = {
  pokemons: AsyncState<{
    count: number;
    next: string | null;
    previous: string | null; 
    results: Pokemon[];
  }>;
};

export default HomeModuleState;