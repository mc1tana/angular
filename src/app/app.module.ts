import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router'

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzasComponent } from './pizzas/pizzas.component';

import { MenuComponent } from './menu/menu.component';

import { PizzaService } from './pizza.service';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MenuComponent,
    PizzasComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path : 'pizzas',
        component :PizzasComponent
      }
    ])

    
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
