import { Component, OnInit } from '@angular/core';

import { TodoAjaxService } from '../shared/todo-ajax.service';


@Component({
    selector: 'app-todo',
    templateUrl: '.todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
    liste:Object[];
    newTodo:string;
}

constructor(private todoService:TodoAjaxService){
}

ngOnInit() {
    this.todoService.getAllTodo().then((todos) =>
this.liste = <object[]>todos);
}

addTodo(){
    /*
    Le addTodo attend un objet de type Todo, donc un 
    objet possédant au moins une propriété message et 
    une propriété id;
    */
    this.todoService.addTodo({message:this.newTodo})
    .then((todo) => this.liste.push(todo));
}

removeTodo(index:number){
this.todoService.removeTodo({id:index, message:''})
.then(()=> this.liste = this.liste.filter((todo)
=> todo.id !== index));
}
