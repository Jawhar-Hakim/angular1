import { Component } from '@angular/core';
import { EvtService } from 'src/Services/evt.service';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  NbMembers:number=0;
  NbEvents:number=0;
  NbArticles:number=0;
  NbTools:number=0;
  constructor(private Ms:MemberService,private Es:EvtService){
    this.Ms.GetAllMembers().subscribe((members)=>{
      this.NbMembers=members.length
    })
    this.Es.GetAllEvts().subscribe((events)=>{
      this.NbEvents=events.length
    })
  }

}
