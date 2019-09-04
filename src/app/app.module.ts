import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PokemonsModule } from './pokemons/pokemons.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, PokemonsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
