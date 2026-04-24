import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/Evt';
import { EvtService } from 'src/Services/evt.service';
import { EvtCreateCompComponent } from '../evt-create-comp/evt-create-comp.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MemberListComponent } from '../member-list/member-list.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements AfterViewInit{

  constructor(private ES:EvtService,private dialog:MatDialog){}
  displayedColumns: string[] = ['id', 'Titre', 'DateDebut', 'DateFin', 'Lieu','Actions'];
  dataSource=new MatTableDataSource<Evt>()
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  fetch(){
    this.ES.GetAllEvts().subscribe((res)=>{
      this.dataSource.data=res
    })
  }
  ngOnInit():void{
    this.fetch()
  }
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  open(){
    let x = this.dialog.open(EvtCreateCompComponent)
    x.afterClosed().subscribe((data)=>{
      if(data){
        this.ES.addEvent(data).subscribe(()=>{
          this.fetch()
        })
      }
    })
  }
  openEdit(id:String){
    const param = new MatDialogConfig();
    param.data=id
    let x = this.dialog.open(EvtCreateCompComponent,param)
    x.afterClosed().subscribe((res)=>{
      this.ES.updateEvent(res,id).subscribe(()=>{
        this.fetch()
      })
    })
  }
  openAssign(evt: Evt) {
  const param = new MatDialogConfig();
    param.data=evt
    let x = this.dialog.open(MemberListComponent,param)
}
}
