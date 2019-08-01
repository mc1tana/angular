import { Injectable } from '@angular/core';
import { Pizza } from './model/pizza.model';
import { HttpClient } from '@angular/common/http';

 

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) { }

  // permet de recuperer toutes les pizzas du site 
  // la fonction nous promet de renvoyer un tableau de pizzas
  getPizzas(): Promise<Pizza[]> {
    //on effectue une requete http en get sur notre api 
    //angular renvoie par defaut un pbservable mais on le converti en promesse avec toPromise()
    //quand la promesse est recu (then..), on renvoie les pizzaq de l'api
    //as pizzza permet de tricher sur le type renvoyé par la reponse
    return this.http.get('http://localhost:3000/pizzas').toPromise().then(
      response => response as Pizza[]
    );
  }

  getOnePizza(id: number) {
    //on va chercher la pizza qui a l'id passer en parametre de la fonction getOnePizza(id)
    //2==='2' pas possible car pas le meme type donc false
    return this.http.get('http://localhost:3000/pizzas/'+id).toPromise().then(
      response => response as Pizza
    );
  }

  //permet de modif une pizza sur notre api
  updatePizza(pizza: Pizza) {
    //la methode put de http est la meme que post
    //elle permet de mettre a jour un element 
    //premier arg de put est lurl de l'api
    //le second  arg est l'objet a metre a jour +
    return this.http.put('http://localhost:3000/pizzas/'+pizza.id, pizza).toPromise().then((response)=>response);
  }
//permet de creer une nouvelle pizza sur l'api
//ajouter un lien pour creer une pizza sur la page /pizzas
//ce lien va vers une route /pizza/createqui est reliée au composant PizzaCreate
//le composant contient une propriete pizza par defaut la pizza est initialisé a null
//et contiendra une methode save()
//le template du composant va contenir 3 champ (name, price est image )champ text
//au click sur le btn du formulaire (ajouter), on appellera la methode save( ) du composant
//dans la methode save( )du composant on appellera la methode createPizza() de notre 
//service poour inserer le pizza dans l'api via le service http (avec la methode post())
///on masquera le formulaire apres la sauvegarde
  createPizza(pizza : Pizza){
    return this.http.post('http://localhost:3000/pizzas', pizza).toPromise().then((response)=>response );
  }
  deletePizza(pizza  :  Pizza ){
    return this.http.delete('http://localhost:3000/pizzas/'+pizza.id).toPromise().then((response)=>response );
  }
}


