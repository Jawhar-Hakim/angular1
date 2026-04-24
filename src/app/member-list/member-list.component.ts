import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Evt } from 'src/Models/Evt';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  EvtRecu!:Evt
  tabMembers:Member[]=[]
  MS!:MemberService
  constructor(private dialogRef:MatDialogRef<MemberListComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.EvtRecu=data
    console.log(this.EvtRecu)
    this.MS.GetAllMembers().subscribe((res)=>{
      this.tabMembers=res
    })
  }
}
