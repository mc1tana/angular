import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';


import { MenuComponent } from './menu/menu.component';

import { PizzaService } from './pizza.service';
import { HomeComponent } from './home/home.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MenuComponent,
    PizzasComponent,
    HomeComponent,
    PizzaSingleComponent,
    PizzaCreateComponent
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,

    RouterModule.forRoot([
      {
        path : 'pizzas',
        component :PizzasComponent
      },
      {
        path :'',
        component :HomeComponent
      },
      {
        path: 'pizzas/:id',
        component: PizzaSingleComponent
      },
      {
        path: 'pizza/create',
        component: PizzaCreateComponent
      }
      
    ])

    
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
