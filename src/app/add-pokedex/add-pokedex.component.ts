import {Component, OnInit} from '@angular/core';
import {PokemonItem} from "../pokemon-item/pokemon-item.model";

@Component({
  selector: 'app-add-pokedex',
  templateUrl: './add-pokedex.component.html',
  styleUrls: ['./add-pokedex.component.css']
})
export class AddPokedexComponent implements OnInit {
  pokemons: PokemonItem[];

  updatePokemons(pokemons: PokemonItem[]): void {
    this.pokemons = pokemons;
    console.log("pokemons:", this.pokemons);
  }

  addPokemon(pokemon: PokemonItem): void{
    console.log("Pokemon añadido! -> ", pokemon);
  }

  ngOnInit() {
  }

}
