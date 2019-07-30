import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza.model';

 export const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: 'p1.jpg' },
  { id: 2, name: '4 fromages', price: 13,image: 'p2.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: 'p3.jpg' },
  { id: 4, name: 'Cannibale', price: 9,image: 'p4.jpg'}
];

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

getPizzas() : Pizza[]{
  return PIZZAS;
}
  constructor() { }
  
}
