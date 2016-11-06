
var CSS_COLOR = {
  1 : "orange",
  2 : "yellow",
  3 : "olive",
  4 : "green",
  5 : "teal",
  6 : "blue",
  7 : "violet",
  8 : "purple",
  9 : "pink",
  10 : "brown",
  11 : "grey",
  12 : "black",
  13 : "orange",
  14 : "yellow",
  15 : "olive",
  16 : "green"
};

export class PokemonType{
  id: number;
  name: string;
  color: string;

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
    this.color = CSS_COLOR[id];
  }
}
