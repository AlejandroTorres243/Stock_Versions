import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-confirm-delete-libros',
  templateUrl: './confirm-delete-libros.component.html',
  styleUrls: ['./confirm-delete-libros.component.sass']
})
export class ConfirmDeleteLibrosComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<ConfirmDeleteLibrosComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
