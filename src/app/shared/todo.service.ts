import { Injectable } from '@angular/core';
import {} from '../shared/todo.service';
/*
Les services servent à encapsuler la logique 
business d'une application angular 
Ils pourront être facilement injectés et partagés
entre plusieurs components et autres services
*/

@Component({
selector: 'app-todo',
templateUrl: './todo.component.html',
styleUrl: ''
})

@Injectable()
export class TodoComponent implements OnInit {
   liste:string[] = [
       'ga',
       'zo',
       'meu'
   ];
    newTodo:string;

    constructor() {

    }

   getTodos():string[] {
    return this.liste;
   }

add(todo:string){
    this.liste.push(todo);
}

remove(index:number){
    this.liste.splice(index,1);
}
}