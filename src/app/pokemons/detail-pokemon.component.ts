import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    const id = +this.route.snapshot.paramMap.get('id');
    for (const pokemon of this.pokemons) {
      if (pokemon.id === id) {
        this.pokemon = pokemon;
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
    // window.history.back();
  }
}
