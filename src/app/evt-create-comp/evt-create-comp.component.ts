import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-evt-create-comp',
  templateUrl: './evt-create-comp.component.html',
  styleUrls: ['./evt-create-comp.component.css']
})
export class EvtCreateCompComponent implements OnInit{
  constructor(private dialogRef:MatDialogRef<EvtCreateCompComponent>){}
  form!:FormGroup
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  ngOnInit(){
    this.form=new FormGroup({
      Titre:new  FormControl(null),
      DateDebut:new FormControl(null),
      DateFin:new FormControl(null),
      Lieu:new FormControl(null)
    })
  }
  save() {
        this.dialogRef.close(this.form.value);

  }
  close() {
        this.dialogRef.close();
  }
}
