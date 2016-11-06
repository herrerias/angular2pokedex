import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import { PokemonItem } from './pokemon-item.model';

@Component({
  selector: 'app-pokemon-item',
  outputs: ['pokemonRemoved'],
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
  // class 'card' as host in order to have <app-pokemon-item> tag with this class always
  host: {
    class: 'card'
  }
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: PokemonItem;
  pokemonRemoved: EventEmitter<PokemonItem>;

  constructor(){
    this.pokemonRemoved = new EventEmitter<PokemonItem>();
  }

  removePokemon() : void{
    this.pokemonRemoved.emit(this.pokemon);
  }

  setFavorite() : void {
    console.log(this.pokemon);
    this.pokemon.favorite = !this.pokemon.favorite;
  }

  ngOnInit() {
  }

}
