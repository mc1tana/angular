import { Component, OnInit } from '@angular/core';
import { Pizza } from   '../model/pizza.model';  
import { PizzaService } from   '../pizza.service';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    //quand ola requete ajax est terminé on recupe les pizzas
    this.pizzaService.getPizzas().then(pizzas=>this.pizzas=pizzas);
  }

}
