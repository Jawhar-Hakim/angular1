import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'test1';
  isLogin: boolean = false;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isLogin = this.router.url.includes('/login');
      console.log('isLogin', this.isLogin);
    });
  }
}
