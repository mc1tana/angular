import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from   '../model/pizza.model';  

@Component({
  selector: 'app-pizza',
 // templateUrl: './pizza.component.html',
 template: `
 <div *ngIf="selectedPizza">
 <h2> {{ selectedPizza.name }} </h2>
 <p> {{ selectedPizza.price }}  </p>
 <label >name</label>
 <input [(ngModel)]="selectedPizza.name" placeholder="name">
</div>`,
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() selectedPizza: Pizza;
//on transforme selectedpizza en attr html
  constructor() { }

  ngOnInit() {
  }

}
