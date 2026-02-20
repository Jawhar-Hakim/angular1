import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  //declaration de form
  form!: FormGroup;
  idcourant: string = ''
  constructor(private MS: MemberService, private router: Router, private activatedRoute: ActivatedRoute,) {

  }
  //initialisation de form
  ngOnInit() {
    this.idcourant = this.activatedRoute.snapshot.params['id']
    if (this.idcourant) {
      this.MS.GetMemberByID(this.idcourant).subscribe((m)=>{
        this.form = new FormGroup({
        cin: new FormControl(m.cin),
        name: new FormControl(m.name),
        type: new FormControl(m.type),
        createdDate: new FormControl(m.createdDate)
      })
      })
    }
    //recuperer id de la route
    else {
      this.form = new FormGroup({
        cin: new FormControl(null),
        name: new FormControl(null),
        type: new FormControl(null),
        createdDate: new FormControl(null)
      })
    }
  }
  sub() {
    console.log(this.form.value)
    if(this.idcourant){
      this.MS.UpdateMember(this.idcourant,this.form.value).subscribe(()=>{
        this.router.navigate([''])
      })
    }
    else{this.MS.AddMember(this.form.value).subscribe(() => {
      this.router.navigate([''])
    })}
  }
}
