import {Component} from '@angular/core';

@Component({
   selector: 'app-template',
   templateUrl:'./template.component.html'
})
export class TemplateComponent{

  title = 'app';
inputShown:boolean = false;
personne = {
    nom: '',
    prenom: '',
    age:0
}

afficher() {
    console.log(this.personne);
}
  methode() {
    this.title = 'autre chose';
  }

  toggleInput() {
this.inputShown = !this.inputShown
  }

}