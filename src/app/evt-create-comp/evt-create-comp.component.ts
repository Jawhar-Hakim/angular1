import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EvtService } from 'src/Services/evt.service';

@Component({
  selector: 'app-evt-create-comp',
  templateUrl: './evt-create-comp.component.html',
  styleUrls: ['./evt-create-comp.component.css']
})
export class EvtCreateCompComponent implements OnInit{
  constructor(private dialogRef:MatDialogRef<EvtCreateCompComponent>,@Inject(MAT_DIALOG_DATA)data:any,private ES:EvtService){
    if(data){
      this.ES.getEventById(data).subscribe((E)=>{
        this.form=new FormGroup({
          Titre:new FormControl(E.Titre),
          DateDebut:new FormControl(E.DateDebut),
        })
      })
    }
    else{
      this.form=new FormGroup({
      Titre:new  FormControl(null),
      DateDebut:new FormControl(null),
      DateFin:new FormControl(null),
      Lieu:new FormControl(null)
    })
    }
  }
  form!:FormGroup
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  ngOnInit(){
    
  }
  save() {
        this.dialogRef.close(this.form.value);

  }
  close() {
        this.dialogRef.close();
  }
}
