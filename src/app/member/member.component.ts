import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit{
  //injection de dependances = mecanisme qui assure le devouplage entre
  //ma creation de l'ins et son utilisation
  constructor(private MS:MemberService){}//on a injecter MS dans memberComponent

  displayedColumns: string[] = ['id', 'cin', 'name', 'type','createdDate','actions'];
  dataSource:Member[]=[]
  ngOnInit(): void {
    this.MS.GetAllMembers().subscribe((res)=>{
      //action post
      this.dataSource=res
    })
  }
}
