import { Component, OnInit,Input } from '@angular/core';
import { Pizza } from   '../model/pizza.model';  
import { PizzaService } from   '../pizza.service';  


export const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image : "p1.jpg" },
  { id: 2, name: '4 fromages', price: 13, image : "p2.jpg"},
  { id: 3, name: 'Orientale', price: 11, image : "p3.jpg"},
  { id: 4, name: 'Cannibale', price: 9, image : "p4.jpg" }
];
@Component({
  selector: 'app-pizzas',
  template: `<app-pizza [selectedPizza]="selectedPizza">

  </app-pizza>

  <div class="pizzas row">

      
 
      <div class="col-lg-3"  *ngFor="let pizza of pizzas" (click)="onSelect(pizza)"> 
          <div class="card">
              <img class="card-img-top" [src]="'assets/images/'+pizza.image" >

            <div class="card-body">
              <h2 class="card-title">{{pizza.name}}</h2>
              <p>prix : {{pizza.price}} &euro;</p>
              
              <a href="#" class="btn btn-primary">ajouter</a>
            </div>
          </div>
            
        
      </div>
      

</div>`,
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  name='4fromages';
  pizzas : Pizza[];
  
  constructor(private pizzaService: PizzaService){
 
  }
  
  @Input() selectedPizza: Pizza;
//on transforme selectedpizza en attr html
ngOnInit(){
  this.pizzas=this.pizzaService.getPizzas();
}
onSelect(pizza:Pizza){
  
  console.log (pizza);
  //on modif la prop pizz  de l'instance 
  //de AppComponent
  this.selectedPizza=pizza;
}
}
