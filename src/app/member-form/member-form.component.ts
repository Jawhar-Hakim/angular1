import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  //declaration de form
  form!:FormGroup;
  constructor(private MS:MemberService, private router:Router){

  }
  //initialisation de form
  ngOnInit(){
    //recuperer id de la route
    this.form=new FormGroup({
      cin: new FormControl(null),
      name: new FormControl(null),
      type: new FormControl(null),
      createdDate: new FormControl(null)
    })
  }
  sub(){
    console.log(this.form.value)
    this.MS.AddMember(this.form.value).subscribe(()=>{
      this.router.navigate([''])
    })
  }
}
