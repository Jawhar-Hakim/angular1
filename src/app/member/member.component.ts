import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  //injection de dependances = mecanisme qui assure le devouplage entre
  //ma creation de l'ins et son utilisation
  constructor(private MS: MemberService, private dialog: MatDialog) { }//on a injecter MS dans memberComponent

  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate', 'actions'];
  dataSource: Member[] = []
  ngOnInit(): void {
    this.MS.GetAllMembers().subscribe((res) => {
      //action post
      this.dataSource = res
    })
  }
  delete(id: string) {
    //lancer la boite
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px'
    })
    //attendre le res de user
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.MS.DeleteMember(id).subscribe(() => {
          this.MS.GetAllMembers().subscribe((res) => {
            this.dataSource = res
          })
        })
      }
    })

  }
}
