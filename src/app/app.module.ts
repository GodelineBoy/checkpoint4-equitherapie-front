import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { EquitherapieComponent } from './equitherapie/equitherapie.component';
import { TherapeuteComponent } from './therapeute/therapeute.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminFormComponent } from './admin-form/admin-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    EquitherapieComponent,
    TherapeuteComponent,
    AdminComponent,
    NavbarComponent,
    ConfirmationModalComponent,
    AdminFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
