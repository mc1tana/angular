import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
