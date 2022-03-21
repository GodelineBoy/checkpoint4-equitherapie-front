import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ConfirmationModal } from 'src/model/ConfimModal.model';
import { Therapeute } from 'src/model/Therapeute.model';
import { TherapeuteService } from 'src/service/therapeute.service';
import { AdminFormComponent } from '../admin-form/admin-form.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message: string;
  therapeutes: Therapeute[];
  urlBack: string = environment.urlBack;
  downloadFile: string = environment.downloadFile;
  formdata!: FormData;
  therapeute!: Therapeute;

  constructor(private dialog: MatDialog, private therapeuteService: TherapeuteService) {
    this.therapeutes = [];
    this.message = '';
   }

  ngOnInit() {
    this.therapeuteService.getAllTherapeutes().subscribe((therapeutes: Therapeute[]) => {
      this.therapeutes = therapeutes;
    })
  }

  createTherapeute() {
    const dialogRef = this.dialog.open(AdminFormComponent, {
      width: '800px',
      height: '600px',
      data:'',
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      if(dialogResult === true) {
        this.therapeuteService.getAllTherapeutes().subscribe((therapeutes: Therapeute[]) => {
          this.therapeutes = therapeutes;
        });
      }
    });
  }

  putTherapeute(therapeute: Therapeute) {
    const dialogRef = this.dialog.open(AdminFormComponent, {
      width: '800px',
      height: '600px',
      data: therapeute,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      if(dialogResult === true) {
        this.therapeuteService.getAllTherapeutes().subscribe((therapeute: Therapeute[]) => {
          this.therapeutes = this.therapeutes;
        });
      }
    });
  }

  deleteTherapeute(id: number): void {
    this.message = `Si vous confirmez cette fiche thérapeute sera définitivement effacée`;

    const dialogData = new ConfirmationModal(this.message);
    
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      maxWidth: '400px',
      height: '200px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if(dialogResult === true) {
        this.therapeuteService.deleteTherapeute(id).subscribe(
        () => {
          // Find index of the current contact in contacts array
          const index = this.therapeutes.findIndex((element) => element.id === id);
          // Delete from front
          this.therapeutes.splice(index, 1);
        
        });
      }
    });
  }
}
