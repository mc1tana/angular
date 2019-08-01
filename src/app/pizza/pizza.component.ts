import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from   '../model/pizza.model';  
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
 // templateUrl: './pizza.component.html', 
 templateUrl:'./pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() selectedPizza: Pizza;
//on transforme selectedpizza en attr html
  constructor(private pizzaService : PizzaService) { }

  ngOnInit() {
  }
  update(){
    this.selectedPizza;
    this.pizzaService.updatePizza(this.selectedPizza);
    this.selectedPizza=null;
  }

}
