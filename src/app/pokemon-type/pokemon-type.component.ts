import {Component, OnInit, Input} from '@angular/core';
import {PokemonType} from './pokemon-type.model';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit {
  @Input() type: PokemonType;

  ngOnInit() {
  }

}
