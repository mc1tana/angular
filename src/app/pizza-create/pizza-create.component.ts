import { Component, OnInit, Input} from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../model/pizza.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent implements OnInit {
   pizza = new Pizza();
  constructor(
    private pizzaService : PizzaService,
    private location :Location
    ) { }

  ngOnInit() {
  }
  save(pizza){
    
    this.pizzaService.createPizza(pizza).then(pizza => this.location.back())

    
  }
}
