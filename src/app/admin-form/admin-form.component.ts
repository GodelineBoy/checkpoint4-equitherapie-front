import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Therapeute } from 'src/model/Therapeute.model';
import { TherapeuteService } from 'src/service/therapeute.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  urlBack: string = environment.urlBack;
  downloadFile: string = environment.downloadFile;
  editForm : FormGroup;
  therapeute!: Therapeute;
  therapeuteId!: number | null;
  therapeutePhoto: string | null;
  therapeutePhotoPreview: string | null;
  fileName: string;
  file: File | undefined;
  formData: FormData;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AdminFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Therapeute, 
    private therapeuteService: TherapeuteService) { 

      this.fileName = '';
      this.formData = new FormData();
      this.therapeuteId = data.id || null;
      this.therapeutePhoto = data.photo?.src || null;
      this.therapeutePhotoPreview = null;

      this.editForm = this.fb.group({
        photo: [null],
        nom: [data.nom || ''],
        description: [data.description || ''],
        }
      );
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    get photoSrc(): string {
      if (this.therapeutePhotoPreview) {
        return this.therapeutePhotoPreview;
      } else if (this.therapeutePhoto) {
        return this.downloadFile + this.therapeutePhoto;
      } else {
        return 'assets/img/defaultProfilePicture.png';
      }
    }

    onFileSelected($event: Event) {
      const target = $event.target as HTMLInputElement;
      const files = target?.files;
      // check if files array exists
      if (!files) return;
  
      // check if one file is given
      const file = files[0];
      if (file) {
        this.fileName = file.name;
        this.file = file;
  
        // to have a preview photo
        const reader = new FileReader();
        reader.onload = () => {
          //type e.target.result as string
          this.therapeutePhotoPreview = (reader.result as string) || null;
        };
        reader.readAsDataURL(file);
      }
    }
  
        close(): void {
          this.dialogRef.close(false);
        }
        onConfirm(): void {
         this.formData.set('nom', this.editForm.value.nom);
         this.formData.set('description', this.editForm.value.description);
         if (this.file) {
           this.formData.set('photo', this.file);
         }
         
          if(this.therapeuteId) {
            this.therapeuteService.putTherapeute(this.therapeuteId, this.formData).subscribe();
          } 
          else {
            this.therapeuteService.postTherapeute(this.formData).subscribe();
          } 

          this.dialogRef.close(true);
        }

}
