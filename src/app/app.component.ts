import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
inputShown:boolean = false;
  methode() {
    this.title = 'autre chose';
  }

  displayInput() {
this.inputShown = !this
  }
}
export class Todo {
  
}
