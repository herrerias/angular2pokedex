import {Injectable} from '@angular/core';
import {PokemonItem} from "./pokemon-item/pokemon-item.model";
import {PokemonType} from "./pokemon-type/pokemon-type.model";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

export var POKEAPI_URL_BASE: string = 'http://pokeapi.co/api/v2/';
export var GET_ALL_POKEMON: string = 'pokemon-form/';

@Injectable()
export class PokeapiService {
  data: PokemonItem[];

  constructor(public http: Http) {
  }

  searchByName(name: String): PokemonItem[] {
    return new Array<PokemonItem>();
  }

  searchById(id: number): PokemonItem[] {
    let queryUrl: string = POKEAPI_URL_BASE + GET_ALL_POKEMON + id;
    console.log("SearchById --> ", queryUrl);

    this.http.request(queryUrl)
      .subscribe((res: Response) => {
        let item : any = res.json();
        console.log("Item -> ", item);
        let pokemonItem = new PokemonItem(item.id);
        pokemonItem.name = item.name;
        this.data = [pokemonItem];
      });
    console.log("datos -> ",this.data);
    return this.data;

    /*return this.http.get(queryUrl)
     .map((response: Response) => {
     return (<any>response.json()).items.map(item => {
     console.log("raw item", item); // uncomment if you want to debug
     let pokemonItem = new PokemonItem(item.id);
     pokemonItem.name = item.name;
     //pokemonItem.types = types: PokemonType[];
     return pokemonItem;
     });
     });*/
  }

  searchByType(type: PokemonType): PokemonItem[] {
    return new Array<PokemonItem>();
  }
}

export var pokeapiServiceInjectables: Array<any> = [
  {provide: PokeapiService, useClass: PokeapiService}
];
