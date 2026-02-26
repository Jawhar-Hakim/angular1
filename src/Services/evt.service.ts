import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Models/Evt';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EvtService {

  constructor(private httpClient:HttpClient) { }
  GetAllEvts():Observable<Evt[]>{
    return this.httpClient.get<Evt[]>('http://localhost:3000/EVTS')
  }
}
