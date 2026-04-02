import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EvtService } from 'src/Services/evt.service';

@Component({
  selector: 'app-evt-create-comp',
  templateUrl: './evt-create-comp.component.html',
  styleUrls: ['./evt-create-comp.component.css']
})
export class EvtCreateCompComponent implements OnInit {
  form: FormGroup;
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    private dialogRef: MatDialogRef<EvtCreateCompComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ES: EvtService
  ) {
    this.form = new FormGroup({
      id: new FormControl(null),
      Titre: new FormControl(null),
      DateDebut: new FormControl(null),
      DateFin: new FormControl(null),
      Lieu: new FormControl(null),
      Actions: new FormControl(null)
    });

    if (data) {
      this.ES.getEventById(data).subscribe((E) => {
        this.form.patchValue(E);
        if (E.DateDebut || E.DateFin) {
          this.range.patchValue({
            start: E.DateDebut ? new Date(E.DateDebut as string) : null,
            end: E.DateFin ? new Date(E.DateFin as string) : null
          });
        }
      });
    }
  }

  ngOnInit() { }

  save() {
    const finalValue = {
      ...this.form.value,
      DateDebut: this.range.value.start,
      DateFin: this.range.value.end
    };
    
    // Remove null id to avoid issues with creation
    if (finalValue.id === null) {
      delete finalValue.id;
    }
    
    this.dialogRef.close(finalValue);
  }

  close() {
    this.dialogRef.close();
  }
}
