import { Component } from '@angular/core';

export class Pizza {
 
  id : number;
  name: string;
  price:number;
  image:string;
}

const PIZZAS : Pizza[] = [
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
  pizzas = PIZZAS;
  selectedPizza : Pizza;
  onSelect(pizza:Pizza){
    console.log (pizza);
    //on modif la prop pizz  de l'instance 
    //de AppComponent
    this.selectedPizza=pizza;
  }
}
