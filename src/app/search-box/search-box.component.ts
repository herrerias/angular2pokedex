import {Component, OnInit, EventEmitter, ElementRef} from '@angular/core';
import {PokemonItem} from "../pokemon-item/pokemon-item.model";
import {Observable} from "rxjs";
import {PokeapiService} from "../pokeapi.service";

@Component({
  outputs: ['loading', 'results'],
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  host: {
    class: 'ui icon input'
  }
})
export class SearchBoxComponent implements OnInit {
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<PokemonItem[]> = new EventEmitter<PokemonItem[]>();

  constructor(public pokeapi: PokeapiService,
              private el: ElementRef) {
  }

  ngOnInit() {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250)                         // only once every 250ms
      .do(() => this.loading.next(true))         // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.pokeapi.searchById(1));
      /*.switch()
      // act on the return of the search
      .subscribe(
        (results: PokemonItem[]) => { // on sucesss
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.next(false);
        },
        () => { // on completion
          this.loading.next(false);
        }
      );*/
  }

}
