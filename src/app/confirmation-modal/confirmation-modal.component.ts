import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationModal } from 'src/model/ConfimModal.model';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  message: string;
  
  constructor( public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationModal) { 
      this.message = data.message;
    }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   onConfirm() {
    this.dialogRef.close(true);
  }

  onDismiss() {
    this.dialogRef.close(false);
  }

}
