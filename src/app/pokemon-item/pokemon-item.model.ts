import { PokemonType } from '../pokemon-type/pokemon-type.model';

var PICTURE_URL_BASE: string = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
var PICTURE_BASE_EXTENSION: string = '.png';

export class PokemonItem{
  id: number;
  pictureUrl: String;
  name: String;
  description: String;
  types: PokemonType[];
  favorite: boolean;

  constructor(id: number){
    this.id = id;
    this.pictureUrl = this.getPictureUrl();
  }

  private getPictureUrl(): String{
    let idMask: String = String(this.id);
    if( idMask.length < 3){
      if( idMask.length < 2){
        idMask = "00"+idMask;
      }else{
        idMask = "0"+idMask;
      }
    }
    return PICTURE_URL_BASE+idMask+PICTURE_BASE_EXTENSION;
  }
}
