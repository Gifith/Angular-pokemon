import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonsService {
  // Retourne tous les pokémons
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Pokemon {
    const pokemons = this.getPokemons();

    for (const pokemon of pokemons) {
      if (id === pokemon.id) {
        return pokemon;
      }
    }
  }
}
