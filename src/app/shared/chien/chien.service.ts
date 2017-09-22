import { Injectable } from '@angular/core';

@Injectable()
export class ChienService {
private urlAPI:string = 'http://localhost:3000/chien';
  constructor(private http:HttpClient) { }

  getAllChien():Promise<chien[]> {
    return this.http.get<chien[]>(this.urlAPI)
    .toPromise();
  }

  addChien(chien:chien): Promise<chien> {
     return this.http.post<chien>(this.urlAPI, chien)
     .toPromise();
  }

  removeChien(chien:chien): Promise<void> {
      return this.http.delete<void>(this.urlAPI+'/'
    +chien.id).toPromise();
  }

}
