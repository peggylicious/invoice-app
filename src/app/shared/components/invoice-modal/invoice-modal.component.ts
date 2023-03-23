import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css']
})
export class InvoiceModalComponent implements OnInit {
  @Input() openModal:boolean = false;
  description: any;
  title: any;
  constructor(private dialogRef: MatDialogRef<InvoiceModalComponent>, @Inject(MAT_DIALOG_DATA) data:any) { 
    this.description = data.description
    this.title = data.title
   }

  ngOnInit(): void {
    
  }

  save() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }

}


// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'dialog-data-example-dialog.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }