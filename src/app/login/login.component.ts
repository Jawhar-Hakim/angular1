import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AS:AuthService,private router:Router){}
  email:string="";
  password:string="";
  login(){
    console.log(this.email,this.password);
    this.AS.signInWithEmailAndPassword(this.email,this.password).then(()=>{
      this.router.navigate(['/member'])
    })
  }
}
