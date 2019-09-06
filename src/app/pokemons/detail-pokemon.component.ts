import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getPokemon(id).subscribe(pokemon => (this.pokemon = pokemon));
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
    // window.history.back();
  }

  goEdit(pokemon: Pokemon): void {
    const link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }
}
