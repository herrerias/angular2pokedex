import { Component, OnInit } from '@angular/core';
import {PokemonItem} from "../pokemon-item/pokemon-item.model";
import {PokemonType} from "../pokemon-type/pokemon-type.model";

@Component({
  selector: 'app-list-pokedex',
  templateUrl: './list-pokedex.component.html',
  styleUrls: ['./list-pokedex.component.css']
})
export class ListPokedexComponent implements OnInit {
  search: String;
  pokemons: PokemonItem[];

  constructor() {
    let pokemon1 = new PokemonItem(1);
    pokemon1.name = "bulbasaur";
    pokemon1.description = "";
    pokemon1.types = [
      new PokemonType(4, "poison"),
      new PokemonType(12, "grass")
    ];
    pokemon1.favorite = true;

    let pokemon2 = new PokemonItem(100);
    pokemon2.name = "voltorb";
    pokemon2.description = "";
    pokemon2.types = [
      new PokemonType(13, "electric")
    ];

    this.pokemons = new Array<PokemonItem>();
    this.pokemons.push(pokemon1);
    this.pokemons.push(pokemon2);
  }

  removePokemon(pokemon: PokemonItem): void{
    let index = this.pokemons.indexOf(pokemon, 0);
    if (index > -1) {
      this.pokemons.splice(index, 1);
    }
    //TODO: llamar a servicio REST para eliminarlo de mi lista
  }

  ngOnInit() {
  }

}
