import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/Evt';
import { EvtService } from 'src/Services/evt.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private ES:EvtService,private dialog:MatDialog){}
  displayedColumns: string[] = ['id', 'Titre', 'DateDebut', 'DateFin', 'Lieu'];
  dataSource=new MatTableDataSource<Evt>()
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit():void{
    this.ES.GetAllEvts().subscribe((res)=>{
      this.dataSource.data=res
    })
  }
}
