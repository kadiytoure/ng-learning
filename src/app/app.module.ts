import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { BoucleComponent } from './boucle/boucle.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './shared/todo.service';
import { TodoSecondComponent } from './todo-second/todo-second.component';
import { CompteurService } from './shared/compteur/compteur.service';
import { TodoAjaxService } from './shared/todo-ajax.service';
import { ListeChienComponent } from './liste-chien/liste-chien.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BoucleComponent,
    TodoComponent,
    TodoSecondComponent,
    ListeChienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    CompteurService,
    TodoAjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
