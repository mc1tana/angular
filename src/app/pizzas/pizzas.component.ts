import { Component, OnInit,Input } from '@angular/core';
import { Pizza } from   '../model/pizza.model';  
import { PizzaService } from   '../pizza.service';  
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



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
      <div class="row">
       <a [routerLink]="'/pizza/create'" class="btn btn-primary mb-2 col-2 offset-5">Ajouter pizza</a>
      
      </div>
  <div class="pizzas row">

      
      <div class="col-lg-3"  *ngFor="let pizza of pizzas" > 
          <div class="card">
              <img class="card-img-top" [src]="'assets/images/'+pizza.image" >

            <div class="card-body">
              <h2 class="card-title">{{pizza.name}}</h2>
              <p>prix : {{pizza.price}} &euro;</p>
              <div class="card-footer text-center"> 
              <a [routerLink]="['/pizzas', pizza.id]" class="btn btn-primary mb-2">Voir la pizza</a>
              <button class="btn btn-primary mb-2" (click)="onSelect(pizza)" >selectionner la pizza</button>
              <button  class="btn btn-danger " (click)="open(content,pizza)" >suprimer pizza</button>

              </div>
              
            </div>
       </div>
            
        
      </div>
      

</div>
<ng-template #content let-modal>
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">suprimer la pizza</h4>
    <button type="button" class="close" aria-label="Close" (click)="modal.close('nodelete')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>etes vous sur de vouloir suprimer</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="modal.close('delete')">confirmer</button>
  </div>
</ng-template>`,
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  name='4fromages';
  pizzas : Pizza[];
  
  constructor(
    private pizzaService: PizzaService,
    private modalService :NgbModal
    ){
 
  }
  
  @Input() selectedPizza: Pizza;
//on transforme selectedpizza en attr html
ngOnInit(){
  this.pizzaService.getPizzas().then(pizzas=>this.pizzas=pizzas);
}
onSelect(pizza:Pizza){
  
  console.log (pizza);
  //on modif la prop pizz  de l'instance 
  //de AppComponent
  this.selectedPizza=pizza;
}
open(content, pizza:Pizza){
  this.modalService.open(content).result.then(result=>{
    if(result==='delete'){
        this.pizzaService.deletePizza(pizza).then(()=> this.pizzaService.getPizzas()).then(pizzas => this.pizzas =pizzas);
    }
});
 
}
}
