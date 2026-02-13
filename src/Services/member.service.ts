import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberComponent } from 'src/app/member/member.component';
import { Member } from 'src/Models/Member';

@Injectable({
  providedIn: 'root'
})

export class MemberService {
  constructor(private httpClient:HttpClient){

  }
  //implementer les methodes qui generent des requetes
  // http vers le back
  GetAllMembers():Observable<Member[]>{
    //envoi de requete GET
    return this.httpClient.get<Member[]>
    ("http://localhost:3000/members")
  }
  AddMember(m:Member):Observable<void>{
    return this.httpClient.post<void>('http://localhost:3000/members',m)
  }
  DeleteMember(id:string):Observable<void>{
    return this.httpClient.delete<void>(`http://localhost:3000/members/${id}`)
  }
}
