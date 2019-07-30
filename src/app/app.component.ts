import { Component } from '@angular/core';
import { Pizza } from   './model/pizza.model';  
import { PizzaService } from   './pizza.service';  



export const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12,image : "p1.jpg" },
  { id: 2, name: '4 fromages', price: 13, image : "p2.jpg"},
  { id: 3, name: 'Orientale', price: 11, image : "p3.jpg"},
  { id: 4, name: 'Cannibale', price: 9, image : "p4.jpg" }
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'pizzaparty';
  name='4fromages';
  pizzas : Pizza[];
  selectedPizza : Pizza;
  //on iinject pizzaservice dans le composant 
  //pour poouvi=oir l'utiliser avec this.pizzaservice
  constructor(private pizzaService: PizzaService){
 
  }
  //equivalent du document ready
  //quand le composant est pret dans le dom on recup
  //les pizzas
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
