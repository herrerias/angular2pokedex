import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

/*
 * Injectables
 */
import {pokeapiServiceInjectables} from './pokeapi.service';

/*
 * Routes
 */
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {PokemonItemComponent} from './pokemon-item/pokemon-item.component';
import {PokemonTypeComponent} from './pokemon-type/pokemon-type.component';
import {ListPokedexComponent} from './list-pokedex/list-pokedex.component';
import {AddPokedexComponent} from './add-pokedex/add-pokedex.component';
import {HomePokedexComponent} from './home-pokedex/home-pokedex.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePokedexComponent  },
  {path: 'list', component: ListPokedexComponent},
  {path: 'add', component: AddPokedexComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    PokemonItemComponent,
    PokemonTypeComponent,
    ListPokedexComponent,
    AddPokedexComponent,
    HomePokedexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    pokeapiServiceInjectables,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
