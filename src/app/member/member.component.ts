import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','createdDate','actions'];
  dataSource:any[]=[
    {
      id:'1234',
      cin:'1234',
      name:'jawhar',
      type:'teacher',
      createdDate:'1/1/1999'
    },
    {
      id:'1235',
      cin:'1235',
      name:'jawhar2',
      type:'teacher',
      createdDate:'1/1/1999'
    }
  ]
}
