import { Component, OnInit } from "@angular/core";

import { TodoAjaxService } from '../shared/todo-ajax-service';
import  { Todo } from '../shared/todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    liste:Todo[];
    newTodo:string;

constructor(private todoService:TodoAjaxService){

}
ngOnInit() {
    this.todoService.getAllTodo().then((todos) => this.liste = todos);
}
addTodo(){
    this.todoService.addTodo({message:this.newTodo})
    .then((todo) => this.liste = this.liste.filter((todo) => todo.id !== index));
}
}