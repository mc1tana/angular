import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Pizza } from   '../model/pizza.model';  
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.css']
})
export class PizzaSingleComponent implements OnInit {
  id : number;
  pizza:Pizza;
  constructor(
    private route : ActivatedRoute,
    private pizzaService : PizzaService

    ) { }

  ngOnInit() {
    //equvalent d'un $_GEt['id'] en php
    this.id = this.route.snapshot.params.id;
     this.pizzaService.getOnePizza(this.id).then(pizza=>this.pizza=pizza);
  }

}
