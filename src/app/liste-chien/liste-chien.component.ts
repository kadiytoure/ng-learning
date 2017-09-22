import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-chien',
  templateUrl: './liste-chien.component.html',
  styleUrls: ['./liste-chien.component.css']
})
export class ListeChienComponent implements OnInit {
listeChien:Chien[];
nouveauChien:Chien;

  constructor(private chienService:chienService) { }

  ngOnInit() {
    this.chienService.getAllChien()
    .then((chiens) => this.listeChien = chiens);
  }

ajouter() {
  this.chienService.addChien(this.nouveauChien)
  .then((chien) => this.listeChien.push(chien));
}

addChien(chien:Chien): Promise<Chien> {
  return this.http.post<Chien>(this.urlAPI, chien)
  .toPromise();
}
}
